

// import { motion } from 'motion/react';
// import {
//   TrendingUp,
//   Building2,
//   HeartHandshake,
//   Network,
// } from 'lucide-react';

// import { SectionHeading } from '../ui/SectionHeading';

// const objectives = [
//   {
//     id: '01',
//     title: 'Drive Inclusive Growth',
//     description:
//       'To foster interdisciplinary research and innovation contributing to Viksit Bharat through inclusive growth strategies.',
//     icon: TrendingUp,
//     accent: 'from-[#1F3589] via-[#27469f] to-[#101D4B]',
//   },
//   {
//     id: '02',
//     title: 'Strengthen Institutions',
//     description:
//       'To enhance institutional capacity through technology adoption, innovation frameworks, and empirical insights.',
//     icon: Building2,
//     accent: 'from-[#E5A82B] via-[#F2C45D] to-[#B8860B]',
//   },
//   {
//     id: '03',
//     title: 'Enable Responsible Leadership',
//     description:
//       'To develop leadership capabilities aligned with ESG principles and sustainable nation-building objectives.',
//     icon: HeartHandshake,
//     accent: 'from-[#1F3589] via-[#27469f] to-[#101D4B]',
//   },
//   {
//     id: '04',
//     title: 'Welcome Interdisciplinary Research',
//     description:
//       'To encourage research contributions across management disciplines advancing India’s progress and development.',
//     icon: Network,
//     accent: 'from-[#E5A82B] via-[#F2C45D] to-[#B8860B]',
//   },
// ];

// function ObjectiveCard({ objective, index }) {
//   const Icon = objective.icon;

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.45,
//         delay: index * 0.08,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{ y: -4 }}
//       className="
//         group relative flex h-full flex-col
//         overflow-hidden rounded-xl
//         border border-[#E8E1D5]
//         bg-[#FFFCF7]/90
//         p-4 sm:p-5
//         shadow-[0_4px_18px_rgba(31,53,137,0.04)]
//         transition-all duration-300
//         hover:border-[#D9C69E]
//         hover:shadow-[0_10px_28px_rgba(31,53,137,0.08)]
//       "
//     >
//       {/* Header */}
//       <div className="mb-4 flex items-center justify-between">
//         <div
//           className={`
//             flex h-9 w-9 items-center justify-center
//             rounded-lg bg-gradient-to-br ${objective.accent}
//             text-white shadow-sm
//             transition-transform duration-300
//             group-hover:scale-105
//           `}
//         >
//           <Icon size={19} strokeWidth={1.8} />
//         </div>

//         <span
//           className="
//             font-serif text-3xl font-bold
//             tracking-tight text-[#1F3589]/10
//             transition-colors duration-300
//             group-hover:text-[#E5A82B]/30
//           "
//           aria-hidden="true"
//         >
//           {objective.id}
//         </span>
//       </div>

//       {/* Title */}
//       <h3
//         className="
//           mb-2 font-serif text-lg font-bold
//           leading-snug tracking-tight text-[#1F3589]
//           sm:text-xl
//         "
//         style={{ fontFamily: 'var(--font-serif)' }}
//       >
//         {objective.title}
//       </h3>

//       {/* Divider */}
//       <div className="mb-3 flex items-center gap-2" aria-hidden="true">
//         <span className="h-[3px] w-7 rounded-full bg-[#E5A82B]" />
//         <span className="h-px flex-1 bg-[#1F3589]/10" />
//       </div>

//       {/* Description */}
//       <p className="flex-1 text-xs leading-6 text-[#626875] sm:text-sm">
//         {objective.description}
//       </p>

//       {/* Footer */}
//       <div className="mt-4 border-t border-[#1F3589]/10 pt-3">
//         <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#1F3589]/50">
//           <span className="h-1.5 w-1.5 rounded-full bg-[#E5A82B]" />
//           Objective {objective.id}
//         </span>
//       </div>
//     </motion.article>
//   );
// }

// export function Objectives() {
//   return (
//     <section
//       id="objectives"
//       aria-labelledby="objectives-heading"
//       className="
//         relative isolate overflow-hidden
//         bg-gradient-to-br
//         from-[#FFFCF7]
//         via-[#F9F5EC]
//         to-[#F3EBDD]
//         px-4 py-10
//         sm:px-6 sm:py-12
//         lg:px-8 lg:py-14
//       "
//     >
//       {/* Subtle background fade */}
//       <div
//         className="
//           pointer-events-none absolute inset-x-0 top-0
//           h-24 bg-gradient-to-b from-white/40 to-transparent
//         "
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 lg:gap-10">
//         {/* Section heading */}
//         <div className="max-w-3xl text-center">
//           <SectionHeading
//             title="What we aim to achieve"
//             subtitle="Four guiding objectives shaping the conference agenda."
//           />
//         </div>

