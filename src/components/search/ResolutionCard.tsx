
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface ResolutionCardProps {
  id: string;
  title: string;
  entity: string;
  tags: string[];
  date: string;
  summary: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function ResolutionCard({ 
  id, 
  title, 
  entity, 
  tags, 
  date, 
  summary,
  isFavorite = false,
  onToggleFavorite 
}: ResolutionCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2">{entity}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-legal-lightPurple text-legal-darkPurple">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{summary}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onToggleFavorite}
                className={isFavorite 
                  ? "text-yellow-500 hover:text-yellow-600" 
                  : "text-muted-foreground hover:text-yellow-500"
                }
              >
                <Star className="h-5 w-5 fill-current" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Agregar a favoritos</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Button asChild size="sm" className="bg-legal-purple hover:bg-legal-darkPurple">
          <Link to={`/resolutions/${id}`}>
            <FileText className="h-4 w-4 mr-2" />
            Ver documento
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
