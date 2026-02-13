import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, LayoutGrid, Briefcase, Mail } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: LayoutGrid },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/enquiry", label: "Enquiry", icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo size="md" variant="full" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-brand-600 text-white shadow-lg shadow-brand-200"
                      : "text-gray-600 hover:text-brand-700 hover:bg-brand-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/enquiry"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-dark text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-all duration-300 shadow-lg hover:shadow-brand-200"
          >
            Get a Quote
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand-600 text-white"
                    : "text-gray-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/enquiry"
            onClick={() => setOpen(false)}
            className="block w-full text-center mt-3 px-5 py-3 bg-dark text-white text-sm font-medium rounded-xl hover:bg-brand-700 transition-all"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
