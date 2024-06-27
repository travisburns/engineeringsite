'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function OperationsPage() {
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
        Operations
      </motion.h1>
      <div className="space-y-4">
        {[
          "R&W's operations, services, and staff are still running smoothly despite not being in the main office during the shelter in place order.",
          "We are still eager to serve your needs and have much gratitude for our staff that have remained productive from a remote environment.",
          "R&W's leadership is focused on client needs, excellent communication, information processing, health and safety for all, and prioritizing flexibility and accommodations for unique staff situations.",
          "In order to safeguard our staff and clients and minimize exposure and transmission of COVID-19, while continuing to serve the needs of our clients, R&W has developed a field procedure prior to mobilizing to an off-site visit.",
          "Health and safety measures for all parties involved in R&W conducted business, is our main priority."
        ].map((text, index) => (
          <motion.p key={index} variants={fadeInUp}>
            {text}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}