//         {/* Objective cards */}
//         <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
//           {objectives.map((objective, index) => (
//             <ObjectiveCard
//               key={objective.id}
//               objective={objective}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Objectives;


import { motion } from 'motion/react';
import {
  TrendingUp,
  Building2,
  HeartHandshake,
  Network,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

const objectives = [
  {
    id: '01',
    title: 'Drive Inclusive Growth',
    description:
      'To foster interdisciplinary research and innovation contributing to Viksit Bharat through inclusive growth strategies.',
    icon: TrendingUp,
    accent: 'from-[#1F3589] via-[#27469f] to-[#101D4B]',
  },
  {
    id: '02',
    title: 'Strengthen Institutions',
    description:
      'To enhance institutional capacity through technology adoption, innovation frameworks, and empirical insights.',
    icon: Building2,
    accent: 'from-[#E5A82B] via-[#F2C45D] to-[#B8860B]',
  },
  {
    id: '03',
    title: 'Enable Responsible Leadership',
    description:
      'To develop leadership capabilities aligned with ESG principles and sustainable nation-building objectives.',
    icon: HeartHandshake,
    accent: 'from-[#1F3589] via-[#27469f] to-[#101D4B]',
  },
  {
    id: '04',
    title: 'Welcome Interdisciplinary Research',
    description:
      'To encourage research contributions across management disciplines advancing India’s progress and development.',
    icon: Network,
    accent: 'from-[#E5A82B] via-[#F2C45D] to-[#B8860B]',
  },
];

function ObjectiveCard({ objective, index }) {
  const Icon = objective.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-2xl
        border border-[#E8E1D5]
        bg-[#FFFCF7]/90
        p-6 sm:p-7 lg:p-8
        shadow-[0_4px_18px_rgba(31,53,137,0.04)]
        transition-all duration-300
        hover:border-[#D9C69E]
        hover:shadow-[0_12px_32px_rgba(31,53,137,0.09)]
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div
          className={`
            flex h-12 w-12 items-center justify-center
            rounded-xl bg-gradient-to-br ${objective.accent}
            text-white shadow-md
            transition-transform duration-300
            group-hover:scale-110
          `}
        >
          <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <span
          className="
            font-serif text-4xl font-bold
            tracking-tight text-[#1F3589]/10
            transition-colors duration-300
            group-hover:text-[#E5A82B]/30
            sm:text-5xl
          "
          aria-hidden="true"
        >
          {objective.id}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          mb-3 font-serif text-xl font-bold
          leading-snug tracking-tight text-[#1F3589]
          sm:text-2xl
        "
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {objective.title}
      </h3>

      {/* Divider */}
      <div
        className="mb-4 flex items-center gap-3"
        aria-hidden="true"
      >
        <span className="h-[3px] w-9 rounded-full bg-[#E5A82B]" />
        <span className="h-px flex-1 bg-[#1F3589]/10" />
      </div>

      {/* Description */}
      <p className="flex-1 text-sm leading-7 text-[#626875] sm:text-base">
        {objective.description}
      </p>

      {/* Footer */}
      <div className="mt-6 border-t border-[#1F3589]/10 pt-4">
        <span
          className="
            inline-flex items-center gap-2
            text-[10px] font-semibold uppercase
            tracking-[0.15em] text-[#1F3589]/50
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#E5A82B]" />
          Objective {objective.id}
        </span>
      </div>
    </motion.article>
  );
}

export function Objectives() {
  return (
    <section
      id="objectives"
      aria-labelledby="objectives-heading"
      className="
        relative isolate overflow-hidden
        bg-gradient-to-br
        from-[#FFFCF7]
        via-[#F9F5EC]
        to-[#F3EBDD]
        px-4 py-14
        sm:px-6 sm:py-16
        md:px-8 md:py-20
        lg:px-10 xl:px-12
      "
    >
      {/* Background Decorations */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-32 bg-gradient-to-b
          from-white/40 to-transparent
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute
          -left-40 top-20 h-96 w-96
          rounded-full bg-[#1F3589]/[0.05] blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-0 h-96 w-96
          rounded-full bg-[#E5A82B]/[0.08] blur-3xl
        "
        aria-hidden="true"
      />

      {/* Main Container */}
      <div
        className="
          relative z-10 mx-auto flex w-full
          max-w-[1440px] flex-col items-center
          gap-10 px-2 sm:px-4
          lg:gap-12 lg:px-6 xl:px-8
        "
      >
        {/* Section Heading */}
        <div className="w-full max-w-3xl text-center">
          <SectionHeading
            title="What we aim to achieve"
            subtitle="Four guiding objectives shaping the conference agenda."
          />
        </div>

        {/* Objective Cards */}
        <div
          className="
            grid w-full grid-cols-1
            gap-5 sm:grid-cols-2
            lg:gap-7 xl:gap-8
          "
        >
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={objective.id}
              objective={objective}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Objectives;
