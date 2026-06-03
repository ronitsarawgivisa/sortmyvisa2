import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function LeadForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted Successfully",
        description: "One of our visa experts will contact you shortly.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-[#B8CEFD]/50 backdrop-blur-sm border border-[#233B87]/20 p-6 sm:p-8 rounded-2xl shadow-2xl">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-[#111827] mb-2">Check Your Eligibility</h3>
        <p className="text-[#374151] text-sm">Fill out the form below to get started with your visa process.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input 
            required 
            placeholder="Full Name" 
            className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground h-12"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Input 
            required 
            type="tel" 
            placeholder="Mobile Number" 
            className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground h-12"
          />
          <Input 
            required 
            type="email" 
            placeholder="Email Address" 
            className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground h-12"
          />
        </div>

        <div>
          <Select required>
            <SelectTrigger className="bg-white border-white/20 text-foreground h-12">
              <SelectValue placeholder="Destination Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="schengen">Schengen Area (Europe)</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="uae">UAE (Dubai)</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input 
            required 
            type="date" 
            placeholder="Travel Date" 
            className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground h-12"
          />
          <Input 
            required 
            placeholder="Current City" 
            className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground h-12"
          />
        </div>

        <div>
          <Textarea 
            placeholder="Any specific requirements or message? (Optional)" 
            className="bg-white border-white/20 text-foreground placeholder:text-muted-foreground min-h-[100px]"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg mt-2 shadow-lg"
        >
          {isSubmitting ? "Submitting..." : "Start My Visa Process"}
        </Button>
      </form>
    </div>
  );
}
