import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface WellnessTipProps {
  tip: string;
  category: string;
}

export const WellnessTip = ({ tip, category }: WellnessTipProps) => {
  return (
    <Card className="bg-gradient-wellness shadow-card-custom border-0">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Lightbulb className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">
              {category}
            </div>
            <p className="text-sm text-white font-medium">
              {tip}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};