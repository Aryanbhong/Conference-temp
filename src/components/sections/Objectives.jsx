/**
 * Objectives.jsx – Conference objectives as premium numbered cards
 * plus a "Join Us" callout. Placed right after the Conference Pillars section.
 */

import { motion } from 'motion/react';
import {
  TrendingUp,
  Building2,
  HeartHandshake,
  Network,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

const objectives = [
  {
    id: '01',
    title: 'Drive Inclusive Growth',
    description:
      'To foster interdisciplinary research and innovation contributing to Viksit Bharat through inclusive growth strategies.',
    icon: TrendingUp,
    accent: 'from-navy to-[#27469f]',
  },
  {
    id: '02',
    title: 'Strengthen Institutions',
    description:
      'To enhance institutional capacity through technology adoption, innovation frameworks, and empirical insights.',
    icon: Building2,
    accent: 'from-gold to-[#F2C45D]',
  },
  {
    id: '03',
    title: 'Enable Responsible Leadership',
    description:
      'To develop leadership capabilities aligned with ESG principles and sustainable nation-building objectives.',
    icon: HeartHandshake,
    accent: 'from-navy to-[#27469f]',
  },
  {
    id: '04',
    title: 'Welcome Interdisciplinary Research',
    description:
      'To encourage research contributions across management disciplines advancing India\u2019s progress and development.',
    icon: Network,
    accent: 'from-gold to-[#F2C45D]',
  },
];

function ObjectiveCard({ objective, index }) {
  const Icon = objective.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 45, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -12 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[2rem]
        bg-gradient-to-b from-white to-[#FAF6EE]
        p-[1.5px]
        shadow-[0_18px_50px_rgba(31,53,137,0.08)]
        transition-all duration-500
        hover:shadow-[0_32px_80px_rgba(31,53,137,0.18)]
      "
    >
      {/* Animated gradient border frame */}
      <div
        className="
          absolute inset-0 rounded-[2rem]
          bg-gradient-to-br from-navy/25 via-gold/50 to-navy/25
          opacity-60 transition-opacity duration-500
          group-hover:opacity-100
        "
        aria-hidden="true"
      />

      {/* Card inner surface */}
      <div className="relative flex h-full flex-col rounded-[calc(2rem-1.5px)] bg-white p-7 sm:p-8">
        {/* Halo glow on hover */}
        <div
          className="
            pointer-events-none absolute -top-24 -right-20 h-64 w-64
            rounded-full bg-gold/[0.18] blur-3xl
            opacity-0 transition-opacity duration-700 group-hover:opacity-100
          "
          aria-hidden="true"
        />

        {/* Top row: icon + watermark number */}
        <div className="relative flex items-start justify-between">
          <div
            className={`
              relative flex h-16 w-16 items-center justify-center
              rounded-2xl
              bg-gradient-to-br ${objective.accent}
              text-white shadow-lg
              transition-all duration-500
              group-hover:rotate-6 group-hover:scale-105
            `}
          >
            {/* Inner ring on icon */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25" />
            <Icon size={28} strokeWidth={1.8} />
          </div>

          <span
            className="
              pointer-events-none select-none
              font-serif text-6xl font-black leading-none
              bg-gradient-to-br from-navy/15 to-gold/25
              bg-clip-text text-transparent
              transition-all duration-500
              group-hover:from-gold/60 group-hover:to-[#F2C45D]
            "
            aria-hidden="true"
          >
            {objective.id}
          </span>
        </div>

        <h3
          className="mb-3 mt-7 font-serif text-[1.35rem] font-bold leading-snug tracking-tight text-navy"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {objective.title}
        </h3>

        <div
          className="mb-4 flex items-center gap-2"
          aria-hidden="true"
        >
          <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-gold to-[#F2C45D]" />
          <span className="h-px flex-1 bg-navy/10" />
        </div>

        <p className="text-sm leading-7 text-slate-600">
          {objective.description}
        </p>

        <div className="mt-auto pt-7">
          <span
            className="
              inline-flex items-center gap-2.5
              text-[11px] font-bold uppercase tracking-widest
              text-navy/50
              transition-colors duration-500 group-hover:text-gold
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(196,158,62,0.8)]" />
            Objective {objective.id}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Objectives() {
  return (
    <section
      id="objectives"
      aria-labelledby="objectives-heading"
      className="relative isolate overflow-hidden px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      style={{ background: 'var(--color-grey-blue)' }}
    >
      {/* Ambient background decoration */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-navy/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center gap-16 lg:gap-20">
        {/* Section heading */}
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Conference Objectives"
            title="What we aim to achieve"
            subtitle="Four guiding objectives shaping the conference agenda."
          />
        </div>

        {/* Objective cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={objective.id}
              objective={objective}
              index={index}
            />
          ))}
        </div>

        {/* Join Us callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative w-full overflow-hidden rounded-[2.5rem]
            border border-gold/30
            bg-gradient-to-br from-white via-cream to-[#FBF1DA]
            p-10 sm:p-14 lg:p-16
            shadow-[0_25px_70px_rgba(196,158,62,0.18)]
          "
        >
          {/* Decorative rings */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[30px] border-gold/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-gold/[0.09] blur-2xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <span
              className="
                flex h-16 w-16 items-center justify-center
                rounded-full
                bg-gradient-to-br from-navy to-[#1c2e6e]
                text-gold shadow-lg
              "
            >
              <Sparkles size={26} />
            </span>

            <h3
              className="font-serif text-2xl font-bold text-navy sm:text-3xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Join Us in Building the Nation
            </h3>

            <div
              className="h-1 w-20 rounded-full bg-gradient-to-r from-gold to-[#F2C45D]"
              aria-hidden="true"
            />

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We invite scholars, researchers, industry practitioners and academicians to contribute to this transformative dialogue on innovation, technology and sustainability.
            </p>

            <button
              type="button"
              className="
                group mt-2 inline-flex items-center gap-2
                rounded-full bg-navy px-8 py-3.5
                text-sm font-semibold text-white
                shadow-lg transition-all duration-300
                hover:bg-[#1c2e6e] hover:shadow-[0_20px_45px_rgba(31,53,137,0.35)]
              "
            >
              Get Involved
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Objectives;
