const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const links = [
  { label: "About", id: "about" },
  { label: "Model", id: "model" },
  { label: "CMC Ranipet", id: "project" },
  { label: "Investors", id: "investors" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-heading text-accent tracking-wide">NUVAA</span>
              <span className="text-sm text-primary-foreground/70 font-body font-light">Properties</span>
            </div>
            <p className="text-primary-foreground/50 text-sm font-body italic">
              We Build Where People Work.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-center">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-body"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="md:text-right text-xs text-primary-foreground/40 font-body leading-relaxed">
            © 2025 Nuvaa Properties Pvt. Ltd. All rights reserved.<br />
            CIN: U45202TZ2021PTC036964<br />
            Coimbatore, Tamil Nadu, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
