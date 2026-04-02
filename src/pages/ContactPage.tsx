import { motion } from "motion/react";
import { Phone, Mail, PhoneCall, MessageSquare, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      <main className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-black text-primary tracking-tighter mb-4">Get in Touch</h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Have questions about certifications or technical training? Our experts are here to help your organization achieve excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant/10 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-primary mb-8">Contact Details</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Head Office</p>
                      <p className="text-lg text-on-surface font-medium leading-relaxed">
                        H.NO.3624GF, Pocket-2, Sector-3,<br />
                        Ballabhgarh, Faridabad-121004,<br />
                        Haryana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Direct Line</p>
                      <a href="tel:+919953305247" className="text-lg text-on-surface font-medium hover:text-secondary transition-colors">
                        +91 9953305247
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Email Inquiry</p>
                      <a href="mailto:masksystemcertification@gmail.com" className="text-lg text-on-surface font-medium hover:text-secondary transition-colors break-all">
                        masksystemcertification@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="tel:+919953305247"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg transition-all"
                  >
                    <PhoneCall size={18} />
                    Call Us Now
                  </motion.a>
                  <motion.a 
                    href="https://wa.me/919953305247"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg transition-all"
                  >
                    <MessageSquare size={18} />
                    WhatsApp Us
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant/10 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-primary mb-8">Send a Message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Full Name</label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Email Address</label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Required Standard</label>
                  <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none appearance-none">
                    <option>ISO 9001: Quality</option>
                    <option>ISO 14001: Environment</option>
                    <option>ISO 45001: Safety</option>
                    <option>ISO 50001: Energy</option>
                    <option>ZED Certification</option>
                    <option>Technical Training</option>
                    <option>General Consultancy</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">Message</label>
                  <textarea
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none resize-none"
                    placeholder="Describe your organizational goals and compliance needs..."
                    rows={6}
                  />
                </div>
                
                <motion.button
                  whileHover={{ opacity: 0.9, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-secondary text-primary font-black uppercase tracking-widest rounded-xl shadow-lg shadow-secondary/20 transition-all"
                  type="submit"
                >
                  Send Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
