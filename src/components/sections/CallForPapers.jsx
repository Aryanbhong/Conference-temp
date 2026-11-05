// /**
//  * CallForPapers.jsx – 6 tracks accordion/tab card grid.
//  */

// import { useState } from 'react';
// import { SectionHeading } from '../ui/SectionHeading';
// import { tracks } from '../../data/tracks';

// /* Map icon name strings to lucide components */
// import {
//   TrendingUp, Megaphone, Users, GitMerge, Cpu, Leaf, ChevronDown,
// } from 'lucide-react';

// const iconMap = { TrendingUp, Megaphone, Users, GitMerge, Cpu, Leaf };

// export function CallForPapers() {
//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

//   return (
//     <section
//       id="call-for-papers"
//       aria-labelledby="cfp-heading"
//       className="py-20 px-4 md:px-8"
//       style={{ background: 'var(--color-white)' }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
//         <SectionHeading
//           eyebrow="Call for Papers"
//           title="Research tracks & topics"
//           subtitle="Submit original, unpublished research across six interdisciplinary tracks."
//           id="cfp-heading"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
//           {tracks.map((track) => {
//             const Icon = iconMap[track.icon] ?? Leaf;
//             const isOpen = openId === track.id;

//             return (
//               <article
//                 key={track.id}
//                 className="border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm"
//               >
//                 <button
//                   type="button"
//                   onClick={() => toggle(track.id)}
//                   aria-expanded={isOpen}
//                   aria-controls={`track-panel-${track.id}`}
//                   id={`track-header-${track.id}`}
//                   className="w-full flex items-center gap-4 px-6 py-4 bg-white hover:bg-grey-blue
//                     text-left transition-colors duration-150"
//                 >
//                   {/* Icon badge */}
//                   <div
//                     className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0
//                       transition-colors duration-200 ${isOpen ? 'bg-navy' : 'bg-navy/10'}`}
//                   >
//                     <Icon
//                       size={18}
//                       className={isOpen ? 'text-gold' : 'text-navy'}
//                       aria-hidden="true"
//                     />
//                   </div>

//                   <span
//                     className="font-semibold text-navy flex-1 text-sm md:text-base"
//                     style={{ fontFamily: 'var(--font-sans)' }}
//                   >
//                     {track.title}
//                   </span>

//                   <ChevronDown
//                     size={18}
//                     className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
//                     aria-hidden="true"
//                   />
//                 </button>

//                 <div
//                   id={`track-panel-${track.id}`}
//                   role="region"
//                   aria-labelledby={`track-header-${track.id}`}
//                   hidden={!isOpen}
//                   className="px-6 py-4 bg-grey-blue border-t border-[var(--color-border)]"
//                 >
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//                     {track.topics.map((topic) => (
//                       <li
//                         key={topic}
//                         className="flex items-start gap-2 text-sm text-[var(--color-text-body)]"
//                       >
//                         <span className="text-gold font-bold mt-0.5 shrink-0">›</span>
//                         {topic}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CallForPapers;


/**
 * CallForPapers.jsx
 * Premium interactive conference tracks section.
 */

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
      className="relative overflow-hidden py-24 px-4 md:px-8"
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

      <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-14">

        <SectionHeading
          eyebrow="Call for Papers"
          title="Research tracks & topics"
          subtitle="Submit original, unpublished research across six interdisciplinary tracks."
          id="cfp-heading"
        />

        {/* Track cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {tracks.map((track, index) => {
            const Icon = iconMap[track.icon] ?? Leaf;
            const isOpen = openId === track.id;

            return (
              <article
                key={track.id}
                className={`
                  group relative overflow-hidden rounded-2xl
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
                  className="relative w-full flex items-center gap-5 px-5 py-6 sm:px-7 text-left"
                >
                  {/* Icon container */}
                  <div
                    className={`
                      relative flex items-center justify-center shrink-0
                      w-14 h-14 rounded-xl
                      transition-all duration-300
                      ${
                        isOpen
                          ? 'bg-navy text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                          : 'bg-navy/[0.06] text-navy group-hover:bg-navy group-hover:text-gold'
                      }
                    `}
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />

                    <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-gold text-navy text-[10px] font-bold shadow-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Track title */}
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-1.5">
                      Research Track
                    </span>

                    <h3
                      className="font-bold text-navy text-sm sm:text-base md:text-lg leading-snug"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {track.title}
                    </h3>

                    <p className="text-xs text-[var(--color-text-body)] mt-1.5 opacity-70">
                      {track.topics.length} research topics
                    </p>
                  </div>

                  {/* Expand button */}
                  <div
                    className={`
                      w-9 h-9 rounded-full flex items-center justify-center shrink-0
                      border transition-all duration-300
                      ${
                        isOpen
                          ? 'bg-navy border-navy text-gold rotate-180'
                          : 'border-[var(--color-border)] text-navy group-hover:border-gold group-hover:bg-gold/10'
                      }
                    `}
                  >
                    <ChevronDown size={17} />
                  </div>
                </button>

                {/* Topics panel */}
                <div
                  id={`track-panel-${track.id}`}
                  role="region"
                  aria-labelledby={`track-header-${track.id}`}
                  hidden={!isOpen}
                  className="relative px-5 sm:px-7 pt-5 pb-6 border-t border-navy/[0.08] bg-navy/[0.025]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-navy/60">
                      Topics of Interest
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {track.topics.map((topic, topicIndex) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-sm text-[var(--color-text-body)] group/topic"
                      >
                        <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-gold/10 text-gold mt-0.5">
                          <ArrowUpRight size={12} />
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
