
import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { tracks } from '../../data/tracks';

import {
  TrendingUp,
  Megaphone,
  Users,
  GitMerge,
  Cpu,
  Leaf,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';

const iconMap = {
  TrendingUp,
  Megaphone,
  Users,
  GitMerge,
  Cpu,
  Leaf,
};

export function CallForPapers() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="call-for-papers"
      aria-labelledby="cfp-heading"
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-8 md:py-16"
      style={{
        background: `
          radial-gradient(
            ellipse at 0% 0%,
            rgba(212, 175, 55, 0.07),
            transparent 45%
          ),
          var(--color-white)
        `,
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-9 md:gap-10">

        <SectionHeading
          title="Research tracks & topics"
          subtitle="Submit original, unpublished research across six interdisciplinary tracks."
          id="cfp-heading"
        />

        {/* Track cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">

          {tracks.map((track, index) => {
            const Icon = iconMap[track.icon] ?? Leaf;
            const isOpen = openId === track.id;

            return (
              <article
                key={track.id}
                className={`
                  group relative overflow-hidden rounded-xl
                  border transition-all duration-500 ease-out
                  ${
                    isOpen
                      ? 'border-gold/60 shadow-[0_12px_45px_rgba(10,25,60,0.12)]'
                      : 'border-[var(--color-border)] shadow-[0_4px_20px_rgba(10,25,60,0.04)] hover:border-gold/50 hover:shadow-[0_12px_35px_rgba(10,25,60,0.10)]'
                  }
                  hover:-translate-y-1
                `}
                style={{
                  background: `
                    linear-gradient(
                      145deg,
                      rgba(255,255,255,0.98),
                      rgba(245,247,251,0.95)
                    )
                  `,
                }}
              >
                {/* Gold accent line */}
                <div
                  className={`
                    absolute top-0 left-0 h-[3px] w-full
                    bg-gradient-to-r from-transparent via-gold to-transparent
                    transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                />

                {/* Card header */}
                <button
                  type="button"
                  onClick={() => toggle(track.id)}
                  aria-expanded={isOpen}
                  aria-controls={`track-panel-${track.id}`}
                  id={`track-header-${track.id}`}
                  className="relative w-full flex items-center gap-4 px-4 py-4 sm:px-5 sm:py-5 text-left"
                >
                  {/* Icon container */}
                  <div
                    className={`
                      relative flex items-center justify-center shrink-0
                      w-11 h-11 rounded-lg
                      transition-all duration-300
                      ${
                        isOpen
                          ? 'bg-navy text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                          : 'bg-navy/[0.06] text-navy group-hover:bg-navy group-hover:text-gold'
                      }
                    `}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />

                    <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-gold text-navy text-[9px] font-bold shadow-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Track title */}
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9px] uppercase tracking-[0.2em] text-gold font-bold mb-1">
                      Research Track
                    </span>

                    <h3
                      className="font-bold text-navy text-sm sm:text-base leading-snug"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {track.title}
                    </h3>

                    <p className="text-[11px] text-[var(--color-text-body)] mt-1 opacity-70">
                      {track.topics.length} research topics
                    </p>
                  </div>

                  {/* Expand button */}
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center shrink-0
                      border transition-all duration-300
                      ${
                        isOpen
                          ? 'bg-navy border-navy text-gold rotate-180'
                          : 'border-[var(--color-border)] text-navy group-hover:border-gold group-hover:bg-gold/10'
                      }
                    `}
                  >
                    <ChevronDown size={15} />
                  </div>
                </button>

                {/* Topics panel */}
                <div
                  id={`track-panel-${track.id}`}
                  role="region"
                  aria-labelledby={`track-header-${track.id}`}
                  hidden={!isOpen}
                  className="relative px-4 sm:px-5 pt-4 pb-5 border-t border-navy/[0.08] bg-navy/[0.025]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-navy/60">
                      Topics of Interest
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {track.topics.map((topic, topicIndex) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2.5 text-xs text-[var(--color-text-body)] group/topic"
                      >
                        <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-gold/10 text-gold mt-0.5">
                          <ArrowUpRight size={11} />
                        </span>

                        <span className="leading-relaxed group-hover/topic:text-navy transition-colors">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom decorative divider */}
        <div className="flex items-center gap-4 w-full max-w-xs opacity-50">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
        </div>

      </div>
    </section>
  );
}

export default CallForPapers;