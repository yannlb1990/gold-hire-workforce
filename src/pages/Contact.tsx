import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/components/forms/FileUpload";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { getUTMParams } from "@/lib/utm";
import { Phone, Mail, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState<"labour" | "worker">("labour");
  const [documentUrl, setDocumentUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const utmParams = getUTMParams();

    try {
      if (formType === "labour") {
        const { error } = await supabase.from("leads_employers").insert({
          name: `${formData.get("firstName")} ${formData.get("lastName")}`,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          location: "Contact Form",
          trade: formData.get("service") as string || "General Enquiry",
          notes: formData.get("message") as string,
          documents_url: documentUrl || null,
          ...utmParams,
        });

        if (error) throw error;
        navigate("/thank-you/request-labour");
      } else {
        const { error } = await supabase.from("leads_workers").insert({
          name: `${formData.get("firstName")} ${formData.get("lastName")}`,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          trade: formData.get("role") as string || null,
          notes: formData.get("message") as string,
          resume_url: documentUrl || null,
          ...utmParams,
        });

        if (error) throw error;
        navigate("/thank-you/worker");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Request Labour | Precision Site Solutions</title>
        <meta
          name="description"
          content="Contact Precision Site Solutions for labour hire enquiries. Request workers for Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-blob bg-gold/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gold/10 blur-2xl" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                Contact Us
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Let's Talk About{" "}
                <span className="text-gradient-gold">Your Workforce Needs</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Whether you need labour for your next project or you're looking for work, 
                our team is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Curved divider */}
        <div className="bg-oil h-16 relative">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-background" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
        </div>

        {/* Contact Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                {/* Form Type Toggle */}
                <div className="flex gap-2 mb-8">
                  <button
                    onClick={() => { setFormType("labour"); setDocumentUrl(""); }}
                    className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                      formType === "labour"
                        ? "bg-gold text-navy shadow-gold"
                        : "bg-secondary text-charcoal hover:bg-secondary/80"
                    }`}
                  >
                    Request Labour
                  </button>
                  <button
                    onClick={() => { setFormType("worker"); setDocumentUrl(""); }}
                    className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                      formType === "worker"
                        ? "bg-gold text-navy shadow-gold"
                        : "bg-secondary text-charcoal hover:bg-secondary/80"
                    }`}
                  >
                    Join Our Workforce
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required placeholder="John" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required placeholder="Smith" className="rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" className="rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="04XX XXX XXX" className="rounded-xl" />
                  </div>

                  {formType === "labour" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" name="company" placeholder="Your company name" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required</Label>
                        <select
                          id="service"
                          name="service"
                          className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select a service</option>
                          <option value="Skilled Labourers">Skilled Labourers</option>
                          <option value="Demolition Crews">Demolition Crews</option>
                          <option value="Carpenters">Carpenters</option>
                          <option value="Building Cleaners">Building Cleaners</option>
                          <option value="Landscaping Workers">Landscaping Workers</option>
                          <option value="Maintenance Ground Workers">Maintenance Ground Workers</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      {/* Document Upload for Employers */}
                      <div className="space-y-2">
                        <Label>Project Documents (Optional)</Label>
                        <p className="text-xs text-muted-foreground mb-2">
                          Upload site plans, induction requirements, or project specifications
                        </p>
                        <FileUpload
                          bucket="client-documents"
                          onUploadComplete={setDocumentUrl}
                          label="Upload Project Documents"
                        />
                      </div>
                    </>
                  )}

                  {formType === "worker" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role Interest</Label>
                        <select
                          id="role"
                          name="role"
                          className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select a role</option>
                          <option value="General Labourer">General Labourer</option>
                          <option value="Skilled Labourer">Skilled Labourer</option>
                          <option value="Demolition">Demolition</option>
                          <option value="Carpenter">Carpenter</option>
                          <option value="Building Cleaner">Building Cleaner</option>
                          <option value="Landscaping">Landscaping</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      {/* Resume Upload for Workers */}
                      <div className="space-y-2">
                        <Label>Resume / CV (Optional)</Label>
                        <FileUpload
                          bucket="resumes"
                          onUploadComplete={setDocumentUrl}
                          label="Upload Your Resume"
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {formType === "labour" ? "Project Details" : "Tell Us About Yourself"}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="rounded-xl"
                      placeholder={
                        formType === "labour"
                          ? "Tell us about your project, timeline and workforce requirements..."
                          : "Tell us about your experience, skills and availability..."
                      }
                    />
                  </div>

                  <Button type="submit" variant="gold" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <ArrowRight className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="card-dark p-8 mb-8 rounded-[2rem]">
                  <h3 className="text-2xl font-heading font-bold text-concrete mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-6">
                    <a
                      href="tel:0400000000"
                      className="flex items-start gap-4 text-concrete/80 hover:text-gold transition-colors"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-concrete">Phone</div>
                        <div className="text-lg">04XX XXX XXX</div>
                      </div>
                    </a>
                    <a
                      href="mailto:enquiries@thegoldhirecompany.com.au"
                      className="flex items-start gap-4 text-concrete/80 hover:text-gold transition-colors"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-concrete">Email</div>
                        <div className="text-lg break-all">enquiries@thegoldhirecompany.com.au</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4 text-concrete/80">
                      <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-concrete">Response Time</div>
                        <div className="text-lg">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-dark p-8 rounded-[2rem]">
                  <h3 className="text-xl font-heading font-bold text-concrete mb-4">
                    Service Areas
                  </h3>
                  <div className="flex items-start gap-4 text-concrete/80">
                    <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div className="grid grid-cols-2 gap-2">
                      {["Gold Coast", "Brisbane", "Logan", "Ipswich", "Tweed Heads", "Byron Bay"].map(
                        (area) => (
                          <span key={area}>{area}</span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
