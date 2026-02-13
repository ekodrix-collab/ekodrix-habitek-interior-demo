import { Link } from "react-router-dom";
import {
  Paintbrush,
  Building2,
  Ruler,
  Hammer,
  Lightbulb,
  Sofa,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    desc: "From concept to completion, we create bespoke interiors that blend aesthetics with functionality. Our designs reflect your personality while maximizing comfort.",
    features: ["Custom furniture design", "Color & material consultation", "3D visualization", "Project management"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Real Estate Services",
    desc: "Find your dream property with our expert guidance. We offer premium residential and commercial properties in the most sought-after locations.",
    features: ["Property consultation", "Market analysis", "Legal assistance", "Investment advisory"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    desc: "Optimize every square foot with intelligent space planning. We create layouts that enhance flow, functionality, and visual appeal.",
    features: ["Floor plan optimization", "Traffic flow analysis", "Furniture placement", "Storage solutions"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Breathe new life into existing spaces. Our renovation services transform outdated interiors into modern, stylish environments.",
    features: ["Kitchen & bath remodeling", "Structural modifications", "Flooring & tiling", "Electrical upgrades"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    desc: "Set the perfect mood with professional lighting design. We combine ambient, task, and accent lighting for stunning visual effects.",
    features: ["Ambient lighting design", "Smart lighting systems", "Energy-efficient solutions", "Decorative fixtures"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    icon: Sofa,
    title: "Furniture Curation",
    desc: "Handpicked furniture selections that complement your design vision. We source from premium brands and artisan craftspeople.",
    features: ["Custom manufacturing", "Brand sourcing", "Antique restoration", "Upholstery services"],
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "We discuss your vision, budget, and requirements in detail." },
  { step: "02", title: "Concept Design", desc: "Our team creates mood boards, 3D renders, and design concepts." },
  { step: "03", title: "Development", desc: "Detailed drawings, material selections, and project planning." },
  { step: "04", title: "Execution", desc: "Expert craftsmen bring the design to life with precision." },
];

export function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mt-3">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Comprehensive design and real estate solutions crafted with precision, passion, and purpose.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-14 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon size={24} className="text-brand-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-4">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-brand-600 shrink-0" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/enquiry"
                    className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Get Started <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">How We Work</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mt-2">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <span className="font-heading text-5xl font-bold text-brand-100">{p.step}</span>
                <h4 className="font-heading text-lg font-bold text-dark mt-2">{p.title}</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-brand-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-brand-100 text-lg mb-10">
            Every great space starts with a conversation. Tell us about your project.
          </p>
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-semibold rounded-full hover:bg-brand-50 transition-all duration-300 shadow-2xl"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
