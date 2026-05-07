import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import {
  Users, MapPin, Building2, ArrowRight, ArrowDown,
  Map, Ruler, ClipboardCheck, HardHat, Sofa,
  Briefcase, TrendingUp, Home, Phone, Mail,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ENQUIRY_TYPE_LABELS: Record<string, string> = {
  employer: "Employer",
  investor: "Investor",
  homebuyer: "Homebuyer",
  other: "Other",
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", type: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "",
          enquiry_type: ENQUIRY_TYPE_LABELS[formData.type] ?? formData.type,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error("non-2xx response");
      setSubmitted(true);
      toast.success("Thank you — we'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", phone: "", type: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try emailing us directly at logu@nuvaaproperties.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section id="hero" className="section-dark min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent-dark rounded-full blur-[100px]" />
        </div>
        {/* Decorative geometry */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none">
          <div className="w-[420px] h-[420px] border border-accent/40 rotate-45" />
          <div className="w-[280px] h-[280px] border border-accent/30 rotate-45 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          <div className="w-[140px] h-[140px] bg-accent/10 border border-accent/40 rotate-45 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label mb-6">NUVAA PROPERTIES · COIMBATORE, INDIA</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="heading-hero text-primary-foreground mb-6">
                India's Workforce<br />Deserves Better Housing.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-2xl md:text-3xl font-heading text-accent mb-8 italic">
                We build it — where they work.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-large text-primary-foreground/60 max-w-2xl mb-10">
                Nuvaa partners with India's largest employers and institutions to deliver planned residential communities for their workforce. Captive demand. Institutional backing. Real returns.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button onClick={() => scrollTo("model")} className="btn-primary">
                  Explore Our Model
                </button>
                <button onClick={() => scrollTo("project")} className="text-primary-foreground underline-offset-4 underline hover:text-accent transition-colors text-sm font-body font-medium inline-flex items-center gap-2">
                  View the CMC Ranipet Project <ArrowDown size={14} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <button
          onClick={() => scrollTo("problem")}
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent animate-bounce"
        >
          <ArrowDown size={28} />
        </button>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">WHY NUVAA EXISTS</p>
            <h2 className="heading-section text-foreground max-w-3xl mb-16">
              Large Employers House Thousands of People. Just Not Near Where They Work.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Workforce at Scale", body: "India's hospitals, manufacturers, and institutions employ tens of thousands — yet provide zero organised housing close to campus." },
              { icon: MapPin, title: "Location Lock-In", body: "Employees can't relocate freely. They need homes precisely where they work — not an hour's commute away." },
              { icon: Building2, title: "Unorganised Supply", body: "Nearby housing is ad-hoc, unplanned, and falls far short of the quality professionals expect and deserve." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border hover:border-accent/30 transition-colors h-full">
                  <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section id="model" className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">THE MODEL</p>
            <h2 className="heading-section text-primary-foreground max-w-2xl mb-6">
              One Framework. Any Employer. Any Location.
            </h2>
            <p className="body-large text-primary-foreground/60 max-w-3xl mb-16">
              We go where employment is. Our model identifies large institutional employers, validates housing demand on the ground, and delivers planned residential communities — backed by investor capital through a structured SPV. The employer anchors demand. We build the rest.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Identify", body: "Locate large employers with 5,000+ staff and a documented housing deficit near their campus." },
              { step: "02", title: "Validate", body: "Confirm demand depth, land availability, and institutional appetite before committing a single rupee." },
              { step: "03", title: "Build", body: "Execute phased residential delivery with investor capital through a ring-fenced SPV per project." },
              { step: "04", title: "Deliver", body: "Sell to a captive buyer base — stable-income employees who are motivated and pre-qualified to own." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative border-t-2 border-accent/30 pt-6">
                  <span className="text-5xl font-heading text-accent block mb-4">{item.step}</span>
                  <h3 className="heading-card text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <p className="text-accent italic font-heading text-xl md:text-2xl mt-16 max-w-3xl">
              "Unlike traditional real estate, every Nuvaa project begins with a verified pipeline of buyers — not a hope."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROJECT — CMC RANIPET */}
      <section id="project" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">CASE STUDY · DEPLOYMENT #1</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection delay={0.05}>
                <h2 className="heading-section text-foreground mb-6">
                  CMC Ranipet Employee Housing Community.
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="body-large text-muted-foreground mb-6">
                  Christian Medical College (CMC) Ranipet is one of Asia's foremost healthcare institutions, employing over 15,000 staff at its campus. With 4,000+ employees seeking home ownership and no organised supply nearby, it is the ideal first deployment of the Nuvaa workforce housing model.
                </p>
                <p className="text-muted-foreground font-body mb-6">
                  A formal MOU between Nuvaa Properties and CMC Ranipet is in place.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-md mb-8">
                  <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-primary text-xs font-bold">✓</span>
                  <span className="text-sm font-body font-semibold tracking-wider">FORMAL MOU CONFIRMED</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <ul className="space-y-2 text-sm font-body text-foreground mb-8 border-l-2 border-accent pl-5">
                  <li>→ 1,000 residential units · 1,200 sq.ft per home</li>
                  <li>→ 3-bedroom independent villas</li>
                  <li>→ ₹68–72 Lakhs per unit</li>
                  <li>→ Phase 1: 100–150 homes · 12–18 months</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.25}>
                <button onClick={() => scrollTo("investors")} className="text-accent font-body font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Request the Investor Brief <ArrowRight size={16} />
                </button>
              </AnimatedSection>
            </div>
            <div className="space-y-4">
              {[
                { value: "15,000", suffix: "+", label: "Staff on Campus" },
                { value: "4,000", suffix: "+", label: "Employees Seeking Ownership" },
                { value: "1,000", label: "Planned Residential Units" },
              ].map((s, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-primary p-8 rounded-lg">
                    <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">FULL-SERVICE DEVELOPMENT</p>
            <h2 className="heading-section text-primary-foreground max-w-3xl mb-6">
              From Land to Handover. Everything In-House.
            </h2>
            <p className="body-large text-primary-foreground/60 max-w-3xl mb-16">
              Nuvaa manages every stage of property development under one roof — so nothing falls through the gaps between consultants.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Map, title: "Land Procurement", body: "Site identification, due diligence, negotiation and acquisition." },
              { icon: Ruler, title: "Architectural Design", body: "Master planning through to individual floor plans and regulatory drawings." },
              { icon: ClipboardCheck, title: "Project Management", body: "End-to-end delivery accountability — timeline, budget, quality." },
              { icon: HardHat, title: "Construction", body: "Residential, commercial, and infrastructure construction to high standards." },
              { icon: Sofa, title: "Interior Design", body: "Fully finished spaces — from concept through to move-in ready." },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border border-primary-foreground/10 hover:border-accent/40 transition-colors p-6 h-full rounded-lg">
                  <s.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg text-primary-foreground mb-2">{s.title}</h3>
                  <p className="text-primary-foreground/60 font-body text-xs leading-relaxed">{s.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section id="investors" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">INVESTOR PARTNERSHIP</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection delay={0.05}>
                <h2 className="heading-section text-foreground mb-6">
                  Institutional Demand. Structured Capital. Real Returns.
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="body-large text-muted-foreground mb-4">
                  Nuvaa's workforce housing projects are structured as SPV-based equity partnerships — ring-fencing investor capital per phase, with multiple exit points across the project lifecycle.
                </p>
                <p className="text-muted-foreground font-body mb-8">
                  The demand is pre-built into the model. We never sell into an unknown market.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <ul className="space-y-3 text-sm font-body text-foreground mb-10">
                  {[
                    "Captive buyer base before construction begins",
                    "Recession-resistant employment anchors",
                    "Phased entry — Phase 1 proves the model at ₹20 Crores",
                    "60% investor equity / 30% Nuvaa / 10% strategic partners",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <button onClick={() => scrollTo("contact")} className="btn-primary">
                  Request Investor Brief
                </button>
              </AnimatedSection>
            </div>
            <div className="space-y-4">
              {[
                { value: "30–45%", label: "Projected Project ROI" },
                { value: "₹20 Cr", label: "Phase 1 Capital Entry" },
                { value: "12–18 Months", label: "Phase 1 Timeline" },
              ].map((s, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-primary p-8 rounded-lg text-center">
                    <div className="stat-number">{s.value}</div>
                    <p className="text-sm font-body text-primary-foreground/60 mt-2 tracking-wide">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & FOUNDER */}
      <section id="about" className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">ABOUT NUVAA</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedSection delay={0.05}>
                <h2 className="heading-section text-primary-foreground mb-8">
                  Built on the Belief That Where You Work Shapes How You Live.
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="space-y-5 text-primary-foreground/70 font-body">
                  <p>Nuvaa Properties was founded in Coimbatore in 2021 with a single conviction: that India's large employers have a workforce housing problem no one is solving at scale — and that solving it well creates both genuine social impact and strong investment returns.</p>
                  <p>We began as a full-service property developer — delivering residential villas and apartments across Tamil Nadu. As we grew, a pattern emerged: the most motivated buyers were always employees of large institutions, seeking quality homes close to where they worked. The demand was captive. The organised supply was non-existent.</p>
                  <p>We built a model around that insight. The CMC Ranipet project is the proof of concept. Every employer campus in India is the opportunity that follows.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-xs font-body text-primary-foreground/40 mt-8 tracking-wider">
                  · Est. 2021 · Coimbatore, Tamil Nadu · CIN: U45202TZ2021PTC036964
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.15}>
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 border-t-2 border-t-accent rounded-lg p-8">
                <p className="section-label mb-4">FOUNDER</p>
                <h3 className="heading-card text-primary-foreground mb-1">Govindasamy Loganathan</h3>
                <p className="text-sm font-body text-primary-foreground/60 mb-6">Director & Co-Founder, Nuvaa Properties</p>
                <div className="space-y-4 text-sm text-primary-foreground/70 font-body leading-relaxed">
                  <p>Loganathan's career is the foundation of Nuvaa's methodology.</p>
                  <p>He began as a software engineer in London — where he developed the project discipline, systems thinking, and delivery rigour that international technology companies demand. He learned to build complex things to specification, on time, with accountability at every stage.</p>
                  <p>He then returned to India and built a knitted garment manufacturing operation in Tirupur — one of the world's largest textile hubs. Here he mastered what textbooks don't teach: how to run a physical production business on the ground in India. Supply chains, labour, cost control, contractor relationships, and the realities of building and delivering at scale in the Tamil Nadu context.</p>
                  <p>Real estate was the natural convergence of both. Nuvaa applies the structured project methodology of international software delivery to Indian property development — rigorous planning, phased execution, and full accountability from land to handover.</p>
                </div>
                <p className="font-heading italic text-accent text-xl md:text-2xl mt-8 leading-snug">
                  "Built to international standards. Delivered with local knowledge."
                </p>
                <a href="mailto:logu@nuvaaproperties.com" className="block mt-6 text-sm text-accent font-body hover:underline">
                  logu@nuvaaproperties.com
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">GET IN TOUCH</p>
            <h2 className="heading-section text-foreground mb-6">Let's Start a Conversation.</h2>
            <p className="body-large text-muted-foreground max-w-3xl mb-16">
              Whether you're an employer with a workforce housing challenge, an investor exploring the sector, or a professional looking for a home near your workplace — we'd like to hear from you.
            </p>
          </AnimatedSection>

          {/* Three route cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Briefcase, label: "For Employers", body: "Large institution with a workforce housing gap? Let's discuss a partnership.", cta: "Get in Touch" },
              { icon: TrendingUp, label: "For Investors", body: "Raising equity partners for Phase 1 of CMC Ranipet. Request the brief.", cta: "Request Investor Brief" },
              { icon: Home, label: "For Homebuyers", body: "CMC Ranipet employee or healthcare professional? Register your interest early.", cta: "Register Interest" },
            ].map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card p-7 rounded-lg border border-border h-full hover:border-accent/40 transition-colors">
                  <c.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl text-foreground mb-3">{c.label}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{c.body}</p>
                  <span className="text-sm text-accent font-body font-semibold inline-flex items-center gap-1">
                    {c.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form + details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground inline-flex items-center justify-center text-xl mb-4">✓</div>
                    <h3 className="heading-card text-foreground mb-2">Thank you</h3>
                    <p className="text-muted-foreground font-body">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="heading-card text-foreground mb-6">Send an Enquiry</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Full Name *</label>
                          <input required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Email Address *</label>
                          <input required type="email" maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="you@email.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Phone Number</label>
                          <input maxLength={20} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="+91 XXXXX XXXXX" />
                        </div>
                        <div>
                          <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">I am enquiring as *</label>
                          <select required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50">
                            <option value="">Select...</option>
                            <option value="employer">Employer</option>
                            <option value="investor">Investor</option>
                            <option value="homebuyer">Homebuyer</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-body font-semibold text-foreground tracking-wide mb-1 block">Message *</label>
                        <textarea required maxLength={1000} rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-border rounded-md px-4 py-3 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" placeholder="How can we help?" />
                      </div>
                      <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                        {sending ? "Sending…" : "Send Enquiry"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    46, Kerala Club Rd, ATT Colony<br />
                    Gopalapuram, Coimbatore – 641018<br />
                    Tamil Nadu, India
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div className="text-sm font-body text-muted-foreground space-y-1">
                    <a href="tel:+919003013354" className="block hover:text-accent transition-colors">+91 90030 13354</a>
                    <a href="tel:+919443353299" className="block hover:text-accent transition-colors">+91 94433 53299</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <a href="mailto:logu@nuvaaproperties.com" className="text-sm font-body text-muted-foreground hover:text-accent transition-colors break-all">
                    logu@nuvaaproperties.com
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
