import { ShieldCheck, MapPin, Phone, Mail, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white mt-20 pt-32 pb-32 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="p-2.5 bg-secondary rounded-full shadow-lg group-hover:rotate-[360deg] transition-transform duration-1000">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">MASK SYSTEM</span>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.15em] mt-1">Certification & Services</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              MASK SYSTEM CERTIFICATION & SERVICES is a leading Indian organization for Management consultancy system certification services and technical training programs. Committed to excellence since 2015.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 text-secondary mb-2">
                <Award size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Registration Details</span>
              </div>
              <p className="text-[10px] text-white/80 font-medium leading-loose">
                UDYAM REG: <span className="text-secondary">UDYAM-HR-03-0077932</span><br />
                GSTIN: <span className="text-secondary">06DGBPM3933A1ZV</span>
              </p>
            </div>
          </div>
          {/* Contact Details Section - More Prominent */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-8 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-secondary/30" /> Contact Information
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Head Office</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    H-3624GF <br/>
                    Faridabad, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+919953305247" className="text-sm text-white/80 hover:text-secondary transition-colors font-medium">
                    +91 9953305247
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:masksystemcertification@gmail.com" className="text-sm text-white/80 hover:text-secondary transition-colors font-medium break-all">
                    masksystemcertification@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-8 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-secondary/30" /> Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Our Services", href: "/#services" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-secondary hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-8 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-secondary/30" /> Newsletter
            </h4>
            <p className="text-xs text-white/60 mb-6 leading-relaxed">Stay updated with the latest in international standards.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs outline-none focus:border-secondary transition-colors"
              />
              <button className="w-full bg-secondary text-primary py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">
            © 2024 MASK System Certification & Services. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] text-white/40 hover:text-secondary uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-white/40 hover:text-secondary uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
