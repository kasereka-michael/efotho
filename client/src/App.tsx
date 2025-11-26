import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Education from "@/pages/Education";
import IntervenantProfile from "@/pages/IntervenantProfile";
import AlumniProfile from "@/pages/AlumniProfile";
import Intervenant from "@/pages/Intervenant";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apropos" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/intervenant" component={Intervenant} />
      <Route path="/intervenant/:id" component={IntervenantProfile} />
      <Route path="/alumni/:id" component={AlumniProfile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="relative">
          <Navigation />
          <div>
            <Router />
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
