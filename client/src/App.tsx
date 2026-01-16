import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Gallery from "./pages/Gallery";
import { Button } from "@/components/ui/button";


function Navigation() {
  const [location] = useLocation();

  // Don't show navigation on home page
  if (location === "/") return null;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          className="text-foreground hover:text-accent"
          onClick={() => window.location.href = "/"}
        >
          ← Back to Home
        </Button>
        <div className="flex gap-2">
          {location !== "/features" && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = "/features"}
            >
              Features
            </Button>
          )}
          {location !== "/gallery" && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = "/gallery"}
            >
              Gallery
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/features"} component={Features} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
