import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "We Find the Right Land Before Anyone Else Does.",
    subtitle: "Land Procurement",
    body: "Land procurement is the hardest part of any development — and Nuvaa's most distinct capability. Our specialist team identifies land adjacent to large employers, evaluates it against ground conditions, drainage, access, and market trends, and negotiates acquisition in the shortest possible timeframe.",
    items: ["Site identification and market research", "Title due diligence and legal documentation", "Ground condition and ecology investigation", "Landowner negotiation and deal closure", "Regulatory and approval pathway mapping"],
  },
  {
    title: "Designed for How People Actually Live.",
    subtitle: "Architectural Design",
    body: "Our architectural team takes a design-led, environment-conscious approach — from master planning to individual floor plans. We work across scales: standalone homes, multi-unit gated communities, and full township master plans.",
    items: ["Master planning and site layout", "Architectural design and floor plans", "Conceptual and schematic design", "Structural and sustainable design", "Regulatory drawing preparation"],
  },
  {
    title: "Delivered on Time. On Budget. No Excuses.",
    subtitle: "Project Management",
    body: "Nuvaa's project management function ties every discipline together — keeping architecture, construction, approvals, and handover on a single coordinated timeline. We are accountable for outcomes, not just inputs.",
    items: ["End-to-end project timeline management", "Regulatory approvals and compliance", "Contractor and consultant coordination", "Budget management and cost control", "Quality assurance across all phases"],
  },
  {
    title: "High Standards. Built In — Not Inspected In.",
    subtitle: "Construction",
    body: "Our construction team brings together structural engineering, site management, and quality control under one roof. We believe quality is designed into the process, not added at the end.",
    items: ["Residential construction (villas, apartments, independent homes)", "Commercial and industrial construction", "Infrastructure development (roads, drainage, utilities)", "Structural engineering oversight", "Site safety and compliance"],
  },
  {
    title: "Spaces That Feel Like Home From Day One.",
    subtitle: "Interior Design",
    body: "For clients who want a fully finished home, Nuvaa's interior design service takes the space from structure to move-in ready — with considered, practical design that suits the lifestyle of the resident.",
    items: ["Conceptual interior design", "Space planning and layout", "Material and finish selection", "Furniture and fixture coordination", "Full fit-out execution"],
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageHero
        headline="Every Stage. In-House. Accountable."
        body="Nuvaa provides a complete circle of property development services — from the moment a site is identified through to the day a family moves in. No handoffs between consultants. No gaps in accountability."
      />

      {services.map((svc, i) => (
        <section key={i} className={`py-20 md:py-24 ${i % 2 === 0 ? "bg-secondary" : "bg-card"}`}>
          <div className="container mx-auto px-6 max-w-3xl">
            <AnimatedSection>
              <p className="section-label mb-4">{svc.subtitle.toUpperCase()}</p>
              <h2 className="heading-section text-foreground mb-4">{svc.title}</h2>
              <p className="body-large text-muted-foreground mb-8">{svc.body}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-3">
                {svc.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-sm font-body text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServicesPage;
