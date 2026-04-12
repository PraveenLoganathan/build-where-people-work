import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import { Users, MapPin, Building2, ArrowRight, Landmark, Factory, Ship, Monitor } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* HERO */}
      <section className="section-dark pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent-dark rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label mb-6">NUVAA PROPERTIES</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="heading-hero text-primary-foreground mb-6">
                India's Workforce Deserves Better Housing.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-2xl md:text-3xl font-heading text-accent mb-8 italic">
                We build it — where they work.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-large text-primary-foreground/60 max-w-2xl mb-10">
                Nuvaa partners with India's largest employers and institutions to design, fund, and deliver residential communities for their workforce. Captive demand. Institutional backing. Structured returns.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/workforce-housing" className="btn-primary">
                  Explore Workforce Housing
                </Link>
                <Link to="/projects" className="btn-outline-light">
                  View Our Projects
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">WHY NUVAA EXISTS</p>
            <h2 className="heading-section text-foreground max-w-3xl mb-16">
              Large employers house thousands of people. Just not near where they work.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Workforce at Scale", body: "India's hospitals, manufacturers, and institutions employ tens of thousands — yet provide zero organised housing close to campus." },
              { icon: MapPin, title: "Location Lock-In", body: "Employees can't relocate freely. They need homes precisely where they work — not 40km away." },
              { icon: Building2, title: "Unorganised Supply", body: "Nearby housing is ad-hoc and falls far short of the quality and planning that professionals expect." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border hover:border-accent/30 transition-colors">
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
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">THE MODEL</p>
            <h2 className="heading-section text-foreground max-w-2xl mb-4">
              One Framework. Any Employer. Any Location.
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mb-16">
              We go where employment is. Our model identifies large institutional employers, validates housing demand, and delivers planned residential communities — backed by investor capital through a structured SPV.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Identify", body: "Locate large employers with 5,000+ staff and a documented housing deficit." },
              { step: "02", title: "Validate", body: "Confirm demand depth, land availability, and institutional appetite before committing capital." },
              { step: "03", title: "Build", body: "Execute phased residential development with investor capital through a dedicated SPV." },
              { step: "04", title: "Deliver", body: "Sell to a captive buyer base — stable-income employees who are motivated to own." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-7xl font-heading text-accent/10 absolute -top-4 -left-2">{item.step}</span>
                  <div className="pt-12">
                    <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <Link to="/workforce-housing" className="btn-primary mt-12 inline-flex items-center gap-2">
              Learn More About the Model <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CMC RANIPET */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">CASE STUDY · DEPLOYMENT #1</p>
            <h2 className="heading-section text-primary-foreground max-w-3xl mb-4">
              15,000 staff. 4,000+ seeking homes. One planned community.
            </h2>
            <p className="body-large text-primary-foreground/60 max-w-3xl mb-12">
              Our first institutional workforce community is being built adjacent to the Christian Medical College (CMC) Ranipet campus — one of Asia's foremost healthcare institutions. 1,000 residential units. Formal MOU in place.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <StatCounter value="15,000" suffix="+" label="Staff on Campus" />
            <StatCounter value="4,000" suffix="+" label="Employees Seeking Home Ownership" />
            <StatCounter value="1,000" label="Planned Residential Units" />
          </div>
          <AnimatedSection delay={0.3}>
            <Link to="/workforce-housing" className="btn-primary inline-flex items-center gap-2">
              View the CMC Ranipet Project <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">FULL-SERVICE DEVELOPMENT</p>
            <h2 className="heading-section text-foreground max-w-3xl mb-4">
              From Land to Handover. Everything In-House.
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mb-12">
              Nuvaa has the capability to manage every stage of property development — so nothing falls through the gaps between consultants.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Land Procurement", "Architectural Design", "Project Management", "Construction", "Interior Design"].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-card p-6 rounded-lg border border-border text-center hover:border-accent/30 transition-colors">
                  <p className="font-body font-semibold text-sm text-foreground">{service}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <Link to="/services" className="btn-outline-light mt-10 inline-flex items-center gap-2 border-foreground/20 text-foreground hover:bg-foreground/5">
              See All Services <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* INVESTORS */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">INVESTOR PARTNERSHIP</p>
            <h2 className="heading-section text-foreground max-w-3xl mb-4">
              Strong Returns. Institutional Demand. Structured Exits.
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mb-12">
              Nuvaa's workforce housing projects are structured as SPV-based equity partnerships. Investor capital is ring-fenced per phase, with multiple exit opportunities across the project lifecycle.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="stat-number">30–45%</div>
                <p className="text-sm font-body text-muted-foreground mt-2">Projected Project ROI</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="stat-number">₹20 Cr</div>
                <p className="text-sm font-body text-muted-foreground mt-2">Phase 1 Capital Entry</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="stat-number">12–18</div>
                <p className="text-sm font-body text-muted-foreground mt-2">Months — Phase 1 Timeline</p>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.4}>
            <Link to="/investors" className="btn-primary inline-flex items-center gap-2">
              Explore Investment Opportunity <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="section-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-20 w-72 h-72 bg-accent rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="heading-section text-primary-foreground mb-6">Let's Build Together.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-large text-primary-foreground/60 max-w-2xl mx-auto mb-10">
              Whether you're a large employer with a housing challenge, an investor seeking structured real estate returns, or a professional looking for a home — we'd like to talk.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;
