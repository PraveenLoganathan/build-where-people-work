import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import { Landmark, Factory, Ship, Monitor, ArrowRight, CheckCircle } from "lucide-react";

const WorkforceHousingPage = () => {
  return (
    <>
      <PageHero
        label="OUR PRIMARY OFFERING"
        headline="The Employer Is Our Demand Guarantee."
        body="Nuvaa designs, funds, and delivers residential communities for the workforces of India's large institutions. Our projects are not launched into an unknown market. They are built for a pre-identified buyer base with stable incomes and a clear need."
        ctaText="Talk to Us About a Partnership →"
        ctaLink="/contact"
      />

      {/* MODEL */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-4 max-w-2xl">One Framework. Replicable Anywhere.</h2>
            <p className="body-large text-muted-foreground max-w-3xl mb-16">
              Every large employer in India faces the same workforce housing challenge. Nuvaa's model is built to solve it — wherever employment meets housing deficit.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            {[
              { step: "01", title: "Identify", body: "We locate large employers — hospitals, manufacturers, port trusts, IT parks, public institutions — with 5,000+ staff and a demonstrable housing deficit near their campus." },
              { step: "02", title: "Validate", body: "Before committing capital, we verify demand depth, land availability, regulatory environment, and the institution's appetite to formally support the project." },
              { step: "03", title: "Build", body: "We structure a dedicated SPV for each project, raise investor capital phase by phase, and execute delivery using Nuvaa's in-house land, architecture, and construction capabilities." },
              { step: "04", title: "Deliver", body: "We sell to a captive buyer base — employees of the anchoring institution who are pre-qualified, motivated, and stable. Marketing risk is structurally eliminated." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border">
                  <span className="text-accent font-body font-bold text-sm tracking-wide">STEP {item.step}</span>
                  <h3 className="heading-card text-foreground mt-2 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-4">Where the Model Works.</h2>
            <p className="body-large text-muted-foreground max-w-3xl mb-12">
              Any large employer with a concentrated workforce and limited organised housing supply near their site is a Nuvaa opportunity.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Landmark, title: "Medical Campuses", body: "AIIMS, CMC, Apollo, Fortis, and major hospital clusters" },
              { icon: Factory, title: "Manufacturing SEZs", body: "Automotive, pharmaceutical, and textile industrial hubs" },
              { icon: Ship, title: "Port & Logistics", body: "Port trust townships and major logistics corridor workers" },
              { icon: Monitor, title: "IT & Tech Parks", body: "Tier 2 city technology corridors with growing professional populations" },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <s.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{s.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CMC RANIPET */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">CASE STUDY · DEPLOYMENT #1</p>
            <h2 className="heading-section text-primary-foreground mb-4 max-w-3xl">CMC Ranipet Employee Housing Community.</h2>
            <p className="body-large text-primary-foreground/60 max-w-3xl mb-4">
              Christian Medical College (CMC) Ranipet is one of Asia's foremost healthcare institutions, employing over 15,000 staff. With 4,000+ employees actively seeking home ownership, CMC Ranipet is the ideal first deployment.
            </p>
            <p className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm mb-12">
              <CheckCircle size={16} /> MOU Status: Confirmed
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <StatCounter value="15,000" suffix="+" label="Staff on Campus" />
            <StatCounter value="4,000" suffix="+" label="Seeking Home Ownership" />
            <StatCounter value="1,000" label="Planned Residential Units" />
          </div>

          <AnimatedSection delay={0.2}>
            <div className="bg-primary-foreground/5 rounded-lg p-8 mb-12 max-w-3xl">
              <h3 className="heading-card text-primary-foreground mb-6">Project Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-body text-primary-foreground/70">
                <p><span className="text-primary-foreground font-medium">House size:</span> 1,200 sq.ft (3-bedroom villa)</p>
                <p><span className="text-primary-foreground font-medium">Land required:</span> 55–65 acres</p>
                <p><span className="text-primary-foreground font-medium">Selling price:</span> ₹68–72 Lakhs per unit</p>
                <p><span className="text-primary-foreground font-medium">Phase 1:</span> 100–150 units, 12–18 months</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-primary-foreground/5 rounded-lg p-8 max-w-3xl mb-12">
              <h3 className="heading-card text-primary-foreground mb-6">Phase Breakdown</h3>
              <div className="space-y-4">
                {[
                  { phase: "Phase 1", units: "100–150", notes: "Proof of model. Fastest investor recovery." },
                  { phase: "Phase 2", units: "300", notes: "Scaled execution with validated demand." },
                  { phase: "Phase 3", units: "550", notes: "Township completion and community amenities." },
                ].map((p, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm font-body border-b border-primary-foreground/10 pb-4 last:border-0">
                    <span className="text-accent font-semibold min-w-[80px]">{p.phase}</span>
                    <span className="text-primary-foreground font-medium min-w-[80px]">{p.units} units</span>
                    <span className="text-primary-foreground/50">{p.notes}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Link to="/investors" className="btn-primary inline-flex items-center gap-2">
              Request the Full Investor Brief <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* BEYOND HOUSING */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-4">A Community, Not Just a Development.</h2>
            <p className="body-large text-muted-foreground max-w-3xl mb-12">
              Each Nuvaa workforce community is designed to evolve over time into a full residential township — with retail, recreation, schools, and green spaces.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Retail convenience stores", "Community clubhouse and recreation", "Parks and open green spaces", "Schools and childcare facilities"].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <p className="text-sm font-body font-medium text-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkforceHousingPage;
