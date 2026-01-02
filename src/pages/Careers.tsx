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
import { ArrowRight, DollarSign, Shield, Clock, Users, CheckCircle2, Loader2 } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Fair rates paid weekly. No waiting around for your money.",
  },
  {
    icon: Clock,
    title: "Regular Shifts",
    description: "Consistent work with quality clients across SEQ.",
  },
  {
    icon: Shield,
    title: "Safe Environments",
    description: "WHS compliant sites with proper safety protocols.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Work with a company that values communication.",
  },
];

const roles = [
  "General Labourers",
  "Skilled Labourers",
  "Demolition Workers",
  "Carpenters",
  "Building Cleaners",
];

const Careers = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeUrl, setResumeUrl] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();
      
      const { error } = await supabase.from("leads_workers").insert({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        trade: formData.role || null,
        notes: formData.experience,
        resume_url: resumeUrl || null,
        ...utmParams,
      });

      if (error) throw error;
      navigate("/thank-you/worker");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Join Our Workforce | Labour Hire Jobs Gold Coast Brisbane | Precision Site Solutions</title>
        <meta
          name="description"
          content="Looking for consistent work? Join Precision Site Solutions workforce. Labour hire jobs across Gold Coast, Brisbane, Logan, Tweed Heads and Byron Bay."
        />
        <meta name="keywords" content="labour hire jobs, construction jobs gold coast, labourer jobs brisbane, carpenter jobs seq, building jobs" />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/careers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Join Our Workforce | Labour Hire Jobs Gold Coast Brisbane | Precision Site Solutions" />
        <meta property="og:description" content="Looking for consistent work? Join Precision Site Solutions workforce. Labour hire jobs across Gold Coast, Brisbane, Logan, Tweed Heads and Byron Bay." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://precisionsitesolutions.com.au/careers" />
        <meta property="og:image" content="https://precisionsitesolutions.com.au/og-image.jpg" />
        <meta property="og:site_name" content="Precision Site Solutions" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our Workforce | Labour Hire Jobs" />
        <meta name="twitter:description" content="Looking for consistent work? Join Precision Site Solutions workforce in Gold Coast, Brisbane, Logan." />
        <meta name="twitter:image" content="https://precisionsitesolutions.com.au/og-image.jpg" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-blob bg-gold/5 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-gold/10 blur-2xl" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                Join Our Team
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Looking for{" "}
                <span className="text-gradient-gold">Consistent Work?</span>
              </h1>
              <p className="body-lg text-concrete/70 mb-8">
                Precision Site Solutions connects skilled workers with quality clients across 
                Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay. Join our team 
                and experience a communication-led, professional work environment.
              </p>
            </div>
          </div>
        </section>

        {/* Curved divider */}
        <div className="bg-oil h-16 relative">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-background" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
        </div>

        {/* Benefits */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-navy mb-6">
                Why Work With Us
              </h2>
              <p className="body-lg text-charcoal/70">
                We're not just another labour hire company. We're management-led and systems-driven, 
                which means better communication, better conditions and better outcomes for our workers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="card-feature text-center">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-navy flex items-center justify-center mx-auto mb-4 shadow-elevated">
                    <benefit.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form & Roles */}
        <section className="py-24 section-dark relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Roles List */}
              <div>
                <h2 className="heading-lg text-concrete mb-6">
                  Roles We're Hiring
                </h2>
                <p className="body-lg text-concrete/70 mb-8">
                  We're always looking for reliable, skilled workers to join our team. 
                  Whether you're experienced or just starting out, we have opportunities across multiple trades and industries.
                </p>
                <div className="space-y-3 mb-8">
                  {roles.map((role) => (
                    <div key={role} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-concrete">{role}</span>
                    </div>
                  ))}
                </div>

                <div className="card-dark p-8 rounded-[2rem]">
                  <h3 className="text-xl font-heading font-bold text-concrete mb-6">
                    What We Expect
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Reliable and punctual",
                      "Strong work ethic",
                      "Good communication skills",
                      "Commitment to safety",
                      "Professional attitude",
                      "Valid ID and work rights",
                      "Relevant tickets/licenses (trade roles)",
                      "Own transport preferred",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-concrete/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Form */}
              <div className="card-elevated rounded-[2rem]">
                <h3 className="text-2xl font-heading font-bold text-navy mb-6">
                  Apply Now
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required 
                        placeholder="John" 
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required 
                        placeholder="Smith" 
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required 
                      placeholder="john@example.com" 
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required 
                      placeholder="04XX XXX XXX" 
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role Interest</Label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleChange("role", e.target.value)}
                      className="flex h-10 w-full rounded-xl border-2 border-roman-coffee/40 bg-input px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a role</option>
                      <option value="General Labourer">General Labourer</option>
                      <option value="Skilled Labourer">Skilled Labourer</option>
                      <option value="Demolition">Demolition</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Building Cleaner">Building Cleaner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience & Skills</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleChange("experience", e.target.value)}
                      rows={4}
                      className="rounded-xl"
                      placeholder="Tell us about your experience, skills and availability..."
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label>Resume / CV (Optional but recommended)</Label>
                    <FileUpload
                      bucket="resumes"
                      onUploadComplete={setResumeUrl}
                      label="Upload Your Resume"
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
                        Submit Application
                        <ArrowRight className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;
