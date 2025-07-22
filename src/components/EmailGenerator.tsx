import { useState } from "react";
import { Copy, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generateTempEmail, copyToClipboard } from "@/utils/emailUtils";

const EmailGenerator = () => {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateEmail = () => {
    const newEmail = generateTempEmail();
    setEmail(newEmail);
    setCopied(false);
    toast({
      title: "New email generated!",
      description: "Your temporary email is ready to use.",
    });
  };

  const copyEmail = async () => {
    if (email) {
      const success = await copyToClipboard(email);
      if (success) {
        setCopied(true);
        toast({
          title: "Email copied!",
          description: "The email address has been copied to your clipboard.",
        });
        setTimeout(() => setCopied(false), 2000);
      } else {
        toast({
          title: "Copy failed",
          description: "Please manually copy the email address.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="p-6 bg-gradient-card border-border/30 backdrop-blur-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Generate Temporary Email
          </h2>
          <p className="text-muted-foreground">
            Get a disposable email address instantly. No registration required.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={email}
              readOnly
              placeholder="Click generate to create a temporary email"
              className="bg-input/50 border-border/50 text-foreground"
            />
            <Button
              onClick={copyEmail}
              variant="outline"
              size="icon"
              disabled={!email}
              className="shrink-0"
            >
              {copied ? (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={generateEmail}
              variant="hero"
              className="flex-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Generate New Email
            </Button>
          </div>

          {email && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/30">
              <p className="text-sm text-muted-foreground mb-2">Your temporary email:</p>
              <p className="font-mono text-foreground break-all">{email}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EmailGenerator;