import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Utensils, TrendingUp, Clock, Package, Users, Home } from "lucide-react";

/**
 * Design Philosophy: Modern Minimalist with Golden Accents
 * - Gallery layout showcasing each dashboard page
 * - Consistent card-based design
 * - Gold accents for visual hierarchy
 */

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Dashboard Gallery
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Explore each page of the restaurant dashboard and discover the powerful insights available
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryPages.map((page, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card/50 backdrop-blur-sm"
            >
              {/* Mock Preview */}
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 space-y-4">
                    <page.icon className="h-12 w-12 text-accent opacity-50" />
                    <div className="text-center">
                      <p className="text-sm text-foreground/50 font-semibold">{page.name}</p>
                      <p className="text-xs text-foreground/30">Dashboard Preview</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                    {page.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <page.icon className="h-6 w-6 text-accent" />
                  {page.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-base text-foreground/60">
                  {page.description}
                </CardDescription>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">What You'll See:</p>
                  <ul className="space-y-2">
                    {page.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-foreground/50">
                    <span className="font-semibold text-foreground">Use Case:</span> {page.useCase}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Metrics Section */}
        <div className="mt-24 bg-secondary/5 rounded-3xl p-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Dashboard Statistics
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-serif font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-foreground font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-foreground/60">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Visualization Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Visualization Types
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visualizationTypes.map((viz, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <viz.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {viz.name}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  {viz.description}
                </p>
                <ul className="space-y-1">
                  {viz.examples.map((example, idx) => (
                    <li key={idx} className="text-xs text-foreground/50 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Data Section */}
        <div className="mt-24 bg-secondary/5 rounded-3xl p-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Sample Data Coverage
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-foreground">Menu Items</h3>
              <div className="space-y-2">
                {menuCategories.map((category, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground/70">{category.name}</span>
                    <span className="text-accent font-semibold">{category.count} items</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-foreground">Expense Categories</h3>
              <div className="space-y-2">
                {expenseCategories.map((category, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground/70">{category.name}</span>
                    <span className="text-accent font-semibold">{category.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const galleryPages = [
  {
    icon: Home,
    name: "Overview",
    category: "Dashboard",
    description: "Your restaurant's command center with key metrics at a glance",
    features: [
      "Total revenue and order count",
      "Average order value",
      "Best-selling dish highlight",
      "Daily revenue trends",
      "Sales by category pie chart"
    ],
    useCase: "Quick daily check-in to monitor overall restaurant health"
  },
  {
    icon: BarChart3,
    name: "Sales Analysis",
    category: "Analytics",
    description: "Deep dive into sales performance with comprehensive visualizations",
    features: [
      "Sales volume over time",
      "Top 10 dishes by quantity",
      "Top 10 dishes by revenue",
      "Daily order trends",
      "Revenue comparisons"
    ],
    useCase: "Understand which products drive revenue and volume"
  },
  {
    icon: Utensils,
    name: "Menu Performance",
    category: "Menu",
    description: "Analyze dish profitability and popularity metrics",
    features: [
      "Popularity vs profitability scatter plot",
      "Category distribution sunburst chart",
      "Price point analysis",
      "Item performance ranking",
      "Seasonal trends"
    ],
    useCase: "Make informed decisions about menu pricing and offerings"
  },
  {
    icon: TrendingUp,
    name: "Financials",
    category: "Finance",
    description: "Complete financial overview with revenue and expense tracking",
    features: [
      "Revenue vs expenses comparison",
      "Expense breakdown by category",
      "Net profit trends",
      "Cost analysis",
      "Margin calculations"
    ],
    useCase: "Monitor financial health and identify cost-saving opportunities"
  },
  {
    icon: Clock,
    name: "Hourly Trends",
    category: "Operations",
    description: "Identify peak hours and optimize staffing and inventory",
    features: [
      "Orders by hour of day",
      "Peak hours heatmap",
      "Day-of-week patterns",
      "Traffic forecasting",
      "Staffing recommendations"
    ],
    useCase: "Optimize scheduling and resource allocation"
  },
  {
    icon: Package,
    name: "Inventory",
    category: "Operations",
    description: "Track stock levels and manage inventory efficiently",
    features: [
      "Current stock levels",
      "Low stock alerts",
      "Usage trends",
      "Reorder recommendations",
      "Inventory value tracking"
    ],
    useCase: "Prevent stockouts and minimize waste"
  },
  {
    icon: Users,
    name: "Staffing",
    category: "HR",
    description: "Monitor staff performance and hours worked",
    features: [
      "Staff hours overview",
      "Performance scores",
      "Top performer identification",
      "Scheduling insights",
      "Productivity metrics"
    ],
    useCase: "Recognize top performers and optimize team scheduling"
  }
];

const stats = [
  {
    value: "7",
    label: "Dashboard Pages",
    description: "Comprehensive coverage of all operations"
  },
  {
    value: "12",
    label: "Menu Items",
    description: "Tracked across categories"
  },
  {
    value: "30",
    label: "Days of Data",
    description: "Historical analysis period"
  },
  {
    value: "100+",
    label: "Data Points",
    description: "Per day tracked"
  }
];

const visualizationTypes = [
  {
    icon: BarChart3,
    name: "Bar Charts",
    description: "Compare values across categories with clarity and precision",
    examples: ["Sales by dish", "Expenses by category", "Staff hours comparison"]
  },
  {
    icon: TrendingUp,
    name: "Line Charts",
    description: "Track trends and patterns over time",
    examples: ["Daily revenue trends", "Net profit progression", "Traffic patterns"]
  },
  {
    icon: BarChart3,
    name: "Pie Charts",
    description: "Visualize proportions and distributions",
    examples: ["Sales by category", "Expense breakdown", "Menu distribution"]
  },
  {
    icon: Clock,
    name: "Heatmaps",
    description: "Identify patterns and peak times",
    examples: ["Peak hours analysis", "Day-of-week patterns", "Traffic intensity"]
  },
  {
    icon: TrendingUp,
    name: "Scatter Plots",
    description: "Analyze relationships between variables",
    examples: ["Popularity vs profitability", "Price vs demand", "Performance correlation"]
  },
  {
    icon: Package,
    name: "Sunburst Charts",
    description: "Explore hierarchical data structures",
    examples: ["Category breakdown", "Menu hierarchy", "Expense tree"]
  }
];

const menuCategories = [
  { name: "Main Courses", count: 5 },
  { name: "Appetizers", count: 3 },
  { name: "Desserts", count: 2 },
  { name: "Beverages", count: 2 }
];

const expenseCategories = [
  { name: "Ingredients", percentage: 35 },
  { name: "Labor", percentage: 40 },
  { name: "Rent", percentage: 15 },
  { name: "Utilities", percentage: 7 },
  { name: "Marketing", percentage: 3 }
];
