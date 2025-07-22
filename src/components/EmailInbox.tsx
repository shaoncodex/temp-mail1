import { useState } from "react";
import { Mail, Trash2, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatTimestamp, truncateText, sanitizeEmailContent } from "@/utils/emailUtils";

interface Email {
  id: string;
  from: string;
  subject: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

const EmailInbox = () => {
  const [emails, setEmails] = useState<Email[]>([
    {
      id: "1",
      from: "support@example.com",
      subject: "Welcome to our service!",
      content: "Thank you for signing up. This is a sample email to demonstrate the inbox functionality.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      isRead: false,
    },
    {
      id: "2", 
      from: "noreply@newsletter.com",
      subject: "Weekly Newsletter - Tech Updates",
      content: "Here are this week's top tech stories and updates from the industry.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      isRead: true,
    },
  ]);

  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const markAsRead = (emailId: string) => {
    setEmails(prev => 
      prev.map(email => 
        email.id === emailId ? { ...email, isRead: true } : email
      )
    );
  };

  const deleteEmail = (emailId: string) => {
    setEmails(prev => prev.filter(email => email.id !== emailId));
    if (selectedEmail?.id === emailId) {
      setSelectedEmail(null);
    }
  };

  const selectEmail = (email: Email) => {
    setSelectedEmail(email);
    markAsRead(email.id);
  };

  // Use utility function for time formatting

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email List */}
        <div className="lg:col-span-1">
          <Card className="p-4 bg-gradient-card border-border/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Inbox</h3>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {emails.filter(e => !e.isRead).length} new
              </Badge>
            </div>
            
            <div className="space-y-2">
              {emails.length === 0 ? (
                <div className="text-center py-8">
                  <Mail className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No emails yet</p>
                  <p className="text-sm text-muted-foreground">
                    Share your temporary email to receive messages
                  </p>
                </div>
              ) : (
                emails.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => selectEmail(email)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:bg-muted/50 ${
                      email.isRead 
                        ? 'border-border/30 bg-muted/20' 
                        : 'border-primary/30 bg-primary/5'
                    } ${
                      selectedEmail?.id === email.id 
                        ? 'ring-2 ring-primary/50' 
                        : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium text-sm text-foreground truncate">
                        {email.from}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatTimestamp(email.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground truncate mb-1">
                      {email.subject}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {truncateText(email.content, 60)}
                    </p>
                    {!email.isRead && (
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    )}
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>

        {/* Email Content */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-gradient-card border-border/30 backdrop-blur-sm min-h-[400px]">
            {selectedEmail ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      {selectedEmail.subject}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>From: {selectedEmail.from}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedEmail.timestamp.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => deleteEmail(selectedEmail.id)}
                    variant="outline"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="border-t border-border/30 pt-4">
                  <div className="prose prose-sm max-w-none text-foreground">
                    {sanitizeEmailContent(selectedEmail.content)}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <Eye className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Select an email to read
                  </h3>
                  <p className="text-muted-foreground">
                    Choose an email from the inbox to view its contents
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailInbox;