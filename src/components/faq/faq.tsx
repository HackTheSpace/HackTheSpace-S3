import { GoChevronDown } from "react-icons/go";
import Title from "../common/title";

const faqData = [
  {
    question: "How to register for the Hackathon ?",
    answer:
      "You can register by clicking the 'Register Now' button on our homepage. Follow the instructions to complete your registration.",
  },
  {
    question: "What is the team size ?",
    answer:
      "Teams can consist of 2 to 4 members. Individual participation is not allowed.",
  },
  {
    question: "Is there a registration fee ?",
    answer: "No, participation in the hackathon is completely free of charge.",
  },
  {
    question: "Can I participate remotely ?",
    answer:
      "Yes, this is a hybrid hackathon. You can participate either in-person or remotely.",
  },
  {
    question: "What are the prizes ?",
    answer:
      "We have a prize pool of over $10,000 including cash prizes, swags, and internship opportunities.",
  },
  {
    question: "Who can participate ?",
    answer:
      "The hackathon is open to all university students and recent graduates.",
  },
];

const Faq = () => {
  return (
    <div className="relative w-full flex flex-col min-h-screen max-h-screen bg-[url('/assets/graphs/globe.svg')] bg-center bg-contain bg-no-repeat items-center justify-center bg-transparent overflow-hidden my-20">
      <Title title="FAQs" />

      {/* FAQ Grid */}
      <div className="w-full flex justify-center mt-10 md:mt-20">
        <div className="z-10 w-full max-w-[90%] md:max-w-[70%] px-4 flex flex-wrap gap-x-20 gap-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="w-full md:w-[calc(50%-2.5rem)]">
              <div className="p-px rounded-lg bg-gradient-brand">
                <details className="group rounded-lg bg-white overflow-hidden transition-all duration-300 [&[open]_summary_svg]:rotate-180 font-poppins">
                  <summary className="flex items-center justify-between cursor-pointer p-1 px-2 md:p-2 md:px-4 list-none outline-none [&::-webkit-details-marker]:hidden">
                    <span className="text-md md:text-lg font-medium text-black/90 group-hover:text-black transition-colors">
                      {faq.question}
                    </span>

                    <span className="text-orange-400">
                      <GoChevronDown className="text-lg transform transition-transform duration-300" />
                    </span>
                  </summary>

                  <div className="px-4 md:px-6 pb-6 text-black/70 animate-in slide-in-from-top-2 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
