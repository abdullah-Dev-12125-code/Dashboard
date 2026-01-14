import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, TrendingUp, Users, Utensils } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Minimalist with Golden Accents
 * - Georgia serif for headings (bold, classic)
 * - Strategic use of gold accents (#FFD700 equivalent)
 * - Asymmetric layouts with generous whitespace
 * - Soft shadows and refined typography
 */

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-accent font-serif font-bold text-lg">Restaurant Dashboard</span>
                  <div className="h-1 w-16 bg-accent rounded-full mt-2"></div>
                </div>
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                  Visualize Your
                  <span className="text-accent block">Restaurant Success</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                  A comprehensive dashboard built with Python and Dash, featuring real-time analytics, sales tracking, and financial insights for your restaurant business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
                >
                  View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-foreground/20 hover:bg-secondary"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="space-y-1">
                  <p className="text-3xl font-serif font-bold text-accent">7</p>
                  <p className="text-sm text-foreground/60">Dashboard Pages</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-serif font-bold text-accent">12</p>
                  <p className="text-sm text-foreground/60">Menu Items</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-serif font-bold text-accent">30</p>
                  <p className="text-sm text-foreground/60">Days Data</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative h-96 lg:h-full transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-6 w-full px-8">
                  {/* Mock Chart Bars */}
                  <div className="space-y-3">
                    <div className="flex items-end gap-2 h-32">
                      <div className="flex-1 bg-accent/80 rounded-t-lg h-3/4 shadow-lg"></div>
                      <div className="flex-1 bg-accent/60 rounded-t-lg h-1/2 shadow-lg"></div>
                      <div className="flex-1 bg-accent/40 rounded-t-lg h-2/3 shadow-lg"></div>
                      <div className="flex-1 bg-accent/80 rounded-t-lg h-4/5 shadow-lg"></div>
                    </div>
                  </div>
                  <div className="text-center text-foreground/50 text-sm">
                    Sales Performance Overview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Dashboard Features
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Comprehensive analytics and visualizations to understand your restaurant's performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pages Overview Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Seven Powerful Pages
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pages.map((page, index) => (
              <div 
                key={index}
                className={`p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 group ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <page.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {page.name}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
              Built with Modern Technology
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-secondary/5 rounded-2xl">
                <div className="text-4xl font-serif font-bold text-accent mb-3">Python</div>
                <p className="text-foreground/60">Powerful backend processing and data analysis</p>
              </div>
              <div className="text-center p-8 bg-secondary/5 rounded-2xl">
                <div className="text-4xl font-serif font-bold text-accent mb-3">Dash</div>
                <p className="text-foreground/60">Interactive web application framework</p>
              </div>
              <div className="text-center p-8 bg-secondary/5 rounded-2xl">
                <div className="text-4xl font-serif font-bold text-accent mb-3">Plotly</div>
                <p className="text-foreground/60">Beautiful and responsive data visualizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-foreground to-foreground/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-background mb-6">
            Ready to Transform Your Restaurant Analytics?
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Explore the full dashboard with comprehensive visualizations and real-time data insights.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
          >
            Launch Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    title: "Sales Analysis",
    description: "Track daily revenue trends and sales volume with detailed visualizations"
  },
  {
    icon: <Utensils className="h-6 w-6 text-accent" />,
    title: "Menu Performance",
    description: "Identify your best-selling dishes and profitability metrics"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    title: "Financial Insights",
    description: "Monitor expenses, profit margins, and financial health"
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: "Staff Management",
    description: "Track staffing hours and performance metrics"
  }
];

const pages = [
  {
    icon: BarChart3,
    name: "Overview",
    description: "Get a quick snapshot of your restaurant's key metrics including total revenue, orders, and best-selling dishes"
  },
  {
    icon: TrendingUp,
    name: "Sales Analysis",
    description: "Deep dive into sales volume and revenue trends with comprehensive charts and comparisons"
  },
  {
    icon: Utensils,
    name: "Menu Performance",
    description: "Analyze dish popularity versus profitability with scatter plots and category breakdowns"
  },
  {
    icon: BarChart3,
    name: "Financials",
    description: "Track revenue versus expenses, view expense breakdowns, and monitor net profit trends"
  },
  {
    icon: TrendingUp,
    name: "Hourly Trends",
    description: "Identify peak hours and customer traffic patterns throughout the day"
  },
  {
    icon: Users,
    name: "Inventory",
    description: "Monitor stock levels and receive alerts for items running low"
  },
  {
    icon: Users,
    name: "Staffing",
    description: "Track staff hours, performance scores, and identify top performers"
  }
];
