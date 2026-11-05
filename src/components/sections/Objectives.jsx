// /**
//  * Objectives.jsx – Conference objectives as premium numbered cards
//  * plus a "Join Us" callout. Placed right after the Conference Pillars section.
//  */

// import { motion } from 'motion/react';
// import {
//   TrendingUp,
//   Building2,
//   HeartHandshake,
//   Network,
//   ArrowRight,
//   Sparkles,
// } from 'lucide-react';

// import { SectionHeading } from '../ui/SectionHeading';

// const objectives = [
//   {
//     id: '01',
//     title: 'Drive Inclusive Growth',
//     description:
//       'To foster interdisciplinary research and innovation contributing to Viksit Bharat through inclusive growth strategies.',
//     icon: TrendingUp,
//     accent: 'from-navy to-[#27469f]',
//   },
//   {
//     id: '02',
//     title: 'Strengthen Institutions',
//     description:
//       'To enhance institutional capacity through technology adoption, innovation frameworks, and empirical insights.',
//     icon: Building2,
//     accent: 'from-gold to-[#F2C45D]',
//   },
//   {
//     id: '03',
//     title: 'Enable Responsible Leadership',
//     description:
//       'To develop leadership capabilities aligned with ESG principles and sustainable nation-building objectives.',
//     icon: HeartHandshake,
//     accent: 'from-navy to-[#27469f]',
//   },
//   {
//     id: '04',
//     title: 'Welcome Interdisciplinary Research',
//     description:
//       'To encourage research contributions across management disciplines advancing India\u2019s progress and development.',
//     icon: Network,
//     accent: 'from-gold to-[#F2C45D]',
//   },
// ];

// function ObjectiveCard({ objective, index }) {
//   const Icon = objective.icon;

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 45, scale: 0.96 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.65,
//         delay: index * 0.12,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{ y: -12 }}
//       className="
//         group relative flex h-full flex-col
//         overflow-hidden rounded-[2rem]
//         bg-gradient-to-b from-white to-[#FAF6EE]
//         p-[1.5px]
//         shadow-[0_18px_50px_rgba(31,53,137,0.08)]
//         transition-all duration-500
//         hover:shadow-[0_32px_80px_rgba(31,53,137,0.18)]
//       "
//     >
//       {/* Animated gradient border frame */}
//       <div
//         className="
//           absolute inset-0 rounded-[2rem]
//           bg-gradient-to-br from-navy/25 via-gold/50 to-navy/25
//           opacity-60 transition-opacity duration-500
//           group-hover:opacity-100
//         "
//         aria-hidden="true"
//       />

//       {/* Card inner surface */}
//       <div className="relative flex h-full flex-col rounded-[calc(2rem-1.5px)] bg-white p-7 sm:p-8">
//         {/* Halo glow on hover */}
//         <div
//           className="
//             pointer-events-none absolute -top-24 -right-20 h-64 w-64
//             rounded-full bg-gold/[0.18] blur-3xl
//             opacity-0 transition-opacity duration-700 group-hover:opacity-100
//           "
//           aria-hidden="true"
//         />

//         {/* Top row: icon + watermark number */}
//         <div className="relative flex items-start justify-between">
//           <div
//             className={`
//               relative flex h-16 w-16 items-center justify-center
//               rounded-2xl
//               bg-gradient-to-br ${objective.accent}
//               text-white shadow-lg
//               transition-all duration-500
//               group-hover:rotate-6 group-hover:scale-105
//             `}
//           >
//             {/* Inner ring on icon */}
//             <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25" />
//             <Icon size={28} strokeWidth={1.8} />
//           </div>

//           <span
//             className="
//               pointer-events-none select-none
//               font-serif text-6xl font-black leading-none
//               bg-gradient-to-br from-navy/15 to-gold/25
//               bg-clip-text text-transparent
//               transition-all duration-500
//               group-hover:from-gold/60 group-hover:to-[#F2C45D]
//             "
//             aria-hidden="true"
//           >
//             {objective.id}
//           </span>
//         </div>

//         <h3
//           className="mb-3 mt-7 font-serif text-[1.35rem] font-bold leading-snug tracking-tight text-navy"
//           style={{ fontFamily: 'var(--font-serif)' }}
//         >
//           {objective.title}
//         </h3>

//         <div
//           className="mb-4 flex items-center gap-2"
//           aria-hidden="true"
//         >
//           <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-gold to-[#F2C45D]" />
//           <span className="h-px flex-1 bg-navy/10" />
//         </div>

