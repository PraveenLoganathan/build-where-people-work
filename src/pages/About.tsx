import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <PageHero
        headline="Built on the Belief That Where You Work Shapes How You Live."
        body="Nuvaa Properties was founded in Coimbatore in 2021 with a single conviction: that large employers have a workforce housing problem no one is solving at scale — and that solving it well creates both social impact and strong investment returns."
      />

      {/* OUR STORY */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-8">From Developer to Platform.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 body-large text-muted-foreground leading-relaxed">
              <p>Nuvaa began as a full-service property developer — delivering residential villas, apartment blocks, and commercial projects across Tamil Nadu. We built our capabilities from the ground up: land sourcing, architecture, structural engineering, and construction, all in-house.</p>
              <p>As we grew, a pattern became impossible to ignore. The most stable, motivated buyers we encountered were people employed by large institutions — hospitals, manufacturers, government bodies — who needed quality housing close to where they worked. The demand was captive. The supply was non-existent.</p>
              <p>We built a model around that insight.</p>
              <p>Today, Nuvaa is India's emerging workforce housing platform — partnering with large employers and institutional investors to build planned residential communities precisely where employment is. Our first project, in partnership with Christian Medical College (CMC) Ranipet, is the proof of concept.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">WHAT WE STAND FOR</p>
            <h2 className="heading-section text-foreground mb-16">Three Beliefs That Drive Everything We Do.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Demand Before Development", body: "We never build speculatively. Every Nuvaa project begins with a verified pipeline of buyers — employees of the anchoring institution. The employer validates the location. We build the home." },
              { title: "Full Accountability", body: "We own the entire process — land to handover. No pointing between consultants. No gaps in responsibility. One team, one outcome." },
              { title: "Designed for Potential", body: "Our tagline has always been 'Designing for Potential.' Whether it's a 1,200 sq.ft independent villa or a full residential township, we build what the community actually needs to thrive." },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border-t-2 border-accent pt-6">
                  <h3 className="heading-card text-foreground mb-4">{v.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">THE TEAM</p>
            <h2 className="heading-section text-foreground mb-4">The People Behind the Model.</h2>
            <p className="body-large text-muted-foreground mb-16 max-w-2xl">
              Nuvaa's leadership team brings together deep expertise in land acquisition, real estate development, architecture, and project delivery.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Govindasamy Loganathan (Logu)", title: "Director & Co-Founder", email: "logu@nuvaaproperties.com" },
              { name: "Manoj", title: "Director" },
              { name: "Catherine Bhagyashree R", title: "Director" },
            ].map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                    <span className="text-xl font-heading text-accent">{m.name[0]}</span>
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-1">{m.name}</h3>
                  <p className="text-sm text-accent font-body font-medium mb-3">{m.title}</p>
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors font-body">
                      <Mail size={14} /> {m.email}
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NUVAA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-16">What Makes Nuvaa Different.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            {[
              { title: "Institutional relationships, not just transactions", body: "We operate at the employer level — not the individual buyer level. This gives us structural deal flow and a buyer base that is pre-validated before a single unit is sold." },
              { title: "Location-agnostic model", body: "We don't speculate on locations. We follow employment. Our model works anywhere a large institution has an unmet housing need — Ranipet today, any campus tomorrow." },
              { title: "End-to-end capability", body: "From land identification to construction to handover, every function sits inside Nuvaa. That's not common in Indian real estate. It's what allows us to guarantee outcomes across phases." },
              { title: "Phased, investor-aligned structure", body: "Our projects are structured through SPVs, phase by phase. Investor capital is never exposed to the full project before proof of concept. Early exits are available. Capital is protected." },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div>
                  <h3 className="heading-card text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
