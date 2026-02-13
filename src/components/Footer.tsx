import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="bg-darker text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <Logo size="md" variant="full" light />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Crafting timeless interiors and connecting you with the finest real estate opportunities. Your dream space, realized.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projects" },
                { to: "/services", label: "Services" },
                { to: "/enquiry", label: "Enquiry" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {["Interior Design", "Real Estate", "Renovation", "Consultation", "Space Planning"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-400 hover:text-brand-400 transition-colors duration-300 cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">123 Design Street, Kochi, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span className="text-sm text-gray-400">hello@habitek.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Habitek Interiors & Realty. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 bg-white/5 px-4 py-2 rounded-full">
              🚧 This is a <span className="text-brand-400 font-medium">demo website</span> — built for showcasing purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
