import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-heading text-accent">N</span>
              <span className="text-lg font-semibold tracking-wide font-body text-primary-foreground">
                NUVAA
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm font-body italic">
              We Build Where People Work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-sm tracking-wide text-primary-foreground mb-4">
              COMPANY
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Workforce Housing", path: "/workforce-housing" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-primary-foreground/50 hover:text-accent transition-colors font-body"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm tracking-wide text-primary-foreground mb-4">
              CONTACT
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/50 font-body">
              <p>46, Kerala Club Rd, ATT Colony<br />Gopalapuram, Coimbatore – 641018<br />Tamil Nadu, India</p>
              <p>
                <a href="tel:+919003013354" className="hover:text-accent transition-colors">+91 90030 13354</a><br />
                <a href="tel:+919443353299" className="hover:text-accent transition-colors">+91 94433 53299</a>
              </p>
              <p>
                <a href="mailto:logu@nuvaaproperties.com" className="hover:text-accent transition-colors">
                  logu@nuvaaproperties.com
                </a>
              </p>
            </div>
          </div>

          {/* Investors */}
          <div>
            <h4 className="font-body font-semibold text-sm tracking-wide text-primary-foreground mb-4">
              INVESTORS
            </h4>
            <p className="text-sm text-primary-foreground/50 font-body mb-4">
              Explore equity partnership opportunities in India's workforce housing sector.
            </p>
            <Link to="/investors" className="btn-outline-light text-xs py-2 px-5">
              Investor Brief →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/30 font-body">
            © 2025 Nuvaa Properties Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30 font-body">
            CIN: U45202TZ2021PTC036964
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
