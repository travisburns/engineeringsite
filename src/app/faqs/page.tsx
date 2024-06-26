import FaqsData from './FaqsData';
import FaqAccordion from './FaqAccordion';

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          {FaqsData.map((faq, index) => (
            <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}