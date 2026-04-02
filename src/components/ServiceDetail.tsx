import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
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
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";

const serviceDetails = {
  "iso-9001-2015": {
    title: "ISO 9001:2015",
    subtitle: "Quality Management Systems (QMS)",
    description: "ISO 9001 is the international standard that specifies requirements for a quality management system (QMS). Organizations use the standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements.",
    icon: CheckCircle2,
    benefits: [
      "Improvement of your customer satisfaction",
      "Better process integration",
      "Improvement of your evidence for decision making",
      "Create a culture of continual improvement",
      "Engagement of your people"
    ],
    useCases: [
      "Manufacturing units seeking global export opportunities",
      "Service providers aiming for operational excellence",
      "Government contractors requiring certified quality standards"
    ],
    process: [
      "Gap Analysis",
      "Documentation Development",
      "Implementation & Training",
      "Internal Audit",
      "Certification Audit"
    ]
  },
  "iso-14001-2015": {
    title: "ISO 14001:2015",
    subtitle: "Environmental Management Systems (EMS)",
    description: "ISO 14001 is the international standard that specifies requirements for an effective environmental management system (EMS). It provides a framework that an organization can follow, rather than establishing environmental performance requirements.",
    icon: Leaf,
    benefits: [
      "Reduced waste management costs",
      "Savings in consumption of energy and materials",
      "Lower distribution costs",
      "Improved corporate image among regulators, customers and the public"
    ],
    useCases: [
      "Chemical and processing industries",
      "Construction firms managing environmental impact",
      "Waste management and recycling facilities"
    ],
    process: [
      "Environmental Aspect Identification",
      "Legal Compliance Review",
      "EMS Documentation",
      "Operational Controls",
      "Performance Evaluation"
    ]
  },
  "iso-45001-2018": {
    title: "ISO 45001:2018",
    subtitle: "Occupational Health and Safety (OH&S)",
    description: "ISO 45001 is an international standard that specifies requirements for an occupational health and safety (OH&S) management system, and gives guidance for its use, to enable organizations to provide safe and healthy workplaces.",
    icon: HardHat,
    benefits: [
      "Reduced overall costs of incidents",
      "Reduced downtime and the costs of disruption to operations",
      "Reduced cost of insurance premiums",
      "Reduced absenteeism and employee turnover rates"
    ],
    useCases: [
      "High-risk manufacturing plants",
      "Construction and infrastructure projects",
      "Logistics and warehousing operations"
    ],
    process: [
      "Hazard Identification",
      "Risk Assessment",
      "OH&S Policy Development",
      "Emergency Preparedness",
      "Safety Performance Monitoring"
    ]
  },
  "iso-50001-2018": {
    title: "ISO 50001:2018",
    subtitle: "Energy Management Systems (EnMS)",
    description: "ISO 50001 is the international standard for energy management systems. It provides organizations with a recognized framework for optimizing energy efficiency.",
    icon: Zap,
    benefits: [
      "Reduced energy costs",
      "Improved energy performance",
      "Reduced carbon footprint",
      "Enhanced energy security"
    ],
    useCases: [
      "Energy-intensive manufacturing",
      "Commercial building management",
      "Data centers and IT infrastructure"
    ],
    process: [
      "Energy Review",
      "Energy Baseline Establishment",
      "EnMS Documentation",
      "Energy Performance Indicators",
      "Energy Audit"
    ]
  },
  "iso-3834-2021": {
    title: "ISO 3834:2021",
    subtitle: "Quality Requirements for Fusion Welding",
    description: "ISO 3834 defines quality requirements for fusion welding of metallic materials both in workshops and at field installation sites.",
    icon: Flame,
    benefits: [
      "Demonstrated technical competence",
      "Reduced rework and repair costs",
      "Compliance with international welding standards",
      "Enhanced customer confidence in welded products"
    ],
    useCases: [
      "Pressure vessel manufacturing",
      "Structural steel fabrication",
      "Automotive and aerospace component welding"
    ],
    process: [
      "Technical Review",
      "Welding Personnel Qualification",
      "Equipment Maintenance Check",
      "Welding Procedure Qualification",
      "Inspection & Testing"
    ]
  },
  "as9120b-aerospace": {
    title: "AS9120B Aerospace",
    subtitle: "Quality Management for Aviation Distributors",
    description: "AS9120B is the standard for organizations that procure parts, materials, and assemblies and sell these products to a customer in the aviation, space, and defense industries.",
    icon: Plane,
    benefits: [
      "Access to global aerospace markets",
      "Improved supply chain management",
      "Reduced risk of counterfeit parts",
      "Enhanced traceability and record-keeping"
    ],
    useCases: [
      "Aviation parts distributors",
      "Aerospace material suppliers",
      "Defense equipment stockists"
    ],
    process: [
      "Aerospace Gap Analysis",
      "Traceability System Setup",
      "Counterfeit Part Mitigation",
      "AS9120B Documentation",
      "Aerospace Specific Audit"
    ]
  },
  "rohs-certification": {
    title: "RoHS Certification",
    subtitle: "Restriction of Hazardous Substances",
    description: "RoHS certification ensures that electrical and electronic equipment does not contain restricted hazardous substances above the allowed limits.",
    icon: Ban,
    benefits: [
      "Compliance with international environmental laws",
      "Access to EU and other restricted markets",
      "Reduced environmental impact of electronic waste",
      "Enhanced brand reputation for safety"
    ],
    useCases: [
      "Electronics manufacturers",
      "Electrical appliance producers",
      "Component suppliers for global brands"
    ],
    process: [
      "Material Composition Review",
      "Laboratory Testing Coordination",
      "RoHS Documentation",
      "Compliance Declaration",
      "Surveillance Audits"
    ]
  },
  "zed-certification": {
    title: "ZED Certification",
    subtitle: "Zero Defect Zero Effect",
    description: "ZED is an integrated and holistic certification system that accounts for quality, productivity, energy efficiency, pollution mitigation, and financial status.",
    icon: Target,
    benefits: [
      "Government incentives and subsidies",
      "Improved manufacturing efficiency",
      "Reduced environmental footprint",
      "Enhanced competitiveness for MSMEs"
    ],
    useCases: [
      "Indian MSMEs seeking growth",
      "Manufacturers aiming for sustainable production",
      "Suppliers to major OEMs"
    ],
    process: [
      "ZED Registration",
      "Desktop Assessment",
      "Site Assessment",
      "ZED Rating Award",
      "Continuous Improvement"
    ]
  },
  "technical-training": {
    title: "Technical Training",
    subtitle: "Operational Excellence Programs",
    description: "We provide specialized training in core industrial methodologies like 5'S, 4M, Kaizen, Poka-Yoke, and 7 QC Tools to drive organizational efficiency.",
    icon: GraduationCap,
    benefits: [
      "Enhanced employee skill sets",
      "Reduced waste and operational costs",
      "Improved product quality",
      "Cultivation of a continuous improvement mindset"
    ],
    useCases: [
      "Shop floor workers and supervisors",
      "Quality control teams",
      "Management seeking lean implementation"
    ],
    process: [
      "Training Needs Analysis",
      "Customized Module Design",
      "Interactive Workshop Delivery",
      "Post-Training Assessment",
      "Implementation Support"
    ]
  },
  "wpqr-ttr": {
    title: "WPQR & TTR",
    subtitle: "Welding Procedure & Technical Records",
    description: "Welding Procedure Qualification Record (WPQR) and Technical Training Report (TTR) services ensure that your technical processes are verified and documented.",
    icon: ClipboardCheck,
    benefits: [
      "Legal and technical compliance",
      "Verified welding procedures",
      "Documented technical competence",
      "Reduced liability risks"
    ],
    useCases: [
      "Heavy engineering firms",
      "Oil and gas pipeline contractors",
      "Boiler and pressure vessel manufacturers"
    ],
    process: [
      "Procedure Review",
      "Witnessing of Test Welds",
      "Laboratory Testing of Samples",
      "WPQR Documentation",
      "TTR Issuance"
    ]
  },
  "mock-drill-operations": {
    title: "Mock-Drill Operations",
    subtitle: "Emergency Preparedness & Safety",
    description: "We conduct realistic mock-drills for fire, chemical spills, and other emergencies to ensure your team is ready for any crisis.",
    icon: Siren,
    benefits: [
      "Enhanced emergency response time",
      "Identification of safety equipment gaps",
      "Compliance with safety regulations",
      "Increased employee safety awareness"
    ],
    useCases: [
      "Industrial plants and factories",
      "Commercial high-rise buildings",
      "Warehouses handling hazardous materials"
    ],
    process: [
      "Scenario Planning",
      "Drill Execution",
      "Response Evaluation",
      "Gap Identification",
      "Corrective Action Plan"
    ]
  },
  "mace-implementation": {
    title: "MACE Implementation",
    subtitle: "Maruti Center for Excellence Standards",
    description: "Implementation of MACE systems designed to meet the high-quality standards required for the automotive supply chain.",
    icon: Car,
    benefits: [
      "Alignment with automotive industry leaders",
      "Improved production efficiency",
      "Enhanced quality control measures",
      "Better supplier rating for Maruti Suzuki"
    ],
    useCases: [
      "Automotive component manufacturers",
      "Tier 1 and Tier 2 suppliers",
      "Engineering firms seeking automotive excellence"
    ],
    process: [
      "MACE Standard Review",
      "Shop Floor Audit",
      "System Implementation",
      "Performance Monitoring",
      "Final Assessment"
    ]
  },
  "visual-management": {
    title: "Visual Management",
    subtitle: "Branding & Workplace Organization",
    description: "Creation of visual cues, name plates, posters, and banners to improve workplace organization and safety communication.",
    icon: Eye,
    benefits: [
      "Improved workplace safety through clear signage",
      "Enhanced organizational aesthetics",
      "Better information flow on the shop floor",
      "Compliance with visual management standards"
    ],
    useCases: [
      "New factory setups",
      "Facilities undergoing 5S implementation",
      "Public spaces requiring safety signage"
    ],
    process: [
      "Site Survey",
      "Design & Layout Planning",
      "Material Selection",
      "Production & Installation",
      "Maintenance Review"
    ]
  },
  "documentation": {
    title: "Documentation",
    subtitle: "Process Tracking & Records",
    description: "Development of comprehensive process books, identification tags, and slogans tailored to your specific operational needs.",
    icon: FileText,
    benefits: [
      "Improved traceability and accountability",
      "Standardization of process records",
      "Enhanced employee motivation through slogans",
      "Ready-to-audit documentation status"
    ],
    useCases: [
      "Complex manufacturing processes",
      "Inventory and warehouse management",
      "Quality control departments"
    ],
    process: [
      "Process Mapping",
      "Drafting Documentation",
      "Review & Approval",
      "Distribution & Training",
      "Periodic Review"
    ]
  },
  "material-testing": {
    title: "Material Testing",
    subtitle: "Third-Party Quality Assurance",
    description: "Facilitation of material testing through accredited laboratories to verify the chemical and physical properties of your materials.",
    icon: FlaskConical,
    benefits: [
      "Independent verification of material quality",
      "Compliance with material specifications",
      "Reduced risk of material failure",
      "Enhanced customer trust in product durability"
    ],
    useCases: [
      "Raw material procurement",
      "Finished product quality checks",
      "Failure analysis and investigation"
    ],
    process: [
      "Sample Collection",
      "Lab Selection (Accredited)",
      "Testing Coordination",
      "Result Analysis",
      "Certification Issuance"
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[id as keyof typeof serviceDetails];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface">
        <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
        <Link to="/" className="text-secondary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      <main className="pt-32 pb-32">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="p-5 bg-secondary/10 rounded-2xl">
                <service.icon className="w-12 h-12 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-2">{service.title}</h1>
                <p className="text-xl text-secondary font-bold uppercase tracking-widest">{service.subtitle}</p>
              </div>
            </div>

            <div className="prose prose-xl max-w-none text-on-surface-variant leading-relaxed mb-16">
              <p className="text-xl md:text-2xl font-medium text-primary/80">{service.description}</p>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-primary mb-10 flex items-center gap-3">
                <TrendingUp className="text-secondary" /> Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <span className="text-on-surface-variant font-medium text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Use Cases Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-primary mb-10 flex items-center gap-3">
                <ShieldCheck className="text-secondary" /> Typical Use Cases
              </h2>
              <div className="space-y-4">
                {service.useCases.map((useCase, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span className="text-xl text-on-surface font-medium">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-outline-variant/20 text-center">
              <Link 
                to="/#services" 
                className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all text-lg"
              >
                <ArrowLeft size={24} /> View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
