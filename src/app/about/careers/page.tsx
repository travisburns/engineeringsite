'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CareersPage() {
  return (
    <motion.div
      className="text-white font-playfair"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.3 } }
      }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold"
        variants={fadeInUp}
      >
        Careers
      </motion.h1>
     
      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl mb-4 font-bold text-yellow-500">Benefits</h2>
        <p className="text-lg">
          The company offers a 401k plan with up to 6% match; vision, dental, and health packages for employees and their families;
          accrued paid vacation; eight flexible paid holidays per year (nine for U.S. Veterans); paid sick leave up to 2 weeks per year; Costco membership;
          flexible start/end times for workday; potential quarterly bonuses (based on overall company success); and hybrid work options available after 6-months.
          Work/life balance and professional growth is something we desire for all staff. Semi-regular company activities and events are put on to help foster positive
          and collaborative relationships among all staff both inside and outside the organization. Opportunities are provided for professional learning, growth, and cross-training
          in multiple engineering tasks with potential for advancement in a long-term engineering career, including shares in company ownership.
        </p>
      </motion.section>
      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl mb-4 font-bold text-yellow-500">General</h2>
        <p className="text-lg">
          R&amp;W is always interested in receiving applications from mechanical, electrical, and control engineers who have the desire to work in the challenging, rewarding, and professional work environment of R&amp;W.
          R&amp;W strives to hire individuals, both technical and support staff, who take pride in their work, and strive for not only individual success but also the success of the R&amp;W team. We stand by our commitment of &quot;Building Lasting Relationships&quot;
          with both our clients and our employees. R&amp;W offers a competitive salary and benefits package.
        </p>
      </motion.section>
      <motion.section variants={fadeInUp}>
        <h2 className="text-2xl mb-4 font-bold text-yellow-500">Resumes</h2>
        <p className="text-lg">
          Unsolicited resumes are welcome, please call the R&amp;W office to learn how to submit your resume for review. R&amp;W is a certified Equal Employment Opportunity Employer.
        </p>
      </motion.section>
    </motion.div>
  )
}