//         <p className="text-sm leading-7 text-slate-600">
//           {objective.description}
//         </p>

//         <div className="mt-auto pt-7">
//           <span
//             className="
//               inline-flex items-center gap-2.5
//               text-[11px] font-bold uppercase tracking-widest
//               text-navy/50
//               transition-colors duration-500 group-hover:text-gold
//             "
//           >
//             <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(196,158,62,0.8)]" />
//             Objective {objective.id}
//           </span>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export function Objectives() {
//   return (
//     <section
//       id="objectives"
//       aria-labelledby="objectives-heading"
//       className="relative isolate overflow-hidden px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
//       style={{ background: 'var(--color-grey-blue)' }}
//     >
//       {/* Ambient background decoration */}
//       <div
//         className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-navy/[0.04] blur-3xl"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/[0.08] blur-3xl"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto flex max-w-[1500px] flex-col items-center gap-16 lg:gap-20">
//         {/* Section heading */}
//         <div className="max-w-3xl">
//           <SectionHeading
//             eyebrow="Conference Objectives"
//             title="What we aim to achieve"
//             subtitle="Four guiding objectives shaping the conference agenda."
//           />
//         </div>

//         {/* Objective cards */}
//         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
//           {objectives.map((objective, index) => (
//             <ObjectiveCard
//               key={objective.id}
//               objective={objective}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Join Us callout */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="
//             relative w-full overflow-hidden rounded-[2.5rem]
//             border border-gold/30
//             bg-gradient-to-br from-white via-cream to-[#FBF1DA]
//             p-10 sm:p-14 lg:p-16
//             shadow-[0_25px_70px_rgba(196,158,62,0.18)]
//           "
//         >
//           {/* Decorative rings */}
//           <div
//             className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[30px] border-gold/10"
//             aria-hidden="true"
//           />
//           <div
//             className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-gold/[0.09] blur-2xl"
//             aria-hidden="true"
//           />

//           <div className="relative flex flex-col items-center gap-6 text-center">
//             <span
//               className="
//                 flex h-16 w-16 items-center justify-center
//                 rounded-full
//                 bg-gradient-to-br from-navy to-[#1c2e6e]
//                 text-gold shadow-lg
//               "
//             >
//               <Sparkles size={26} />
//             </span>

//             <h3
//               className="font-serif text-2xl font-bold text-navy sm:text-3xl lg:text-4xl"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               Join Us in Building the Nation
//             </h3>

//             <div
//               className="h-1 w-20 rounded-full bg-gradient-to-r from-gold to-[#F2C45D]"
//               aria-hidden="true"
//             />

//             <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
//               We invite scholars, researchers, industry practitioners and academicians to contribute to this transformative dialogue on innovation, technology and sustainability.
//             </p>

//             <button
//               type="button"
//               className="
//                 group mt-2 inline-flex items-center gap-2
//                 rounded-full bg-navy px-8 py-3.5
//                 text-sm font-semibold text-white
//                 shadow-lg transition-all duration-300
//                 hover:bg-[#1c2e6e] hover:shadow-[0_20px_45px_rgba(31,53,137,0.35)]
//               "
//             >
//               Get Involved
//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Objectives;


/**
 * Objectives.jsx – Conference objectives as premium numbered cards
 * plus a "Join Us" callout. Placed right after the Conference Pillars section.
 */

// import { motion } from 'motion/react';
// import {
//   TrendingUp,
//   Building2,
//   HeartHandshake,
//   Network,
//   ArrowRight,
//   Sparkles,
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
//       'To encourage research contributions across management disciplines advancing India\u2019s progress and development.',
//     icon: Network,
//     accent: 'from-[#E5A82B] via-[#F2C45D] to-[#B8860B]',
//   },
// ];

// function ObjectiveCard({ objective, index }) {
//   const Icon = objective.icon;

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 40, scale: 0.97 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.65,
//         delay: index * 0.12,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{ y: -10 }}
//       className="group relative flex h-full flex-col overflow-hidden rounded-[2.2rem] p-[1px] transition-all duration-500"
//       style={{
//         boxShadow:
//           '0 15px 45px -10px rgba(31,53,137,0.08), 0 1px 3px rgba(0,0,0,0.02)',
//       }}
//     >
//       {/* Animated gradient frame border */}
//       <div
//         className="
//           absolute inset-0 rounded-[2.2rem]
//           bg-gradient-to-br from-[#1F3589]/20 via-[#E5A82B]/40 to-[#1F3589]/20
//           opacity-50 transition-all duration-500
//           group-hover:opacity-100 group-hover:scale-105
//         "
//         aria-hidden="true"
//       />

//       {/* Card inner surface */}
//       <div
//         className="
//           relative flex h-full flex-col overflow-hidden rounded-[calc(2.2rem-1px)]
//           bg-white/90 p-7 backdrop-blur-md transition-all duration-500 sm:p-9
//           group-hover:bg-white
//         "
//       >
//         {/* Hover Sheen Light Sweep */}
//         <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

//         {/* Ambient Halo glow */}
//         <div
//           className="
//             pointer-events-none absolute -right-24 -top-24 h-64 w-64
//             rounded-full bg-[#E5A82B]/20 blur-3xl
//             opacity-0 transition-opacity duration-700 group-hover:opacity-100
//           "
//           aria-hidden="true"
//         />

//         {/* Top Header Row: Icon + Number Watermark */}
//         <div className="relative flex items-center justify-between">
//           <motion.div
//             whileHover={{ rotate: 8, scale: 1.08 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 15 }}
//             className={`
//               relative flex h-16 w-16 items-center justify-center
//               rounded-2xl bg-gradient-to-br ${objective.accent}
//               text-white shadow-md transition-all duration-500
//             `}
//             style={{
//               boxShadow:
//                 '0 10px 25px -5px rgba(31,53,137,0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
//             }}
//           >
//             <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30" />
//             <Icon size={28} strokeWidth={1.8} />
//           </motion.div>

//           <span
//             className="
//               pointer-events-none select-none
//               font-serif text-6xl font-black tracking-tight
//               bg-gradient-to-br from-[#1F3589]/15 via-[#1F3589]/25 to-[#E5A82B]/30
//               bg-clip-text text-transparent transition-all duration-500
//               group-hover:from-[#E5A82B] group-hover:to-[#F2C45D]
//             "
//             aria-hidden="true"
//           >
//             {objective.id}
//           </span>
//         </div>

//         {/* Title */}
//         <h3
//           className="mb-3 mt-8 font-serif text-xl font-bold leading-snug tracking-tight text-[#1F3589] sm:text-2xl"
//           style={{ fontFamily: 'var(--font-serif)' }}
//         >
//           {objective.title}
//         </h3>

//         {/* Decorative divider */}
//         <div
//           className="mb-4 flex items-center gap-2"
//           aria-hidden="true"
//         >
//           <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-[#E5A82B] to-[#F2C45D]" />
//           <span className="h-px flex-1 bg-[#1F3589]/10" />
//         </div>

//         {/* Description */}
//         <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
//           {objective.description}
//         </p>

//         {/* Footer info badge */}
//         <div className="mt-auto pt-8">
//           <span
//             className="
//               inline-flex items-center gap-2.5
//               rounded-full border border-slate-200/80 bg-slate-50/80 px-3.5 py-1.5
//               text-[10px] font-extrabold uppercase tracking-widest
//               text-[#1F3589]/60 transition-all duration-500
//               group-hover:border-[#E5A82B]/40 group-hover:bg-[#FEF7E6] group-hover:text-[#855800]
//             "
//           >
//             <span className="h-1.5 w-1.5 rounded-full bg-[#E5A82B] shadow-[0_0_8px_rgba(229,168,43,0.8)]" />
//             Objective {objective.id}
//           </span>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export function Objectives() {
//   return (
//     <section
//       id="objectives"
//       aria-labelledby="objectives-heading"
//       className="relative isolate overflow-hidden px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
//       style={{
//         background:
//           'radial-gradient(circle at 50% 0%, #FEF7E6 0%, #FFFFFF 50%, #F8F5EC 100%)',
//       }}
//     >
//       {/* Background Lighting */}
//       <div
//         className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#1F3589]/[0.05] blur-3xl opacity-70"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E5A82B]/[0.1] blur-3xl opacity-70"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto flex max-w-[1500px] flex-col items-center gap-16 lg:gap-20">
//         {/* Section Heading */}
//         <div className="max-w-3xl text-center">
//           <SectionHeading
//             eyebrow="Conference Objectives"
//             title="What we aim to achieve"
//             subtitle="Four guiding objectives shaping the conference agenda."
//           />
//         </div>

