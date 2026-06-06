"use client";
import { GoChevronDown } from "react-icons/go";
import Title from "../common/title";
import Link from "next/link";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is HackTheSpace?",
    answer: (
      <>
        <span className="font-bold">HackTheSpace</span> is a high-intensity
        hackathon designed to bring together curious minds, builders, and
        innovators to ideate, build, and showcase solutions to real-world
        problems within a limited time frame.
      </>
    ),
  },
  {
    question: "When is HackTheSpace Season 3 happening?",
    answer: (
      <>
        <span className="font-bold">HackTheSpace</span> Season 3 will run for 24 hours, from{" "}9-10 October 2026.(The exact start and end timings will be shared closer to the event.)
      </>
    ),
  },
  {
    question: "Is HackTheSpace Season 3 online or offline?",
    answer: (
      <>
        <span className="font-bold">HackTheSpace </span> Season 3 will be
        conducted completely <span className="font-bold">offline </span>event. Participants are required to be physically present at the venue to take part in the hackathon.
      </>
    ),
  },
  {
    question: "Who can participate in HackTheSpace?",
    answer: (
      <>
        <span className="font-bold">HackTheSpace</span> is open to college
        students from all disciplines who are interested in technology,
        innovation, and problem-solving. <br /> Beginners, experienced
        developers, designers, product thinkers, and solo hackers are all
        welcome.
      </>
    ),
  },
  {
    question: "Is there any registration fee?",
    answer: (
      <>
        No. <span className="font-bold">HackTheSpace</span> is completely free
        to participate in.
      </>
    ),
  },
  {
    question: "How do I register for HackTheSpace Season 3?",
    answer: (
      <>
        Registrations will open soon. You will be able to register via the
        official website:{" "}
        <Link
          className="underline font-bold text-blue-500"
          href="https://hackthespace.co"
        >
          https://hackthespace.co
        </Link>
      </>
    ),
  },
  {
    question: "What is the registration deadline and shortlisting timeline?",
    answer: (
      <>
        Registration deadlines and shortlisting timelines will be announced once
        registrations go live. <br /> Shortlisted teams will be informed via
        email.
      </>
    ),
  },
  {
    question: "What is the team size? Is solo participation allowed?",
    answer: (
      <>
        Maximum team size: <span className="font-bold">4 members</span>
        <br /> Solo participation: <span className="font-bold">Allowed</span>
        <br /> You can participate either as an individual or as a team.
      </>
    ),
  },
  {
    question: "Will problem statements be provided?",
    answer: (
      <>
        <span className="font-bold">HackTheSpace</span> does not enforce fixed
        problem statements. Participants are free to build solutions in any
        domain or area of interest.
        <br />
        <br />
        However, select partners may introduce dedicated tracks, which can
        include:
        <ul className="list-disc pl-5 mt-2">
          <li>Specific problem statements, or</li>
          <li>Technologies, platforms, or APIs to build on</li>
        </ul>
        <br />
        Participation in sponsor tracks is optional, and teams may choose to
        build independently outside these tracks.
      </>
    ),
  },
  {
    question:
      "Are resumes, LinkedIn, GitHub, or social media profiles mandatory?",
    answer: (
      <>
        <ul className="list-disc pl-5">
          <li>
            LinkedIn profile: <span className="font-bold">Mandatory</span>
          </li>
          <li>
            GitHub profile: <span className="font-bold">Mandatory</span>
          </li>
          <li>X (formerly Twitter): <span className="font-bold">Mandatory</span></li>
          <li>
            Resume submission: <span className="italic">Optional</span>
          </li>
        </ul>
        <br />
        These details help us understand participants’ backgrounds, skill sets,
        and enable better visibility for projects and talent discovery.
        <br />
      </>
    ),
  },
  {
    question: "How will I know if my registration is successful?",
    answer: (
      <>
        Once you submit the registration form with all required details,
        <span className="">
          {" "}
          you will receive a confirmation email.
        </span>
        <br />
        Please double-check your details before submitting the form.
      </>
    ),
  },
  {
    question:
      "How will communication and announcements be handled during the hackathon?",
    answer: (
      <>
        All official announcements, updates, and support will be shared via{" "}
        <span className="font-bold">Email, Social Media announcements</span>{" "}
        and/or <span className="font-bold">Discord</span>. Participants are
        expected to stay active on the platform throughout the event to not miss
        any important information or updates.
      </>
    ),
  },
  {
    question: "What are the submission requirements?",
    answer: (
      <>
        Teams will be required to submit:
        <ul className="list-disc pl-5 mt-2 ">
          <li>A working prototype or proof of concept</li>
          <li>Source code (GitHub/GitLab/BitBucket repository)</li>
          <li>A short project description</li>
          <li>A demo video (duration to be announced)</li>
        </ul>
        <br />
        Detailed submission guidelines will be shared before the hacking period
        begins.
      </>
    ),
  },
  {
    question: "How will projects be evaluated?",
    answer: (
      <>
        Projects will be <span className="font-bold">judged</span> based on
        criteria such as:
        <ul className="list-disc pl-5 mt-2">
          <li>Innovation and originality</li>
          <li>Technical implementation</li>
          <li>Problem relevance and impact</li>
          <li>Clarity of presentation</li>
          <li>Completion within the hackathon timeframe</li>
        </ul>
        <br />
        Additional criteria may apply for sponsor-specific tracks.
      </>
    ),
  },
  {
    question: "Can we use pre-built code or existing projects?",
    answer: (
      <>
        Participants <span className="font-bold">may</span> use open-source
        libraries, frameworks, and APIs.
        <br />
        However, the <span className="font-bold">core idea</span> and{" "}
        <span className="font-bold">implementation</span> must be developed
        during the hackathon period.
        <br />
        <br />
        <span className="font-bold">
          Re-submitting previously built projects is not allowed
        </span>
        .
      </>
    ),
  },
  {
    question: "Where can I reach out for queries or support?",
    answer: (
      <>
        For any questions or issues whatsoever, you can contact us at:{" "}
        <a
          href="mailto:support@hackthesapce.co"
          className="text-blue-500 underline font-bold"
        >
          support@hackthesapce.co
        </a>
        <br />
        You can also reach out to the organizing team via{" "}
        <span className="font-bold">Discord</span> or{" "}
        <span className="font-bold">Social Media</span>.
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="relative w-full flex flex-col min-h-screen items-center justify-center bg-transparent overflow-hidden my-20">
      {/* Rotating Globe Background */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 w-full h-full z-0 bg-[url('/assets/graphs/globe.svg')] bg-center bg-contain bg-no-repeat pointer-events-none opacity-[0.35]"
      />

      <Title title="FAQs" />
      <p className="font-poppins text-sm max-w-7xl md:text-base lg:text-base text-gray-700 font-light leading-relaxed text-center">
        Got <span className="font-bold italic">questions?</span>{"  "} We've got <span className="font-bold italic">answers</span>. Check out our FAQs below for
        everything you need to know about registrations, teams, submissions, and
        more. <br /> <span className="italic">Still can't find what you're looking for?</span> Drop us a line at
        <Link href="mailto:support@hackthespace.co" className="text-blue-500 font-bold"> support@hackthespace.co</Link> and we'll get back to you.
      </p>

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
