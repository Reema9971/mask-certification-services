import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-32 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img
              className="rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-700 w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOdaGpqf18Pr6KBOC7M0poA2EJZ5QLPM4gSppMYBfjnRaLFaLvghC5D-No4Mb0zk1xge65wbfLvf9n_-p3RK3yfaNB1uFEZgmB2-nyBoU04a4N8dWm9FTX3weHCpwWW7_jLfDVWEE4ID_cbrpW2MuIR3Z-rUKLulkp8Nb6XZreMYvP1SKv85R2oHAH-3vIvaMrtRRTly5QLiAhSavHCt19athkmWXqpw76qfMZ88i9kUQuPZotsQs_KozsvyLa3HuE5vZwn6Mu5Uo"
              alt="Professional diverse team discussing strategy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 editorial-sidebar pl-12"
          >
            <span className="text-secondary font-bold tracking-[0.05em] uppercase text-sm mb-4 block">Who We Are</span>
            <h2 className="text-4xl font-bold text-primary mb-6">A Legacy of Trust & Integrity Since 2015</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              MASK System Certification & Services was founded in April 2015 on the principle that compliance should be a catalyst for growth, not a barrier. With over 10 years of experience, we serve as the silent authority, guiding enterprises through the nuances of international standardization.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              Our mission is to be a strong global player and a leading Indian organization for Management consultancy system certification services and technical training programs.
            </p>
            <div className="bg-surface-container p-6 rounded-lg border-l-4 border-secondary">
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Headquarters</p>
              <p className="text-on-surface text-sm leading-relaxed">
                H.NO.3624GF, Pocket-2, Sector-3,<br />
                Ballabhgarh, Faridabad-121004,<br />
                Haryana, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
