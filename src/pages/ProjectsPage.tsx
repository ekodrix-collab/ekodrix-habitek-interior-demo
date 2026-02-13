import { useState } from "react";
import { ArrowUpRight, View, X } from "lucide-react";
import { Viewer360 } from "../components/Viewer360";

const categories = ["All", "Residential", "Commercial", "Interior", "Renovation", "Luxury"];

interface Project {
  title: string;
  category: string;
  location: string;
  image: string;
  panorama?: string;
  has360: boolean;
}

const projects: Project[] = [
  {
    title: "Serenity Villa",
    category: "Residential",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=80",
    has360: true,
  },
  {
    title: "Azure Penthouse",
    category: "Luxury",
    location: "Trivandrum",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=80",
    has360: true,
  },
  {
    title: "Horizon Office Tower",
    category: "Commercial",
    location: "Calicut",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80",
    has360: true,
  },
  {
    title: "Emerald Living Room",
    category: "Interior",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=2000&q=80",
    has360: true,
  },
  {
    title: "Coastal Retreat",
    category: "Residential",
    location: "Alleppey",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    has360: false,
  },
  {
    title: "Modern Kitchen Redesign",
    category: "Renovation",
    location: "Thrissur",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&q=80",
    has360: true,
  },
  {
    title: "Executive Suite",
    category: "Luxury",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=80",
    has360: true,
  },
  {
    title: "Startup Hub",
    category: "Commercial",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    has360: false,
  },
  {
    title: "Scandinavian Bedroom",
    category: "Interior",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=2000&q=80",
    has360: true,
  },
  {
    title: "Heritage Home Revival",
    category: "Renovation",
    location: "Kozhikode",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    has360: false,
  },
  {
    title: "Lakeview Apartment",
    category: "Residential",
    location: "Kottayam",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2000&q=80",
    has360: true,
  },
  {
    title: "Royal Dining Hall",
    category: "Luxury",
    location: "Trivandrum",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
    panorama: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=2000&q=80",
    has360: true,
  },
];

export function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ image: string; title: string } | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const handle360Click = (project: Project) => {
    if (project.has360 && project.panorama) {
      setSelectedProject(project);
    }
  };

  const handleImageClick = (project: Project) => {
    if (!project.has360) {
      setLightboxImage({ image: project.image, title: project.title });
      setShowLightbox(true);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Our Portfolio</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mt-3">
            Projects & Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Explore our curated collection of completed projects, from luxury villas to modern commercial spaces.
          </p>
          {/* 360 Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-brand-600/20 border border-brand-500/30 rounded-full">
            <View size={18} className="text-brand-400" />
            <span className="text-brand-300 text-sm font-medium">360° Virtual Tours Available</span>
          </div>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-200"
                    : "bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 360 View Legend */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                <View size={16} className="text-white" />
              </div>
              <span className="text-sm text-gray-600">360° View Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <ArrowUpRight size={16} className="text-gray-500" />
              </div>
              <span className="text-sm text-gray-600">Standard View</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                onClick={() => project.has360 ? handle360Click(project) : handleImageClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* 360 Badge */}
                {project.has360 && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-brand-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    <View size={14} />
                    <span>360°</span>
                  </div>
                )}
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mt-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{project.location}</p>
                </div>
                
                {/* Action Button */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  project.has360 
                    ? "bg-brand-600 hover:bg-brand-700" 
                    : "bg-white/20 backdrop-blur-sm hover:bg-brand-600"
                }`}>
                  {project.has360 ? (
                    <View size={18} className="text-white" />
                  ) : (
                    <ArrowUpRight size={18} className="text-white" />
                  )}
                </div>

                {/* Hover instruction for 360 */}
                {project.has360 && (
                  <div className="absolute bottom-20 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      Click to explore in 360°
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 360 Viewer Modal */}
      {selectedProject && selectedProject.panorama && (
        <Viewer360
          image={selectedProject.panorama}
          title={selectedProject.title}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Standard Lightbox for non-360 images */}
      {showLightbox && lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => {
              setShowLightbox(false);
              setLightboxImage(null);
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X size={20} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <h3 className="text-white font-heading text-xl font-bold mt-4 text-center">
              {lightboxImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
