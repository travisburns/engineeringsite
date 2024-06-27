'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Covid19Page() {
  return (
    <motion.div 
      className="text-white font-playfair"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold"
        variants={fadeInUp}
      >
        Covid-19
      </motion.h1>
      <div className="space-y-8">
        {[
          "With the current pandemic continuing to spread, it is imperative that building owners take necessary steps to improve the indoor air quality (IAQ) of their buildings, and do what they can to help limit the spread of contaminants via their buildings' HVAC systems. The HVAC system in a building plays a crucial role in the IAQ. As each building is unique, there are a wide range of options and approaches which can be taken to reduce the spread of pathogens. These can include airflow, ventilation, filtration, humidity, HVAC retrofit equipment and control strategies.",
          "R&W Engineering has over 40 years providing HVAC engineering services. In this critical time, the health of building occupants is first and foremost, and R&W can assist owners in assessing their building HVAC systems and provide concrete recommendations to reduce risk and improve IAQ. R&W understands that every building and HVAC system is unique, and the steps required to improve IAQ are unique as well. Let R&W assist you in giving your buildings a checkup and providing your clients peace of mind.",
          "If you are interested in these services for your facility, have questions or would like a proposal, please contact us."
        ].map((text, index) => (
          <motion.p key={index} variants={fadeInUp}>
            {text}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}