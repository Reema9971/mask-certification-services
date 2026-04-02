import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y: y1, scale }}
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern corporate building"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" 
          />
          <motion.div 
            style={{ y: y1 }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px] animate-pulse delay-700" 
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <Particle key={i} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="max-w-7xl mx-auto px-8 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary text-xs font-black uppercase tracking-[0.2em] rounded-full mb-8"
          >
            <ShieldCheck size={14} />
            Established April 2015
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-white mb-8 max-w-5xl">
            Excellence Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-container to-secondary">
              Global Standards.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed font-medium">
            MASK System Certification & Services: Your strategic partner for ISO 9001, 14001, and 45001. We transform compliance into a competitive edge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="group px-10 py-5 bg-secondary text-primary font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-secondary/20 flex items-center gap-3 transition-all"
            >
              Explore Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Get Certified
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Particle({ index, scrollYProgress }: any) {
  const initialX = useRef(Math.random() * 100).current;
  const initialY = useRef(Math.random() * 100).current;
  const scrollFactor = useRef(Math.random() * 100 + 50).current;
  const y = useTransform(scrollYProgress, [0, 1], [0, -scrollFactor]);

  return (
    <motion.div
      initial={{ 
        x: initialX + "%", 
        y: initialY + "%",
        opacity: Math.random() * 0.3 + 0.1
      }}
      style={{
        y,
        width: Math.random() * 4 + 2 + "px",
        height: Math.random() * 4 + 2 + "px",
        backgroundColor: index % 2 === 0 ? "#EAB308" : "#FFFFFF",
        borderRadius: "50%",
        position: "absolute",
        filter: "blur(1px)"
      }}
      animate={{ 
        x: [initialX + "%", (initialX + (Math.random() * 2 - 1)) + "%"],
        rotate: [0, 360],
        transition: {
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
    />
  );
}
