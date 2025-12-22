import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState<"labour" | "worker">("labour");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Thank you for your enquiry! Our team will be in touch within 24 hours.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Request Labour | The Gold Hire Company</title>
        <meta
          name="description"
          content="Contact The Gold Hire Company for labour hire enquiries. Request workers for Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
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

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                {/* Form Type Toggle */}
                <div className="flex gap-2 mb-8">
                  <button
                    onClick={() => setFormType("labour")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      formType === "labour"
                        ? "bg-gold text-navy"
                        : "bg-secondary text-charcoal hover:bg-secondary/80"
                    }`}
                  >
                    Request Labour
                  </button>
                  <button
                    onClick={() => setFormType("worker")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      formType === "worker"
                        ? "bg-gold text-navy"
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
                      <Input id="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required placeholder="Smith" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" required placeholder="04XX XXX XXX" />
                  </div>

                  {formType === "labour" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your company name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required</Label>
                        <select
                          id="service"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select a service</option>
                          <option value="labour">Skilled Labour Hire</option>
                          <option value="carpenters">Carpenters</option>
                          <option value="painters">Painters</option>
                          <option value="cleaning">Commercial Cleaning</option>
                          <option value="landscaping">Landscaping & Grounds</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </>
                  )}

                  {formType === "worker" && (
                    <div className="space-y-2">
                      <Label htmlFor="role">Role Interest</Label>
                      <select
                        id="role"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a role</option>
                        <option value="labourer">General Labourer</option>
                        <option value="carpenter">Carpenter</option>
                        <option value="painter">Painter</option>
                        <option value="cleaner">Commercial Cleaner</option>
                        <option value="landscaping">Landscaping/Grounds</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {formType === "labour" ? "Project Details" : "Tell Us About Yourself"}
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder={
                        formType === "labour"
                          ? "Tell us about your project, timeline and workforce requirements..."
                          : "Tell us about your experience, skills and availability..."
                      }
                    />
                  </div>

                  <Button type="submit" variant="gold" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="card-dark p-8 mb-8">
                  <h3 className="text-2xl font-heading font-bold text-concrete mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-6">
                    <a
                      href="tel:0400000000"
                      className="flex items-start gap-4 text-concrete/80 hover:text-gold transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
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
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-concrete">Email</div>
                        <div className="text-lg break-all">enquiries@thegoldhirecompany.com.au</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4 text-concrete/80">
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-concrete">Response Time</div>
                        <div className="text-lg">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-dark p-8">
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
