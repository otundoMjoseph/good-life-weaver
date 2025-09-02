import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Check } from "lucide-react";

interface WellnessTipProps {
  tip: string;
  category: string;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

export const WellnessTip = ({ tip, category, isCompleted = false, onToggleComplete }: WellnessTipProps) => {
  return (
    <Card className={`bg-gradient-wellness shadow-card-custom border-0 transition-all duration-300 ${
      isCompleted ? 'opacity-75 bg-gradient-to-br from-green-500 to-green-600' : ''
    }`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className={`p-2 rounded-full ${
              isCompleted ? 'bg-white/30' : 'bg-white/20'
            }`}>
              {isCompleted ? (
                <Check className="h-4 w-4 text-white" />
              ) : (
                <Lightbulb className="h-4 w-4 text-white" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">
                {category}
              </div>
              <p className={`text-sm text-white font-medium ${
                isCompleted ? 'line-through opacity-80' : ''
              }`}>
                {tip}
              </p>
            </div>
          </div>
          {onToggleComplete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleComplete}
              className="text-white hover:bg-white/20 ml-2"
            >
              {isCompleted ? 'Undo' : 'Done'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};