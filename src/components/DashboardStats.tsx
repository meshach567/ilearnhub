import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, TrendingUp, Clock } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: string;
}

function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {trend && <span className="text-green-600">{trend}</span>}{" "}
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Users"
        value="2,350"
        description="from last month"
        trend="+20.1%"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Active Sessions"
        value="1,429"
        description="currently online"
        icon={<Activity className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Growth Rate"
        value="12.5%"
        description="vs last quarter"
        trend="+5.2%"
        icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Avg Session"
        value="23m 47s"
        description="user engagement"
        icon={<Clock className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}
