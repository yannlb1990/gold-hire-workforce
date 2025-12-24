import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getUTMParams } from "@/lib/utm";
import { LOCATIONS, TRADES, TICKETS, AVAILABILITY_OPTIONS } from "@/lib/constants";
import { ArrowRight, Loader2, Upload, X, FileText } from "lucide-react";

interface WorkerRegistrationFormProps {
  className?: string;
  variant?: "light" | "dark";
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function WorkerRegistrationForm({
  className = "",
  variant = "light",
}: WorkerRegistrationFormProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    trade: "",
    availability: "",
    experience: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleLocation = (locationId: string) => {
    setSelectedLocations((prev) =>
      prev.includes(locationId)
        ? prev.filter((l) => l !== locationId)
        : [...prev, locationId]
    );
  };

  const toggleTicket = (ticketId: string) => {
    setSelectedTickets((prev) =>
      prev.includes(ticketId)
        ? prev.filter((t) => t !== ticketId)
        : [...prev, ticketId]
    );
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (!file) return;

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setFileError("Please upload a PDF or Word document");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError("File must be less than 5MB");
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadResume = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `resumes/${fileName}`;

    const { error } = await supabase.storage
      .from("resumes")
      .upload(filePath, file);

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    return filePath;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let resumeUrl: string | null = null;

      // Upload resume if selected
      if (selectedFile) {
        resumeUrl = await uploadResume(selectedFile);
        if (!resumeUrl) {
          toast({
            variant: "destructive",
            title: "Upload failed",
            description: "Failed to upload resume. Please try again.",
          });
          setIsSubmitting(false);
          return;
        }
      }

      const utmParams = getUTMParams();

      const { error } = await supabase.from("leads_workers").insert({
        locations: selectedLocations,
        trade: formData.trade,
        tickets: selectedTickets,
        availability: formData.availability,
        experience: formData.experience,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        notes: formData.notes,
        resume_url: resumeUrl,
        ...utmParams,
      });

      if (error) throw error;

      // Fire analytics event
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submit_worker",
          event_category: "conversion",
          event_label: formData.trade,
        });
      }

      navigate("/thank-you/find-work");
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    variant === "dark"
      ? "bg-navy-light border-steel-blue/30 text-concrete placeholder:text-concrete/50 focus:border-gold focus:ring-gold"
      : "bg-background border-border text-foreground";

  const labelClasses = variant === "dark" ? "text-concrete/90" : "text-foreground";

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Preferred Locations */}
      <div>
        <Label className={labelClasses}>Preferred Work Locations *</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="flex items-center space-x-2">
              <Checkbox
                id={`loc-${loc.id}`}
                checked={selectedLocations.includes(loc.id)}
                onCheckedChange={() => toggleLocation(loc.id)}
                className="border-steel-blue/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
              />
              <label
                htmlFor={`loc-${loc.id}`}
                className={`text-sm ${labelClasses} cursor-pointer`}
              >
                {loc.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Trade and Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="trade" className={labelClasses}>
            Primary Trade / Skill *
          </Label>
          <Select
            value={formData.trade}
            onValueChange={(value) => handleChange("trade", value)}
            required
          >
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select trade" />
            </SelectTrigger>
            <SelectContent>
              {TRADES.map((trade) => (
                <SelectItem key={trade.id} value={trade.id}>
                  {trade.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="availability" className={labelClasses}>
            Availability *
          </Label>
          <Select
            value={formData.availability}
            onValueChange={(value) => handleChange("availability", value)}
            required
          >
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              {AVAILABILITY_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tickets */}
      <div>
        <Label className={labelClasses}>Current Tickets & Licences</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {TICKETS.map((ticket) => (
            <div key={ticket.id} className="flex items-center space-x-2">
              <Checkbox
                id={`ticket-${ticket.id}`}
                checked={selectedTickets.includes(ticket.id)}
                onCheckedChange={() => toggleTicket(ticket.id)}
                className="border-steel-blue/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
              />
              <label
                htmlFor={`ticket-${ticket.id}`}
                className={`text-sm ${labelClasses} cursor-pointer`}
              >
                {ticket.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Upload */}
      <div>
        <Label className={labelClasses}>Resume / CV (Optional)</Label>
        <p className={`text-xs ${variant === "dark" ? "text-concrete/60" : "text-muted-foreground"} mb-2`}>
          Upload your resume to help us match you with the right opportunities. PDF or Word, max 5MB.
        </p>
        
        {!selectedFile ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`
              border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200
              ${variant === "dark" 
                ? "border-steel-blue/30 hover:border-gold/50 bg-navy-light/30" 
                : "border-border hover:border-gold/50 bg-muted/30"
              }
            `}
          >
            <Upload className={`w-8 h-8 mx-auto mb-2 ${variant === "dark" ? "text-concrete/50" : "text-muted-foreground"}`} />
            <p className={`text-sm font-medium ${variant === "dark" ? "text-concrete/80" : "text-foreground"}`}>
              Click to upload or drag and drop
            </p>
            <p className={`text-xs mt-1 ${variant === "dark" ? "text-concrete/50" : "text-muted-foreground"}`}>
              PDF, DOC, DOCX up to 5MB
            </p>
          </div>
        ) : (
          <div className={`
            flex items-center justify-between p-4 rounded-xl border
            ${variant === "dark" 
              ? "border-gold/30 bg-navy-light/50" 
              : "border-gold/30 bg-gold/5"
            }
          `}>
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-gold" />
              <div>
                <p className={`text-sm font-medium ${variant === "dark" ? "text-concrete" : "text-foreground"}`}>
                  {selectedFile.name}
                </p>
                <p className={`text-xs ${variant === "dark" ? "text-concrete/60" : "text-muted-foreground"}`}>
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
        
        {fileError && (
          <p className="text-sm text-destructive mt-2">{fileError}</p>
        )}
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Experience */}
      <div>
        <Label htmlFor="experience" className={labelClasses}>
          Experience Summary
        </Label>
        <Textarea
          id="experience"
          value={formData.experience}
          onChange={(e) => handleChange("experience", e.target.value)}
          className={inputClasses}
          placeholder="Brief summary of your relevant experience..."
          rows={3}
        />
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name" className={labelClasses}>
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputClasses}
            placeholder="John Smith"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className={labelClasses}>
            Mobile *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={inputClasses}
            placeholder="04XX XXX XXX"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className={labelClasses}>
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputClasses}
            placeholder="you@email.com"
            required
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <Label htmlFor="notes" className={labelClasses}>
          Additional Notes
        </Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          className={inputClasses}
          placeholder="Anything else we should know?"
          rows={2}
        />
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Register Interest
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className={`text-xs ${variant === "dark" ? "text-concrete/60" : "text-muted-foreground"}`}>
        We'll be in touch within 24-48 hours to discuss opportunities.
      </p>
    </form>
  );
}
