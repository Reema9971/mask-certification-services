import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShieldCheck, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../constants/services";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "#", hasDropdown: true, hasChevron: true },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/"
          ? "bg-primary/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center gap-4 group"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 opacity-20 animate-pulse" />
            <div className="relative p-2.5 bg-secondary rounded-full shadow-lg group-hover:rotate-[360deg] transition-transform duration-1000">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">MASK SYSTEM</span>
            <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.15em] mt-1">Certification & Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, i) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setShowServices(true)}
              onMouseLeave={() => link.hasDropdown && setShowServices(false)}
            >
              {link.hasDropdown || link.hasChevron ? (
                <button
                  className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-secondary transition-colors relative group"
                >
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${link.hasDropdown && showServices ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                </button>
              ) : link.to ? (
                <Link
                  to={link.to}
                  className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-secondary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-secondary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                </a>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-4 w-72 bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden py-2 z-[60]"
                    >
                      <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors border-b border-gray-50 last:border-0"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-[73px] bg-primary/98 backdrop-blur-xl border-t border-white/10 overflow-y-auto z-40"
          >
            <div className="flex flex-col p-8 space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div 
                  key={link.name} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                  className="flex flex-col space-y-4"
                >
                  {link.hasDropdown || link.hasChevron ? (
                    <>
                      <button
                        onClick={() => link.hasDropdown && setShowServices(!showServices)}
                        className="flex items-center justify-between text-2xl font-black uppercase tracking-tighter text-white hover:text-secondary transition-colors"
                      >
                        {link.name}
                        <ChevronDown size={24} className={`transition-transform duration-500 ${link.hasDropdown && showServices ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {showServices && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="grid grid-cols-1 gap-4 pl-6 border-l-2 border-secondary/30 overflow-hidden"
                          >
                            {services.map((service, sIdx) => (
                              <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: sIdx * 0.05 }}
                              >
                                <Link
                                  to={`/services/${service.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-1 text-lg font-medium text-white/60 hover:text-secondary transition-colors"
                                >
                                  {service.title}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black uppercase tracking-tighter text-white hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black uppercase tracking-tighter text-white hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-5 bg-secondary text-primary text-center font-black uppercase tracking-widest rounded-xl shadow-xl shadow-secondary/20"
                >
                  Get Certified Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
