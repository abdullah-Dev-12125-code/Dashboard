import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, LineChart, TrendingUp, Users, Utensils, Clock, Package } from "lucide-react";

/**
 * Design Philosophy: Modern Minimalist with Golden Accents
 * - Detailed feature showcase with card-based layout
 * - Strategic gold accents for emphasis
 * - Clean typography hierarchy
 */

export default function Features() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Dashboard Features
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Comprehensive analytics tools designed to give you complete visibility into your restaurant's operations and performance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {detailedFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {feature.category}
                  </span>
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-foreground/60">
                  {feature.description}
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Metrics:</p>
                  <ul className="space-y-1">
                    {feature.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visualization Types Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Advanced Visualizations
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualizations.map((viz, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/5 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  {viz.icon}
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2">{viz.name}</h3>
                <p className="text-sm text-foreground/60">{viz.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Insights Section */}
        <div className="mt-24 bg-secondary/5 rounded-3xl p-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Actionable Insights
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="space-y-4">
                <div className="text-4xl font-serif font-bold text-accent">{insight.stat}</div>
                <h3 className="text-xl font-serif font-bold text-foreground">{insight.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Capabilities */}
        <div className="mt-24">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Real-Time Capabilities
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <capability.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      {capability.name}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const detailedFeatures = [
  {
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    category: "Analytics",
    title: "Sales Analysis",
    description: "Comprehensive sales tracking with daily revenue trends, sales volume analysis, and top-performing dishes",
    metrics: ["Daily Revenue Trends", "Sales Volume by Item", "Top 10 Best Sellers", "Revenue Comparisons"]
  },
  {
    icon: <Utensils className="h-6 w-6 text-accent" />,
    category: "Menu",
    title: "Menu Performance",
    description: "Identify your most profitable and popular dishes with detailed performance analytics",
    metrics: ["Dish Popularity Ranking", "Profitability Analysis", "Category Breakdown", "Price vs. Demand"]
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    category: "Finance",
    title: "Financial Insights",
    description: "Monitor expenses, revenue, and profit margins with comprehensive financial dashboards",
    metrics: ["Revenue vs. Expenses", "Expense Breakdown", "Net Profit Trends", "Cost Analysis"]
  },
  {
    icon: <Clock className="h-6 w-6 text-accent" />,
    category: "Operations",
    title: "Hourly Trends",
    description: "Analyze peak hours and customer traffic patterns to optimize staffing and inventory",
    metrics: ["Peak Hour Identification", "Traffic Heatmaps", "Hourly Revenue", "Customer Patterns"]
  },
  {
    icon: <Package className="h-6 w-6 text-accent" />,
    category: "Inventory",
    title: "Inventory Management",
    description: "Track stock levels and receive alerts for items running low on inventory",
    metrics: ["Stock Level Monitoring", "Low Stock Alerts", "Usage Trends", "Reorder Recommendations"]
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    category: "HR",
    title: "Staff Performance",
    description: "Monitor staff hours, performance scores, and identify top performers",
    metrics: ["Hours Tracking", "Performance Scores", "Top Performers", "Scheduling Insights"]
  }
];

const visualizations = [
  {
    icon: <LineChart className="h-6 w-6 text-accent" />,
    name: "Line Charts",
    description: "Track trends over time with smooth, interactive line visualizations"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    name: "Bar Charts",
    description: "Compare values across categories with clear, easy-to-read bars"
  },
  {
    icon: <PieChart className="h-6 w-6 text-accent" />,
    name: "Pie Charts",
    description: "Visualize proportions and distributions of your data"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    name: "Heatmaps",
    description: "Identify patterns and peak times with color-coded heatmaps"
  }
];

const insights = [
  {
    stat: "30",
    title: "Days of Data",
    description: "Comprehensive historical data spanning a full month of operations for trend analysis"
  },
  {
    stat: "12",
    title: "Menu Items",
    description: "Track performance across your entire menu from appetizers to desserts"
  },
  {
    stat: "7",
    title: "Dashboard Pages",
    description: "Seven specialized pages covering every aspect of your restaurant business"
  }
];

const capabilities = [
  {
    icon: TrendingUp,
    name: "Live Data Updates",
    description: "Dashboard updates in real-time as new orders and transactions are processed"
  },
  {
    icon: BarChart3,
    name: "Interactive Charts",
    description: "Hover, zoom, and interact with charts to explore data in detail"
  },
  {
    icon: Users,
    name: "Multi-User Access",
    description: "Share dashboards with your team for collaborative decision-making"
  },
  {
    icon: Package,
    name: "Export Capabilities",
    description: "Export reports and data for further analysis or stakeholder presentations"
  }
];
