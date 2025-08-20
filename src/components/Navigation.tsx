import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

const Navigation = () => {
  const location = useLocation();
  const { isSignedIn, isLoaded } = useUser();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-glow transition-colors">
          TracWise
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-foreground hover:text-primary transition-colors ${
              location.pathname === '/' ? 'text-primary font-medium' : ''
            }`}
          >
            Home
          </Link>
          <a 
            href="#how-it-works" 
            className="text-foreground hover:text-primary transition-colors"
          >
            How It Works
          </a>
          
          {isLoaded && (
            <>
              {isSignedIn ? (
                <div className="flex items-center space-x-4">
                  <Link to="/chat">
                    <Button variant="outline" size="sm">
                      Chat
                    </Button>
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/sign-in">
                    <Button variant="outline" size="sm">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/sign-up">
                    <Button variant="default" size="sm">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;