//         {/* Objective Cards Grid */}
//         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
//           {objectives.map((objective, index) => (
//             <ObjectiveCard
//               key={objective.id}
//               objective={objective}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Join Us Callout Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="
//             group relative w-full overflow-hidden rounded-[2.5rem]
//             border border-[#E5A82B]/30
//             p-10 sm:p-14 lg:p-16
//             transition-all duration-500
//           "
//           style={{
//             background:
//               'linear-gradient(135deg, #0D163A 0%, #1F3589 60%, #101D4B 100%)',
//             boxShadow: '0 30px 80px -20px rgba(31,53,137,0.35)',
//           }}
//         >
//           {/* Animated Ambient Rings */}
//           <motion.div
//             animate={{
//               opacity: [0.2, 0.45, 0.2],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//             className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[30px] border-[#E5A82B]/20 blur-sm"
//             aria-hidden="true"
//           />
//           <div
//             className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#E5A82B]/20 blur-3xl"
//             aria-hidden="true"
//           />

//           <div className="relative z-10 flex flex-col items-center gap-6 text-center">
//             <motion.span
//               whileHover={{ rotate: 12, scale: 1.1 }}
//               className="
//                 flex h-16 w-16 items-center justify-center
//                 rounded-2xl border border-[#E5A82B]/40
//                 bg-gradient-to-br from-[#E5A82B]/20 via-[#E5A82B]/10 to-transparent
//                 text-[#E5A82B] shadow-lg backdrop-blur-md
//               "
//               style={{ boxShadow: '0 0 25px rgba(229,168,43,0.2)' }}
//             >
//               <Sparkles size={28} />
//             </motion.span>

//             <h3
//               className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               Join Us in Building the Nation
//             </h3>

//             <div
//               className="h-1 w-20 rounded-full bg-gradient-to-r from-[#E5A82B] to-[#F2C45D]"
//               aria-hidden="true"
//             />

//             <p className="max-w-2xl text-base font-normal leading-relaxed text-slate-200/90 sm:text-lg">
//               We invite scholars, researchers, industry practitioners and academicians to contribute to this transformative dialogue on innovation, technology and sustainability.
//             </p>

//             <motion.button
//               type="button"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="
//                 group mt-3 inline-flex items-center gap-3
//                 rounded-full bg-gradient-to-r from-[#E5A82B] to-[#D4971A]
//                 px-9 py-4 text-sm font-extrabold uppercase tracking-wider text-[#101D4B]
//                 shadow-xl transition-all duration-300
//                 hover:shadow-[0_15px_35px_rgba(229,168,43,0.4)]
//               "
//             >
//               Get Involved
//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </motion.button>
//           </div>
//         </motion.div>
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
      whileHover={{ y: -4 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-xl
        border border-[#E8E1D5]
        bg-[#FFFCF7]/90
        p-6 sm:p-7
        shadow-[0_4px_18px_rgba(31,53,137,0.04)]
        transition-all duration-300
        hover:border-[#D9C69E]
        hover:shadow-[0_10px_28px_rgba(31,53,137,0.08)]
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div
          className={`
            flex h-11 w-11 items-center justify-center
            rounded-lg bg-gradient-to-br ${objective.accent}
            text-white shadow-sm
            transition-transform duration-300
            group-hover:scale-105
          `}
        >
          <Icon size={21} strokeWidth={1.8} />
        </div>

        <span
          className="
            font-serif text-4xl font-bold
            tracking-tight text-[#1F3589]/10
            transition-colors duration-300
            group-hover:text-[#E5A82B]/30
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
          sm:text-[22px]
        "
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {objective.title}
      </h3>

      {/* Divider */}
      <div className="mb-4 flex items-center gap-2" aria-hidden="true">
        <span className="h-[3px] w-8 rounded-full bg-[#E5A82B]" />
        <span className="h-px flex-1 bg-[#1F3589]/10" />
      </div>

      {/* Description */}
      <p className="flex-1 text-sm leading-7 text-[#626875]">
        {objective.description}
      </p>

      {/* Footer */}
      <div className="mt-6 border-t border-[#1F3589]/10 pt-4">
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1F3589]/50">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5A82B]" />
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
        sm:px-8 sm:py-16
        lg:px-12 lg:py-20
      "
    >
      {/* Subtle background fade */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-24 bg-gradient-to-b from-white/40 to-transparent
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 lg:gap-12">
        {/* Section heading */}
        <div className="max-w-3xl text-center">
          <SectionHeading
            title="What we aim to achieve"
            subtitle="Four guiding objectives shaping the conference agenda."
          />
        </div>

        {/* Objective cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
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