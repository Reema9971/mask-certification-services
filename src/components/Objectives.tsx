import { motion } from "motion/react";
import { CheckCircle2, Target, MessageSquare } from "lucide-react";

const objectives = [
  {
    title: "100% On-Time Response",
    description: "Committed to ensuring timely response with our services and active participation.",
    icon: CheckCircle2,
  },
  {
    title: "100% Client Satisfaction",
    description: "Dedicated to total client satisfaction through our expert technical team.",
    icon: Target,
  },
  {
    title: "Query Resolution",
    description: "Proactive approach to resolve client queries and close NC's points efficiently.",
    icon: MessageSquare,
  },
];

export default function Objectives() {
  return (
    <section className="py-32 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-secondary/20 rounded-full">
                <obj.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">{obj.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
