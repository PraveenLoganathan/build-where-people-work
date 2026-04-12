import { useState } from "react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    organisation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your enquiry. We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", type: "", organisation: "", message: "" });
  };

  return (
    <>
      <PageHero
        headline="Let's Start a Conversation."
        body="Whether you're an employer with a workforce housing challenge, an investor exploring the sector, or a professional looking for a home near your workplace — we'd like to hear from you."
      />

      {/* CONTACT INFO + FORM */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <AnimatedSection>
                <h2 className="heading-section text-foreground mb-8">Get in Touch.</h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <p className="text-sm font-body text-muted-foreground">
                      New No. 46, Old No. 72/73, Kerala Club Road, ATT Colony,<br />
                      Gopalapuram, Coimbatore – 641018, Tamil Nadu, India
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div className="text-sm font-body text-muted-foreground space-y-1">
                      <a href="tel:+919003013354" className="block hover:text-accent transition-colors">+91 90030 13354</a>
                      <a href="tel:+919443353299" className="block hover:text-accent transition-colors">+91 94433 53299</a>
                      <a href="tel:+919600848999" className="block hover:text-accent transition-colors">+91 96008 48999</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <a href="mailto:logu@nuvaaproperties.com" className="text-sm font-body text-muted-foreground hover:text-accent transition-colors">
                      logu@nuvaaproperties.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* THREE CARDS */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  {[
                    { title: "For Employers", body: "Are you a large institution with a workforce housing gap? We'd like to discuss a partnership.", cta: "Contact for Partnership" },
                    { title: "For Investors", body: "We're raising equity partners for Phase 1 of the CMC Ranipet project.", cta: "Request Investor Brief" },
                    { title: "For Homebuyers", body: "Are you a CMC Ranipet employee interested in registering your interest?", cta: "Register Your Interest" },
                  ].map((card, i) => (
                    <div key={i} className="bg-card p-6 rounded-lg border border-border">
                      <h3 className="font-heading text-lg text-foreground mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground font-body mb-3">{card.body}</p>
                      <span className="text-sm text-accent font-body font-medium inline-flex items-center gap-1">
                        {card.cta} <ArrowRight size={14} />
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* FORM */}
            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border">
                <h3 className="heading-card text-foreground mb-6">Send an Enquiry</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Full Name *</label>
                    <input
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Email Address *</label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Phone Number *</label>
                    <input
                      required
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">I am enquiring as *</label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="">Select...</option>
                      <option value="employer">Employer</option>
                      <option value="investor">Investor</option>
                      <option value="homebuyer">Homebuyer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Organisation / Company</label>
                    <input
                      maxLength={200}
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="If applicable"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Message *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
