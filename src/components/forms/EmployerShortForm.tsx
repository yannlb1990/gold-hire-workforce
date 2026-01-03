import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getUTMParams } from "@/lib/utm";
import { LOCATIONS, TRADES, DURATION_OPTIONS } from "@/lib/constants";
import { ArrowRight, Loader2, Upload, X, FileText } from "lucide-react";
import { toast as sonnerToast } from "sonner";

interface EmployerShortFormProps {
  className?: string;
  defaultLocation?: string;
  defaultTrade?: string;
  variant?: "light" | "dark";
}

export function EmployerShortForm({
  className = "",
  defaultLocation = "",
  defaultTrade = "",
  variant = "dark",
}: EmployerShortFormProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startAsap, setStartAsap] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    location: defaultLocation,
    trade: defaultTrade,
    qty: "1",
    startDate: "",
    duration: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      sonnerToast.error("File size must be less than 10MB");
      return;
    }

    setIsUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("client-documents")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("client-documents")
        .getPublicUrl(filePath);

      setUploadedFile({ name: file.name, url: publicUrl });
      sonnerToast.success("Document uploaded");
    } catch (error) {
      console.error("Upload error:", error);
      sonnerToast.error("Failed to upload. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();

      const { error } = await supabase.from("leads_employers").insert({
        location: formData.location,
        trade: formData.trade,
        qty: parseInt(formData.qty) || 1,
        start_date: startAsap ? null : formData.startDate || null,
        start_asap: startAsap,
        duration: formData.duration,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        documents_url: uploadedFile?.url || null,
        ...utmParams,
      });

      if (error) throw error;

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submit_employer",
          event_category: "conversion",
          event_label: formData.trade,
          location: formData.location,
        });
      }

      navigate("/thank-you/request-labour");
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
      ? "bg-navy-light border-steel-blue/30 text-concrete placeholder:text-concrete/50 focus:border-gold focus:ring-gold rounded-xl h-12 text-base"
      : "bg-background border-border text-foreground rounded-xl h-12 text-base";

  const labelClasses = variant === "dark" ? "text-concrete/90 text-sm" : "text-foreground text-sm";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="location" className={labelClasses}>
            Location *
          </Label>
          <Select
            value={formData.location}
            onValueChange={(value) => handleChange("location", value)}
            required
          >
            <SelectTrigger className={`${inputClasses} min-h-[48px]`}>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATIONS.slice(0, 3).map((loc) => (
                <SelectItem key={loc.id} value={loc.id}>
                  {loc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="trade" className={labelClasses}>
            Trade Needed *
          </Label>
          <Select
            value={formData.trade}
            onValueChange={(value) => handleChange("trade", value)}
            required
          >
            <SelectTrigger className={`${inputClasses} min-h-[48px]`}>
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="qty" className={labelClasses}>
            Workers Needed
          </Label>
          <Input
            id="qty"
            type="number"
            min="1"
            max="50"
            value={formData.qty}
            onChange={(e) => handleChange("qty", e.target.value)}
            className={inputClasses}
            placeholder="1"
          />
        </div>

        <div>
          <Label htmlFor="startDate" className={labelClasses}>
            Start Date
          </Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
            className={inputClasses}
            disabled={startAsap}
          />
        </div>

        <div>
          <Label htmlFor="duration" className={labelClasses}>
            Duration
          </Label>
          <Select
            value={formData.duration}
            onValueChange={(value) => handleChange("duration", value)}
          >
            <SelectTrigger className={`${inputClasses} min-h-[48px]`}>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {DURATION_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="startAsap"
          checked={startAsap}
          onCheckedChange={(checked) => setStartAsap(checked as boolean)}
          className="border-steel-blue/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
        />
        <label
          htmlFor="startAsap"
          className={`text-sm font-medium ${labelClasses} cursor-pointer`}
        >
          Start ASAP
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name" className={labelClasses}>
            Your Name *
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
            placeholder="you@company.com"
            required
          />
        </div>
      </div>

      {/* Document Upload */}
      <div>
        <Label className={labelClasses}>Project Documents (Optional)</Label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
          id="employer-doc-upload"
        />
        
        {uploadedFile ? (
          <div className={`flex items-center gap-3 p-3 rounded-xl border mt-2 ${
            variant === "dark" ? "border-steel-blue/30 bg-navy-light/50" : "border-border bg-secondary/50"
          }`}>
            <FileText className="w-5 h-5 text-gold" />
            <span className={`text-sm flex-1 truncate ${variant === "dark" ? "text-concrete" : "text-foreground"}`}>
              {uploadedFile.name}
            </span>
            <button type="button" onClick={handleRemoveFile} className="text-concrete/60 hover:text-concrete">
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="employer-doc-upload"
            className={`flex items-center gap-3 p-3 rounded-xl border-2 border-dashed cursor-pointer transition-all mt-2 ${
              variant === "dark" 
                ? "border-steel-blue/30 hover:border-gold/50 bg-navy-light/30" 
                : "border-border hover:border-gold/50 bg-secondary/30"
            }`}
          >
            {isUploading ? (
              <Loader2 className="w-5 h-5 text-gold animate-spin" />
            ) : (
              <Upload className="w-5 h-5 text-gold" />
            )}
            <span className={`text-sm ${variant === "dark" ? "text-concrete/70" : "text-muted-foreground"}`}>
              {isUploading ? "Uploading..." : "Upload site plans, specs (PDF, DOC, JPG)"}
            </span>
          </label>
        )}
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full sm:w-auto min-h-[48px] text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Request Labour
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className={`text-xs ${variant === "dark" ? "text-concrete/60" : "text-muted-foreground"}`}>
        We typically respond within business hours. For urgent requests, call us directly.
      </p>
    </form>
  );
}
