
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CalendarDays,
  GraduationCap,
  Users,
  Globe2,
  ArrowUpRight,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

const conferencePeople = [
  {
    id: 1,
    name: '[Conference Chair Name]',
    designation: '[Designation]',
    affiliation: '[Institution]',
    role: 'Conference Chair',
    photo: '',
  },
  {
    id: 2,
    name: '[Speaker Name]',
    designation: '[Designation]',
    affiliation: '[Institution]',
    role: 'Keynote Speaker',
    photo: '',
  },
  {
    id: 3,
    name: '[Speaker Name]',
    designation: '[Designation]',
    affiliation: '[Institution]',
    role: 'Invited Speaker',
    photo: '',
  },
];

const preConferencePeople = [
  {
    id: 1,
    name: '[Pre-Conference Chair]',
    designation: '[Designation]',
    affiliation: '[Institution]',
    role: 'Pre-Conference Chair',
    photo: '',
  },
  {
    id: 2,
    name: '[Workshop Speaker]',
    designation: '[Designation]',
    affiliation: '[Institution]',
    role: 'Workshop Speaker',
    photo: '',
  },
  {
    id: 3,
    name: '[Resource Person]',
    designation: '[Designation]',
    affiliation: '[Institution]',
    role: 'Resource Person',
    photo: '',
  },
];

function PersonCard({ person, index }) {
  const initials =
    person.name
      .replace(/\[.*?\]/g, '')
      .trim()
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join('') || '?';

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
      }}
      whileHover={{ y: -5 }}
      className="
        group relative flex h-full w-full
        max-w-[300px] flex-col items-center
        overflow-hidden rounded-2xl
        border border-[#E5A82B]/20
        bg-white/90 p-5 text-center
        shadow-[0_8px_30px_rgba(31,53,137,0.06)]
        transition-all duration-300
        hover:border-[#E5A82B]/60
        hover:shadow-[0_18px_40px_rgba(31,53,137,0.12)]
      "
    >
      {/* Top accent */}
      <div
        className="
          absolute inset-x-0 top-0 h-1
          bg-gradient-to-r from-[#1F3589]
          via-[#E5A82B] to-[#1F3589]
        "
      />

      {/* Decorative glow */}
      <div
        className="
          pointer-events-none absolute
          -right-10 -top-10 h-28 w-28
          rounded-full bg-[#E5A82B]/10
          blur-2xl transition-all duration-500
          group-hover:bg-[#E5A82B]/20
        "
      />

      {/* Profile image */}
      <div className="relative mb-4">
        <div
          className="
            absolute -inset-1.5 rounded-full
            bg-gradient-to-br from-[#E5A82B]
            to-[#1F3589] opacity-40 blur-sm
            transition-all duration-300
            group-hover:opacity-70
          "
        />

        <div
          className="
            relative flex h-20 w-20
            items-center justify-center
            overflow-hidden rounded-full
            border-4 border-white
            bg-[#1F3589] text-xl
            font-bold text-white shadow-md
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            initials
          )}
        </div>
      </div>

      {/* Details */}
      <div className="relative z-10 flex flex-1 flex-col items-center">
        <span
          className="
            mb-2.5 rounded-full border
            border-[#E5A82B]/30
            bg-[#FEF7E6] px-3 py-1
            text-[9px] font-bold uppercase
            tracking-wider text-[#B8860B]
          "
        >
          {person.role}
        </span>

        <h3
          className="
            text-base font-bold leading-snug
            text-[#1F3589] transition-colors
            group-hover:text-[#B8860B]
          "
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {person.name}
        </h3>

        <p className="mt-2 text-xs text-gray-600">
          {person.designation}
        </p>

        <p className="mt-1 text-[11px] text-gray-400">
          {person.affiliation}
        </p>

        <div
          className="
            mt-4 h-px w-10 bg-[#E5A82B]/40
            transition-all duration-300
            group-hover:w-16 group-hover:bg-[#E5A82B]
          "
        />
      </div>
    </motion.article>
  );
}

export function ConferencePeople() {
  const [activeTab, setActiveTab] = useState('conference');

  const tabs = [
    {
      id: 'conference',
      label: 'Main Conference',
      subtitle: 'Conference speakers & leadership',
      icon: Users,
      people: conferencePeople,
    },
    {
      id: 'preconference',
      label: 'Pre-Conference',
      subtitle: 'Workshop speakers & resource persons',
      icon: GraduationCap,
      people: preConferencePeople,
    },
  ];

  const activeContent = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <section
      id="conference-people"
      className="
        relative isolate overflow-hidden
        bg-[#FEF7E6] px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
      "
      style={{ background: 'var(--color-white)' }}
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute
          -left-40 top-20 h-80 w-80
          rounded-full bg-[#E5A82B]/10 blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-0 h-80 w-80
          rounded-full bg-[#1F3589]/10 blur-3xl
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <SectionHeading
            title="Knowledge. Innovation. Collaboration."
            id="conference-people-heading"
          />

          <p
            className="
              mx-auto mt-3 max-w-2xl
              text-sm leading-relaxed text-gray-600
              md:text-base
            "
          >
            Explore the distinguished speakers, researchers,
            and academic leaders participating in IC-NBITS 2027.
          </p>
        </div>

        {/* Toggle */}
        <div className="mb-8 flex justify-center">
          <div
            className="
              relative flex w-full max-w-lg
              rounded-2xl border border-[#1F3589]/10
              bg-white/70 p-1.5 shadow-md
              backdrop-blur-xl sm:rounded-full
            "
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={isActive}
                  className={`
                    relative flex flex-1
                    items-center justify-center gap-2
                    rounded-xl px-3 py-3
                    text-xs font-bold
                    transition-colors duration-300
                    sm:rounded-full sm:px-5 sm:text-sm
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-[#1F3589] hover:bg-[#FEF7E6]'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="conference-tab-indicator"
                      className="
                        absolute inset-0 rounded-xl
                        bg-gradient-to-r from-[#1F3589]
                        to-[#354FA5] shadow-md
                        sm:rounded-full
                      "
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <Icon size={16} className="relative z-10" />

                  <span className="relative z-10">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active tab description */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div
            className="
              flex items-center gap-2
              text-sm font-semibold text-[#B8860B]
            "
          >
            <CalendarDays size={15} />
            {activeContent.subtitle}
          </div>

          <p className="mt-1.5 text-xs text-gray-400">
            {activeContent.people.length} participants
          </p>
        </div>

        {/* Centered people cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="
              mx-auto flex w-full
              flex-wrap justify-center
              gap-5 sm:gap-6
            "
          >
            {activeContent.people.map((person, index) => (
              <PersonCard
                key={`${activeTab}-${person.id}`}
                person={person}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <div className="mt-8 flex justify-center">
          <div
            className="
              inline-flex items-center gap-2.5
              rounded-full border border-[#E5A82B]/20
              bg-white/70 px-4 py-2.5
              text-xs text-gray-500 shadow-sm
            "
          >
            <Globe2 size={14} className="shrink-0 text-[#E5A82B]" />

            <span>
              Bringing together experts and innovators
              from diverse disciplines
            </span>

            <ArrowUpRight
              size={13}
              className="shrink-0 text-[#1F3589]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConferencePeople;