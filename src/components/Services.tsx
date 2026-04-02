import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Leaf, 
  HardHat, 
  Zap, 
  Flame, 
  Plane, 
  Ban, 
  Target, 
  GraduationCap, 
  ClipboardCheck, 
  Siren, 
  Car, 
  Eye, 
  FileText, 
  FlaskConical, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../constants/services";

const categories = ["All", "ISO Certification", "Technical Training", "Safety & Operations"];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-surface overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-[0.05em] uppercase text-sm mb-4 block">Comprehensive Solutions</span>
            <h2 className="text-4xl font-bold text-primary">Our Services</h2>
            <p className="text-on-surface-variant mt-4">
              From international ISO standards to specialized technical training and visual management, we provide end-to-end certification and consultancy services.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-outline-variant/20 hover:bg-secondary hover:text-primary transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-outline-variant/20 hover:bg-secondary hover:text-primary transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-secondary text-primary shadow-lg shadow-secondary/20" 
                  : "bg-surface-container-lowest text-on-surface-variant hover:bg-secondary/10 border border-outline-variant/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="min-w-[320px] md:min-w-[380px] snap-start group p-10 bg-surface-container-lowest border-t-2 border-transparent hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
              >
                <div className="p-4 bg-secondary/5 rounded-lg inline-block mb-8 group-hover:bg-secondary/10 transition-colors self-start">
                  <service.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-20 overflow-hidden line-clamp-3">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-secondary text-[10px] font-black uppercase tracking-widest">{service.label}</span>
                    <div className="w-8 h-[1px] bg-outline-variant/30 group-hover:w-12 group-hover:bg-secondary transition-all" />
                  </div>
                  
                  <Link 
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-primary font-bold text-sm group/link hover:text-secondary transition-colors"
                  >
                    Learn More 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
        </div>
      </div>
    </section>
  );
}
