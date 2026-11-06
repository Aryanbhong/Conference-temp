
// import { useState } from 'react';
// import { SectionHeading } from '../ui/SectionHeading';
// import { tracks } from '../../data/tracks';

// import {
//   TrendingUp,
//   Megaphone,
//   Users,
//   GitMerge,
//   Cpu,
//   Leaf,
//   ChevronDown,
//   ArrowUpRight,
// } from 'lucide-react';

// const iconMap = {
//   TrendingUp,
//   Megaphone,
//   Users,
//   GitMerge,
//   Cpu,
//   Leaf,
// };

// export function CallForPapers() {
//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => {
//     setOpenId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section
//       id="call-for-papers"
//       aria-labelledby="cfp-heading"
//       className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-8 md:py-16"
//       style={{
//         background: `
//           radial-gradient(
//             ellipse at 0% 0%,
//             rgba(212, 175, 55, 0.07),
//             transparent 45%
//           ),
//           var(--color-white)
//         `,
//       }}
//     >
//       {/* Decorative background elements */}
//       <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

//       <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-9 md:gap-10">

//         <SectionHeading
//           title="Research tracks & topics"
//           subtitle="Submit original, unpublished research across six interdisciplinary tracks."
//           id="cfp-heading"
//         />

//         {/* Track cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">

//           {tracks.map((track, index) => {
//             const Icon = iconMap[track.icon] ?? Leaf;
//             const isOpen = openId === track.id;

//             return (
//               <article
//                 key={track.id}
//                 className={`
//                   group relative overflow-hidden rounded-xl
//                   border transition-all duration-500 ease-out
//                   ${
//                     isOpen
//                       ? 'border-gold/60 shadow-[0_12px_45px_rgba(10,25,60,0.12)]'
//                       : 'border-[var(--color-border)] shadow-[0_4px_20px_rgba(10,25,60,0.04)] hover:border-gold/50 hover:shadow-[0_12px_35px_rgba(10,25,60,0.10)]'
//                   }
//                   hover:-translate-y-1
//                 `}
//                 style={{
//                   background: `
//                     linear-gradient(
//                       145deg,
//                       rgba(255,255,255,0.98),
//                       rgba(245,247,251,0.95)
//                     )
//                   `,
//                 }}
//               >
//                 {/* Gold accent line */}
//                 <div
//                   className={`
//                     absolute top-0 left-0 h-[3px] w-full
//                     bg-gradient-to-r from-transparent via-gold to-transparent
//                     transition-opacity duration-300
//                     ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
//                   `}
//                 />

//                 {/* Card header */}
//                 <button
//                   type="button"
//                   onClick={() => toggle(track.id)}
//                   aria-expanded={isOpen}
//                   aria-controls={`track-panel-${track.id}`}
//                   id={`track-header-${track.id}`}
//                   className="relative w-full flex items-center gap-4 px-4 py-4 sm:px-5 sm:py-5 text-left"
//                 >
//                   {/* Icon container */}
//                   <div
//                     className={`
//                       relative flex items-center justify-center shrink-0
//                       w-11 h-11 rounded-lg
//                       transition-all duration-300
//                       ${
//                         isOpen
//                           ? 'bg-navy text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]'
//                           : 'bg-navy/[0.06] text-navy group-hover:bg-navy group-hover:text-gold'
//                       }
//                     `}
//                   >
//                     <Icon
//                       size={20}
//                       strokeWidth={1.7}
//                       className="transition-transform duration-300 group-hover:scale-110"
//                       aria-hidden="true"
//                     />

//                     <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-gold text-navy text-[9px] font-bold shadow-sm">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                   </div>

//                   {/* Track title */}
//                   <div className="flex-1 min-w-0">
//                     <span className="block text-[9px] uppercase tracking-[0.2em] text-gold font-bold mb-1">
//                       Research Track
//                     </span>

//                     <h3
//                       className="font-bold text-navy text-sm sm:text-base leading-snug"
//                       style={{ fontFamily: 'var(--font-sans)' }}
//                     >
//                       {track.title}
//                     </h3>

//                     <p className="text-[11px] text-[var(--color-text-body)] mt-1 opacity-70">
//                       {track.topics.length} research topics
//                     </p>
//                   </div>

//                   {/* Expand button */}
//                   <div
//                     className={`
//                       w-8 h-8 rounded-full flex items-center justify-center shrink-0
//                       border transition-all duration-300
//                       ${
//                         isOpen
//                           ? 'bg-navy border-navy text-gold rotate-180'
//                           : 'border-[var(--color-border)] text-navy group-hover:border-gold group-hover:bg-gold/10'
//                       }
//                     `}
//                   >
//                     <ChevronDown size={15} />
//                   </div>
//                 </button>

//                 {/* Topics panel */}
//                 <div
//                   id={`track-panel-${track.id}`}
//                   role="region"
//                   aria-labelledby={`track-header-${track.id}`}
//                   hidden={!isOpen}
//                   className="relative px-4 sm:px-5 pt-4 pb-5 border-t border-navy/[0.08] bg-navy/[0.025]"
//                 >
//                   <div className="flex items-center gap-2 mb-3">
//                     <div className="w-1.5 h-1.5 rounded-full bg-gold" />
//                     <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-navy/60">
//                       Topics of Interest
//                     </span>
//                   </div>

//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
//                     {track.topics.map((topic, topicIndex) => (
//                       <li
//                         key={topic}
//                         className="flex items-start gap-2.5 text-xs text-[var(--color-text-body)] group/topic"
//                       >
//                         <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-gold/10 text-gold mt-0.5">
//                           <ArrowUpRight size={11} />
//                         </span>

