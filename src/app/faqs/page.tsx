import FaqsData from './FaqsData';
import FaqAccordion from './FaqAccordion';

export default function FaqsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        {FaqsData.map((faq, index) => (
          <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}