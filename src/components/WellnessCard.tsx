import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface WellnessCardProps {
  title: string;
  value: string | number;
  goal?: string | number;
  unit?: string;
  progress?: number;
  icon: React.ReactNode;
  trend?: "up" | "down" | "stable";
  className?: string;
}

export const WellnessCard = ({
  title,
  value,
  goal,
  unit,
  progress,
  icon,
  trend,
  className
}: WellnessCardProps) => {
  return (
    <Card className={`bg-gradient-card shadow-card-custom border-0 hover:shadow-wellness transition-all duration-300 ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-wellness-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold text-foreground">
            {value}
          </div>
          {unit && (
            <span className="text-sm text-muted-foreground">{unit}</span>
          )}
        </div>
        
        {goal && (
          <div className="text-xs text-muted-foreground mt-1">
            Goal: {goal} {unit}
          </div>
        )}
        
        {progress !== undefined && (
          <div className="mt-3">
            <Progress value={progress} className="h-2" />
            <div className="text-xs text-muted-foreground mt-1">
              {progress}% of goal
            </div>
          </div>
        )}
        
        {trend && (
          <div className={`text-xs mt-2 flex items-center space-x-1 ${
            trend === 'up' ? 'text-wellness-primary' :
            trend === 'down' ? 'text-destructive' :
            'text-muted-foreground'
          }`}>
            {trend === 'up' && <span>↗</span>}
            {trend === 'down' && <span>↘</span>}
            {trend === 'stable' && <span>→</span>}
            <span>
              {trend === 'up' ? 'Improving' :
               trend === 'down' ? 'Declining' :
               'Stable'}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};