//                         <span className="leading-relaxed group-hover/topic:text-navy transition-colors">
//                           {topic}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* Bottom decorative divider */}
//         <div className="flex items-center gap-4 w-full max-w-xs opacity-50">
//           <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
//           <div className="w-2 h-2 rotate-45 bg-gold" />
//           <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
//         </div>

//       </div>
//     </section>
//   );
// }

// export default CallForPapers;


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
      className="relative overflow-hidden
        px-4 py-14 sm:px-6 md:px-8 md:py-20
        lg:px-10 xl:px-12"
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
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute -right-20 top-20
          h-96 w-96 rounded-full bg-navy/5 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-0
          h-80 w-80 rounded-full bg-gold/10 blur-[100px]"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div
        className="relative z-10 mx-auto flex w-full
          max-w-[1440px] flex-col items-center
          gap-10 px-2 sm:px-4 lg:gap-12 lg:px-6 xl:px-8"
      >
        <SectionHeading
          title="Research tracks & topics"
          subtitle="Submit original, unpublished research across six interdisciplinary tracks."
          id="cfp-heading"
        />

        {/* Track Cards */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
          {tracks.map((track, index) => {
            const Icon = iconMap[track.icon] ?? Leaf;
            const isOpen = openId === track.id;

            return (
              <article
                key={track.id}
                className={`
                  group relative flex flex-col overflow-hidden
                  rounded-2xl border
                  transition-all duration-500 ease-out
                  ${
                    isOpen
                      ? 'border-gold/60 shadow-[0_16px_45px_rgba(10,25,60,0.12)]'
                      : 'border-[var(--color-border)] shadow-[0_6px_25px_rgba(10,25,60,0.05)] hover:border-gold/50 hover:shadow-[0_16px_40px_rgba(10,25,60,0.10)]'
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
                {/* Gold Accent */}
                <div
                  className={`
                    absolute left-0 top-0 h-1 w-full
                    bg-gradient-to-r
                    from-transparent via-gold to-transparent
                    transition-opacity duration-300
                    ${
                      isOpen
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    }
                  `}
                  aria-hidden="true"
                />

                {/* Card Header */}
                <button
                  type="button"
                  onClick={() => toggle(track.id)}
                  aria-expanded={isOpen}
                  aria-controls={`track-panel-${track.id}`}
                  id={`track-header-${track.id}`}
                  className="relative flex w-full items-center
                    gap-5 px-5 py-6 text-left
                    transition-colors duration-300
                    sm:px-7 sm:py-7 lg:gap-6 lg:px-8"
                >
                  {/* Icon */}
                  <div
                    className={`
                      relative flex h-14 w-14 shrink-0
                      items-center justify-center rounded-xl
                      transition-all duration-300
                      ${
                        isOpen
                          ? 'bg-navy text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                          : 'bg-navy/[0.06] text-navy group-hover:bg-navy group-hover:text-gold'
                      }
                    `}
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      className="transition-transform duration-300
                        group-hover:scale-110"
                      aria-hidden="true"
                    />

                    {/* Track Number */}
                    <span
                      className="absolute -right-2 -top-2
                        flex h-6 w-6 items-center justify-center
                        rounded-full bg-gold text-[10px]
                        font-bold text-navy shadow-sm"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Track Information */}
                  <div className="min-w-0 flex-1">
                    <span
                      className="mb-1.5 block text-[10px]
                        font-bold uppercase tracking-[0.2em]
                        text-gold"
                    >
                      Research Track
                    </span>

                    <h3
                      className="text-base font-bold leading-snug
                        text-navy sm:text-lg lg:text-xl"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {track.title}
                    </h3>

                    <p
                      className="mt-2 text-xs
                        text-[var(--color-text-body)] opacity-70"
                    >
                      {track.topics.length} research topics
                    </p>
                  </div>

                  {/* Expand Button */}
                  <div
                    className={`
                      flex h-10 w-10 shrink-0
                      items-center justify-center rounded-full
                      border transition-all duration-300
                      ${
                        isOpen
                          ? 'rotate-180 border-navy bg-navy text-gold'
                          : 'border-[var(--color-border)] text-navy group-hover:border-gold group-hover:bg-gold/10'
                      }
                    `}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Topics Panel */}
                <div
                  id={`track-panel-${track.id}`}
                  role="region"
                  aria-labelledby={`track-header-${track.id}`}
                  hidden={!isOpen}
                  className="relative border-t
                    border-navy/[0.08] bg-navy/[0.025]
                    px-5 pb-7 pt-6 sm:px-7 lg:px-8"
                >
                  {/* Panel Heading */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gold" />

                    <span
                      className="text-[10px] font-bold
                        uppercase tracking-[0.18em]
                        text-navy/60"
                    >
                      Topics of Interest
                    </span>

                    <div className="h-px flex-1 bg-navy/10" />
                  </div>

                  {/* Topics Grid */}
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
                    {track.topics.map((topic) => (
                      <li
                        key={topic}
                        className="group/topic flex items-start
                          gap-3 rounded-lg border
                          border-navy/[0.05] bg-white/70
                          p-3.5 transition-all duration-300
                          hover:border-gold/30 hover:bg-white"
                      >
                        <span
                          className="mt-0.5 flex h-6 w-6
                            shrink-0 items-center justify-center
                            rounded-md bg-gold/10 text-gold"
                        >
                          <ArrowUpRight size={13} />
                        </span>

                        <span
                          className="text-xs leading-relaxed
                            text-[var(--color-text-body)]
                            transition-colors
                            group-hover/topic:text-navy
                            sm:text-sm"
                        >
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

        {/* Bottom Decorative Divider */}
        <div
          className="flex w-full max-w-sm items-center
            gap-4 opacity-50"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
          <div className="h-2 w-2 rotate-45 bg-gold" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>
    </section>
  );
}

export default CallForPapers;
