import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import EmailGenerator from "@/components/EmailGenerator";
import EmailInbox from "@/components/EmailInbox";
import heroImage from "@/assets/hero-email.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("generate");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Temp<span className="text-transparent bg-gradient-primary bg-clip-text">Mail</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate temporary email addresses instantly. Protect your privacy, 
              avoid spam, and keep your real inbox clean.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-foreground">No Registration</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-foreground">100% Anonymous</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-foreground">Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main App Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-card/50 backdrop-blur-sm border border-border/30">
                <TabsTrigger value="generate" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Generate Email
                </TabsTrigger>
                <TabsTrigger value="inbox" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Inbox
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="generate" className="animate-fade-in">
              <EmailGenerator />
            </TabsContent>
            
            <TabsContent value="inbox" className="animate-fade-in">
              <EmailInbox />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose TempMail?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most secure and reliable temporary email service for protecting your privacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your emails are encrypted and automatically deleted. No logs, no tracking.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate emails instantly and receive messages in real-time.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Multiple Domains</h3>
              <p className="text-muted-foreground">
                Choose from various domains to suit your needs and avoid detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 TempMail. Built for privacy and security.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
