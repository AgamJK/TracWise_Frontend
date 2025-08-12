import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See TracWise in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how TracWise transforms complex manual searches into instant, actionable answers
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              {/* Demo Video */}
              <video 
                className="w-full aspect-video object-cover"
                controls
                autoPlay
                muted
                loop
                poster="/placeholder.svg" // Optional: thumbnail image
              >
                <source src="/Screen Recording 2025-08-12 140526.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
          
          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Instant Response</h4>
              <p className="text-sm text-muted-foreground">Get answers in seconds, not minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Accurate Information</h4>
              <p className="text-sm text-muted-foreground">Sourced directly from official manuals</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Natural Language</h4>
              <p className="text-sm text-muted-foreground">Ask questions the way you normally would</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;