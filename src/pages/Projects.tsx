import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle } from "lucide-react";

const ProjectsPage = () => {
  return (
    <>
      <PageHero
        headline="What We've Built. What's Coming Next."
        body="Nuvaa's portfolio spans completed residential communities, ongoing developments, and the large-scale workforce housing projects now in delivery."
      />

      {/* COMPLETED */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">COMPLETED</p>
            <h2 className="heading-section text-foreground mb-12">Delivered Projects.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Springfield Rivera Anthea Villas",
                type: "Residential — Independent Villas",
                location: "Ondipudur, Coimbatore",
                scale: "16 independent villas",
                features: ["24-hour power backup", "Piped gas", "Swimming pool", "24/7 security surveillance"],
              },
              {
                title: "Springfield Rivera Anthea Flats",
                type: "Residential — Apartments",
                location: "Ondipudur, Coimbatore",
                scale: "56 flats across five blocks",
                features: ["24-hour power backup", "Piped gas", "Hydro-pneumatic pumping", "Swimming pool"],
              },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg border border-border p-8">
                  <span className="inline-flex items-center gap-1 text-xs font-body font-semibold text-accent mb-3">
                    <CheckCircle size={14} /> COMPLETED
                  </span>
                  <h3 className="heading-card text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-1">{p.type}</p>
                  <p className="text-sm text-muted-foreground font-body mb-1">{p.location}</p>
                  <p className="text-sm text-muted-foreground font-body mb-4">{p.scale}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f, j) => (
                      <span key={j} className="text-xs font-body bg-secondary text-muted-foreground px-3 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ONGOING */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">ONGOING & FUTURE</p>
            <h2 className="heading-section text-primary-foreground mb-12">In Development.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-primary-foreground/5 rounded-lg p-8 max-w-3xl">
              <span className="text-xs font-body font-semibold text-accent tracking-wide">PHASE 1 — IN DELIVERY</span>
              <h3 className="heading-card text-primary-foreground mt-2 mb-2">CMC Ranipet Employee Housing Community</h3>
              <p className="text-sm text-primary-foreground/50 font-body mb-1">Workforce Housing — Residential Township</p>
              <p className="text-sm text-primary-foreground/50 font-body mb-4">Adjacent to CMC Ranipet campus, Tamil Nadu</p>
              <div className="grid grid-cols-2 gap-4 text-sm font-body text-primary-foreground/70 mb-6">
                <p><span className="text-primary-foreground font-medium">Scale:</span> 1,000 independent houses</p>
                <p><span className="text-primary-foreground font-medium">Size:</span> 1,200 sq.ft each</p>
                <p><span className="text-primary-foreground font-medium">Price:</span> ₹68–72 Lakhs per unit</p>
                <p><span className="text-primary-foreground font-medium">Phase 1:</span> 100–150 homes</p>
              </div>
              <Link to="/workforce-housing" className="btn-primary inline-flex items-center gap-2 text-sm py-2.5 px-6">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
