import { WellnessCard } from "@/components/WellnessCard";
import { WellnessTip } from "@/components/WellnessTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Moon, 
  Dumbbell, 
  Apple, 
  Smile, 
  TrendingUp,
  Calendar,
  Target
} from "lucide-react";
import wellnessHero from "@/assets/wellness-hero.jpg";

const WellnessDashboard = () => {
  const wellnessTips = [
    { tip: "Take a 10-minute walk after each meal to improve digestion", category: "Movement" },
    { tip: "Practice deep breathing for 5 minutes when you feel stressed", category: "Mindfulness" },
    { tip: "Drink a glass of water as soon as you wake up", category: "Hydration" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src={wellnessHero} 
            alt="Wellness Hero" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Wellness Journey
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Track your health, build better habits, and achieve your wellness goals with personalized insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-wellness-primary hover:bg-wellness-primary/90">
                <Target className="h-4 w-4 mr-2" />
                Set New Goal
              </Button>
              <Button variant="secondary" size="lg">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="container mx-auto px-4 py-12">
        {/* Today's Overview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Today's Overview</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WellnessCard
              title="Steps Taken"
              value={8547}
              goal={10000}
              unit="steps"
              progress={85}
              icon={<Dumbbell className="h-4 w-4" />}
              trend="up"
            />
            <WellnessCard
              title="Sleep Quality"
              value={7.5}
              goal={8}
              unit="hours"
              progress={94}
              icon={<Moon className="h-4 w-4" />}
              trend="up"
            />
            <WellnessCard
              title="Water Intake"
              value={6}
              goal={8}
              unit="glasses"
              progress={75}
              icon={<Apple className="h-4 w-4" />}
              trend="stable"
            />
            <WellnessCard
              title="Mood Score"
              value="Great"
              icon={<Smile className="h-4 w-4" />}
              trend="up"
            />
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Weekly Progress</h2>
          <Card className="bg-gradient-card shadow-card-custom border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 text-wellness-primary mr-2" />
                Health Score Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-wellness-primary mb-2">87</div>
                  <div className="text-sm text-muted-foreground">Overall Wellness Score</div>
                  <div className="text-xs text-wellness-primary mt-1">↗ +5 from last week</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Wellness Tips */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Wellness Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wellnessTips.map((tip, index) => (
              <WellnessTip
                key={index}
                tip={tip.tip}
                category={tip.category}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessDashboard;