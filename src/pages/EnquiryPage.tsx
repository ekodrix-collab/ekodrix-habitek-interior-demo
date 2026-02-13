import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "123 Design Street, Kochi, Kerala, India" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
  { icon: Mail, label: "Email Us", value: "hello@habitek.in" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9 AM – 7 PM" },
];

const serviceOptions = [
  "Interior Design",
  "Real Estate",
  "Space Planning",
  "Renovation",
  "Lighting Design",
  "Furniture Curation",
  "Other",
];

const budgetRanges = [
  "Under ₹5 Lakh",
  "₹5 – 15 Lakh",
  "₹15 – 30 Lakh",
  "₹30 – 50 Lakh",
  "₹50 Lakh+",
  "Not Sure Yet",
];

export function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mt-3">Enquiry</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark">Contact Information</h2>
                <p className="text-gray-500 mt-2">
                  Reach out through any of these channels or fill in the enquiry form.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-brand-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{item.label}</p>
                        <p className="text-dark font-medium text-sm mt-1">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={40} className="text-brand-300 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Interactive map coming soon</p>
                  <p className="text-gray-500 font-medium text-sm mt-1">Kochi, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-500 max-w-md">
                    Your enquiry has been submitted successfully. Our team will review it and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
                    }}
                    className="mt-8 px-6 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100">
                  <h3 className="font-heading text-xl font-bold text-dark mb-6">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition appearance-none"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition appearance-none"
                      >
                        <option value="">Select your budget</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-all duration-300 shadow-lg shadow-brand-200 hover:shadow-brand-300"
                  >
                    <Send size={18} />
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
