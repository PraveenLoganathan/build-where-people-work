import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Workforce Housing", path: "/workforce-housing" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "For Investors", path: "/investors" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading text-accent">N</span>
          <span className="text-lg font-semibold text-primary-foreground tracking-wide font-body">
            NUVAA
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors font-body ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-6">
          Get in Touch
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium tracking-wide font-body ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary block text-center w-full mt-4"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
