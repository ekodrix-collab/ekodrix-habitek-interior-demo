import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Award,
  Users,
  Home,
  Paintbrush,
  Building2,
  Ruler,
  ChevronRight,
} from "lucide-react";

const stats = [
  { icon: Home, value: "250+", label: "Projects Completed" },
  { icon: Users, value: "180+", label: "Happy Clients" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Client Rating" },
];

const featuredProjects = [
  {
    title: "Modern Minimalist Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    title: "Luxury Penthouse Suite",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Contemporary Office Space",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    desc: "Bespoke designs that reflect your personality and lifestyle.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Premium properties in prime locations across Kerala.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    desc: "Optimized layouts for maximum functionality and flow.",
  },
];

const testimonials = [
  {
    name: "Amina K.",
    role: "Homeowner, Kochi",
    text: "Habitek transformed our home into a masterpiece. Their attention to detail and understanding of our vision was remarkable.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    role: "Business Owner",
    text: "Professional, creative, and timely. Our office redesign exceeded all expectations. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Fathima S.",
    role: "Apartment Owner",
    text: "From concept to completion, the team was exceptional. They made the entire process stress-free and enjoyable.",
    rating: 5,
  },
];

export function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Now serving across Kerala</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Where Design
              <br />
              Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Elegance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
              Transform your spaces into stunning works of art. Premium interior design and real estate solutions tailored to your lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-all duration-300 shadow-2xl shadow-brand-600/30 hover:shadow-brand-600/50"
              >
                View Our Work
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/60 border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-50 flex items-center justify-center">
                    <Icon size={22} className="text-brand-600" />
                  </div>
                  <p className="font-heading text-3xl font-bold text-dark">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mt-2">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Projects <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <Link
                to="/projects"
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-brand-400 text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mt-2">Our Expertise</h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-lg">
              Comprehensive solutions for every aspect of your space, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                    <Icon size={26} className="text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark mb-3">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{svc.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 mt-6 text-brand-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mt-2">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={18} className="text-brand-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
            alt="Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Let's bring your vision to life. Contact us today for a free consultation and discover the Habitek difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-all duration-300 shadow-2xl shadow-brand-600/30"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
