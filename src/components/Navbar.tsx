import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Model", id: "model" },
  { label: "Project", id: "project" },
  { label: "Investors", id: "investors" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsOpen(false);
    setTimeout(() => scrollTo(id), 50);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10" : "bg-primary/60 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleNav("hero")} className="flex items-baseline gap-2">
          <span className="text-2xl font-heading text-accent tracking-wide">NUVAA</span>
          <span className="text-sm text-primary-foreground/70 font-body font-light tracking-wide hidden sm:inline">Properties</span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-accent transition-colors font-body"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => handleNav("contact")} className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-6">
          Get in Touch
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-foreground" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left text-sm font-medium tracking-wide font-body text-primary-foreground/70 hover:text-accent"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => handleNav("contact")} className="btn-primary block text-center w-full mt-4">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
