
import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface FilterOption {
  id: string;
  label: string;
  children?: FilterOption[];
}

export interface HierarchicalFilterProps {
  filterData: FilterOption[];
  selectedOptions: string[];
  onSelectionChange: (selectedIds: string[]) => void;
}

export const HierarchicalFilter: React.FC<HierarchicalFilterProps> = ({
  filterData,
  selectedOptions,
  onSelectionChange,
}) => {
  const [activeTab, setActiveTab] = useState<string>(filterData[0]?.id || "");
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Handle checkbox selection
  const handleOptionSelect = useCallback((optionId: string) => {
    onSelectionChange(
      selectedOptions.includes(optionId)
        ? selectedOptions.filter((id) => id !== optionId)
        : [...selectedOptions, optionId]
    );
  }, [selectedOptions, onSelectionChange]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdownId && dropdownRefs.current[openDropdownId]) {
        const dropdownElement = dropdownRefs.current[openDropdownId];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setOpenDropdownId(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownId]);

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start overflow-x-auto">
          {filterData.map((mainCategory) => (
            <TabsTrigger
              key={mainCategory.id}
              value={mainCategory.id}
              className="text-sm whitespace-nowrap"
            >
              {mainCategory.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-4">
        {filterData
          .filter((category) => category.id === activeTab)
          .map((activeCategory) => (
            <div key={activeCategory.id} className="space-y-2">
              {activeCategory.children?.map((subCategory) => (
                <div
                  key={subCategory.id}
                  ref={(el) => (dropdownRefs.current[subCategory.id] = el)}
                  className="relative"
                >
                  {subCategory.children ? (
                    <DropdownMenu
                      open={openDropdownId === subCategory.id}
                      onOpenChange={(isOpen) => {
                        setOpenDropdownId(isOpen ? subCategory.id : null);
                      }}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          className="flex w-full items-center justify-between rounded-md border p-3 text-left text-sm hover:bg-muted"
                        >
                          <span>{subCategory.label}</span>
                          {openDropdownId === subCategory.id ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[280px] bg-white" align="start">
                        {subCategory.children.map((option) => (
                          <DropdownMenuItem
                            key={option.id}
                            onSelect={(e) => {
                              e.preventDefault();
                              handleOptionSelect(option.id);
                            }}
                            className="flex items-center space-x-2 p-2"
                          >
                            <Checkbox
                              id={`option-${option.id}`}
                              checked={selectedOptions.includes(option.id)}
                              onCheckedChange={() => handleOptionSelect(option.id)}
                            />
                            <Label
                              htmlFor={`option-${option.id}`}
                              className="cursor-pointer text-sm"
                            >
                              {option.label}
                            </Label>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <Checkbox
                        id={`option-${subCategory.id}`}
                        checked={selectedOptions.includes(subCategory.id)}
                        onCheckedChange={() => handleOptionSelect(subCategory.id)}
                      />
                      <Label
                        htmlFor={`option-${subCategory.id}`}
                        className="cursor-pointer text-sm"
                      >
                        {subCategory.label}
                      </Label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
