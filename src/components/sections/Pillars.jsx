
/**
 * Pillars.jsx – Premium conference pillars section.
 * Themes: Innovation, Technology, Sustainability.
 */

import { motion } from 'motion/react';
import {
  Lightbulb,
  Cpu,
  Leaf,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

const pillars = [
  {
    id: '01',
    title: 'Innovation',
    description:
      'Innovative ideas, digital transformation and cutting-edge solutions for nation-building challenges.',
    icon: Lightbulb,
    accent: 'from-amber-400 to-yellow-600',
    glow: 'bg-amber-400/10',
  },
  {
    id: '02',
    title: 'Technology',
    description:
      'Technology that strengthens institutions, enables growth and empowers citizens across sectors.',
    icon: Cpu,
    accent: 'from-blue-400 to-indigo-600',
    glow: 'bg-blue-400/10',
  },
  {
    id: '03',
    title: 'Sustainability',
    description:
      'Sustainable practices, ESG principles and responsible leadership for inclusive development.',
    icon: Leaf,
    accent: 'from-emerald-400 to-green-600',
    glow: 'bg-emerald-400/10',
  },
];

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[2rem]
        border border-white/80
        bg-white/85
        p-7 sm:p-9 lg:p-10
        shadow-[0_10px_40px_rgba(31,53,137,0.06)]
        backdrop-blur-xl
        transition-all duration-500
        hover:border-gold/40
        hover:shadow-[0_25px_60px_rgba(31,53,137,0.12)]
      "
    >
      {/* Background glow */}
      <div
        className={`
          pointer-events-none absolute -right-24 -top-24
          h-64 w-64 rounded-full blur-3xl
          ${pillar.glow}
          opacity-50 transition-opacity duration-500
          group-hover:opacity-100
        `}
        aria-hidden="true"
      />

      {/* Decorative corner */}
      <div
        className="
          pointer-events-none absolute right-0 top-0
          h-32 w-32 rounded-bl-[5rem]
          border-b border-l border-gold/10
          bg-gradient-to-bl from-gold/[0.04] to-transparent
        "
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Top row */}
        <div className="mb-10 flex items-start justify-between">
          <span
            className="
              font-serif text-5xl font-bold
              tracking-tight text-navy/[0.08]
              transition-colors duration-500
              group-hover:text-gold/25
            "
            aria-hidden="true"
          >
            {pillar.id}
          </span>

          <div
            className={`
              flex h-16 w-16 items-center justify-center
              rounded-2xl bg-gradient-to-br ${pillar.accent}
              text-white
              shadow-lg
              transition-all duration-500
              group-hover:rotate-6 group-hover:scale-110
            `}
          >
            <Icon size={28} strokeWidth={1.7} />
          </div>
        </div>

        {/* Pillar title */}
        <h3
          className="
            mb-4 font-serif text-2xl font-bold
            tracking-tight text-navy
            sm:text-3xl
          "
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {pillar.title}
        </h3>

        {/* Gold accent */}
        <div
          className="
            mb-6 h-1 w-12 rounded-full
            bg-gradient-to-r from-gold to-[#F2C45D]
            transition-all duration-500
            group-hover:w-20
          "
          aria-hidden="true"
        />

        {/* Description */}
        <p className="flex-1 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {pillar.description}
        </p>

        {/* Bottom accent */}
        <div
          className="
            mt-8 flex items-center justify-between
            border-t border-navy/5 pt-5
          "
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/40">
            Conference Theme
          </span>

          <ArrowUpRight
            size={18}
            className="
              text-gold
              transition-transform duration-300
              group-hover:-translate-y-1 group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </motion.article>
  );
}

export function Pillars() {
  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="
        relative isolate overflow-hidden
        px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24
      "
        style={{ background: 'var(--color-white)' }}
    >
      {/* Ambient background decoration */}
      <div
        className="
          pointer-events-none absolute -left-40 top-20
          h-96 w-96 rounded-full
          bg-navy/[0.04] blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-0
          h-96 w-96 rounded-full
          bg-gold/[0.08] blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center gap-16 lg:gap-20">
        {/* Section heading */}
        <div className="max-w-3xl">
          <SectionHeading
            title="Three themes, one purpose"
            subtitle="Exploring the transformative forces shaping a sustainable, innovative and technology-driven nation."
          />
        </div>

        {/* Pillar cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={index}
            />
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            flex max-w-3xl flex-col items-center gap-4
            text-center
          "
        >
          <Sparkles className="text-gold" size={22} />

          <p className="font-serif text-lg italic leading-relaxed text-navy/70 sm:text-xl">
            “Connecting ideas, advancing technology, and building a sustainable future.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pillars;
