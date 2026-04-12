import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const InvestorsPage = () => {
  return (
    <>
      <PageHero
        headline="Institutional Demand. Structured Capital. Real Returns."
        body="Nuvaa offers equity partnership opportunities in India's emerging workforce housing sector — a category with captive buyer demand, recession-resistant employment anchors, and phased capital deployment designed to protect investor exposure."
        ctaText="Request Investor Brief →"
        ctaLink="/contact"
      />

      {/* WHY THIS WORKS */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-16">This Is Not Speculative Real Estate.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            {[
              { title: "Captive Demand", body: "Buyers are pre-identified before construction begins. They are employees of stable institutions with regular incomes and a genuine need to own near their workplace." },
              { title: "Location-Agnostic Model", body: "We go where the employer is. The institution validates the location — eliminating the geographic risk typical of tier-2 and tier-3 real estate investments." },
              { title: "Recession-Resistant Sectors", body: "Healthcare, public institutions, and manufacturing are among India's most stable employment anchors. Demand persists through economic cycles." },
              { title: "Phased Capital Exposure", body: "Investors enter phase by phase through an SPV structure. Capital is ring-fenced. Phase 1 proves the model before deeper commitment is required." },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="heading-card text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIALS */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">CMC RANIPET PROJECT — FINANCIAL OVERVIEW</p>
            <h2 className="heading-section text-primary-foreground mb-12">The Numbers.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              {[
                { label: "Total Revenue (1,000 units)", value: "₹700 Crores" },
                { label: "Total Project Cost", value: "₹550 Crores" },
                { label: "Gross Profit", value: "₹150 Crores" },
                { label: "Cost Per Unit", value: "₹55 Lakhs" },
                { label: "Selling Price Per Unit", value: "₹68–72 Lakhs" },
                { label: "Gross Margin Per Unit", value: "₹13–17 Lakhs (~24–31%)" },
                { label: "Phase 1 Capital Requirement", value: "₹20 Crores" },
                { label: "Full Project Capital", value: "₹200–250 Crores" },
                { label: "Projected ROI", value: "30–45%" },
                { label: "Project Duration", value: "4–5 years" },
                { label: "Phase 1 Duration", value: "12–18 months" },
              ].map((m, i) => (
                <div key={i} className="bg-primary-foreground/5 rounded-lg p-5">
                  <p className="text-xs font-body text-primary-foreground/40 tracking-wide uppercase mb-1">{m.label}</p>
                  <p className="text-lg font-heading text-accent">{m.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EQUITY STRUCTURE */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-4">How the Partnership Works.</h2>
            <p className="body-large text-muted-foreground mb-12">
              Projects are executed through a Special Purpose Vehicle (SPV), ring-fencing capital per phase and providing clear governance for all partners.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 mb-8">
              {[
                { label: "Investor Group", pct: 60 },
                { label: "Nuvaa Properties", pct: 30 },
                { label: "Strategic Partners", pct: 10 },
              ].map((eq, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-body mb-1">
                    <span className="text-foreground font-medium">{eq.label}</span>
                    <span className="text-accent font-semibold">{eq.pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: `${eq.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-body">Profit is distributed proportionally to equity participation. Multiple exit points are available across the project lifecycle.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* EXIT OPTIONS */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-12">Multiple Ways to Exit.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              { title: "Phase 1 Exit", timeline: "12–18 months", body: "Earliest opportunity following unit handovers." },
              { title: "Phased Exit", timeline: "Ongoing", body: "Partial capital recycling between phases with continued exposure to future phases." },
              { title: "Full Project Exit", timeline: "4–5 years", body: "Complete township at project maturity, maximising long-term value." },
            ].map((e, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border">
                  <span className="text-xs font-body font-semibold text-accent tracking-wide">{e.timeline}</span>
                  <h3 className="heading-card text-foreground mt-2 mb-3">{e.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{e.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="heading-section text-primary-foreground mb-4">Ready to Explore a Partnership?</h2>
            <p className="body-large text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              We are currently raising equity partners for Phase 1 of the CMC Ranipet Employee Housing Community.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">Request Investor Brief</Link>
              <a href="mailto:logu@nuvaaproperties.com" className="btn-outline-light">
                Email logu@nuvaaproperties.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default InvestorsPage;
