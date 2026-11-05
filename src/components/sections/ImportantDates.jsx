// /**
//  * ImportantDates.jsx – Timeline of key dates.
//  */

// import { Calendar, Clock } from 'lucide-react';
// import { SectionHeading } from '../ui/SectionHeading';
// import { importantDates } from '../../data/dates';

// const statusStyles = {
//   past:     { bg: 'bg-[var(--color-border)]',    dot: 'bg-gray-400',      text: 'text-gray-400 line-through' },
//   current:  { bg: 'bg-gold/10 border border-gold/40', dot: 'bg-gold',      text: 'text-navy font-semibold' },
//   upcoming: { bg: 'bg-white',                    dot: 'bg-navy',          text: 'text-navy' },
// };

// export function ImportantDates() {
//   return (
//     <section
//       id="important-dates"
//       aria-labelledby="dates-heading"
//       className="py-20 px-4 md:px-8"
//       style={{ background: 'var(--color-white)' }}
//     >
//       <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
//         <SectionHeading
//           title="Mark your calendar"
//           id="dates-heading"
//         />

//         {/* Timeline */}
//         <ol className="w-full flex flex-col gap-0 relative">
//           {/* Vertical line */}
//           <div
//             className="absolute left-6 top-6 bottom-6 w-0.5 bg-[var(--color-border)]"
//             aria-hidden="true"
//           />

//           {importantDates.map((item, idx) => {
//             const style = statusStyles[item.status] ?? statusStyles.upcoming;
//             return (
//               <li
//                 key={item.id}
//                 className={`relative flex items-start gap-5 rounded-xl px-5 py-4 ml-0 transition-colors ${style.bg} ${idx > 0 ? 'mt-2' : ''}`}
//               >
//                 {/* Dot */}
//                 <div
//                   className={`w-4 h-4 rounded-full shrink-0 mt-1 border-2 border-white shadow ${style.dot} z-10`}
//                   aria-hidden="true"
//                 />

//                 <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
//                   <span className={`text-sm flex-1 ${style.text}`}>
//                     {item.event}
//                   </span>
//                   <span className="inline-flex items-center gap-1.5 shrink-0 text-xs font-semibold text-gold">
//                     <Calendar size={13} aria-hidden="true" />
//                     {item.date}
//                   </span>
//                 </div>
//               </li>
//             );
//           })}
//         </ol>
//       </div>
//     </section>
//   );
// }

// export default ImportantDates;


/**
 * ImportantDates.jsx – Neon academic timeline.
 */

import { Calendar, Clock, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { importantDates } from '../../data/dates';

const statusStyles = {
  past: {
    bg: 'bg-[#F3F2EE]/80 border-gray-200/70',
    dot: 'bg-gray-400',
    text: 'text-gray-400 line-through',
    date: 'text-gray-400',
  },
  current: {
    bg: 'bg-gradient-to-r from-[#FFF5D9] via-white to-[#FFFDF7] border-[#E5A82B]/60 shadow-[0_0_25px_rgba(229,168,43,0.15)]',
    dot: 'bg-[#E5A82B]',
    text: 'text-[#101D4B] font-semibold',
    date: 'text-[#A87512]',
  },
  upcoming: {
    bg: 'bg-white/80 border-[#1F3589]/10 hover:border-[#1F3589]/40 hover:bg-white hover:shadow-[0_0_30px_rgba(31,53,137,0.12)]',
    dot: 'bg-[#1F3589]',
    text: 'text-[#101D4B]',
    date: 'text-[#1F3589]',
  },
};

export function ImportantDates() {
  return (
    <section
      id="important-dates"
      aria-labelledby="dates-heading"
      className="relative isolate overflow-hidden px-4 py-20 md:px-8"
      style={{ background: 'var(--color-white)' }}
    >
      {/* Ambient glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#1F3589]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#E5A82B]/10 blur-[120px]"
      />

      <Sparkles
        aria-hidden="true"
        size={18}
        className="pointer-events-none absolute right-[12%] top-24 animate-pulse text-[#E5A82B]/40"
      />

      <Sparkles
        aria-hidden="true"
        size={12}
        className="pointer-events-none absolute bottom-28 left-[10%] animate-pulse text-[#1F3589]/30"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12">
        <SectionHeading
          title="Mark your calendar"
          id="dates-heading"
        />

        {/* Timeline */}
        <ol className="relative flex w-full flex-col gap-3">

          {/* Glowing timeline rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-6 w-[2px] overflow-hidden rounded-full bg-gradient-to-b from-[#1F3589]/10 via-[#E5A82B]/60 to-[#1F3589]/10"
          >
            <div className="absolute inset-x-0 top-0 h-1/3 animate-[timelineFlow_4s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-[#E5A82B] to-transparent" />
          </div>

          {importantDates.map((item) => {
            const style = statusStyles[item.status] ?? statusStyles.upcoming;
            const isCurrent = item.status === 'current';

            // Highlight dates that are announced as TBA
            const isTBA = /tba|to be announced/i.test(item.date);

            return (
              <li
                key={item.id}
                className={`group relative flex items-start gap-5 overflow-hidden rounded-xl border px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.015] ${style.bg} ${
                  isCurrent ? 'ring-1 ring-[#E5A82B]/20' : ''
                }`}
              >
                {/* Hover light sweep */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#1F3589]/[0.035] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                {/* Current deadline gold accent */}
                {isCurrent && (
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#F8D878] via-[#E5A82B] to-[#B78320] shadow-[0_0_12px_rgba(229,168,43,0.4)]"
                  />
                )}

                {/* Timeline dot */}
                <div className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center">
                  {isCurrent && (
                    <>
                      <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#E5A82B]/10" />
                      <span className="absolute h-6 w-6 rounded-full bg-[#E5A82B]/15 shadow-[0_0_18px_rgba(229,168,43,0.25)]" />
                    </>
                  )}

                  <div
                    className={`relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-md transition-all duration-300 group-hover:scale-125 ${style.dot} ${
                      isCurrent
                        ? 'shadow-[0_0_15px_rgba(229,168,43,0.65)]'
                        : 'group-hover:shadow-[0_0_12px_rgba(31,53,137,0.35)]'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Event information */}
                <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex-1">
                    {isCurrent && (
                      <span className="mb-1.5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A87512]">
                        <Sparkles size={11} />
                        Current deadline
                      </span>
                    )}

                    <span className={`block text-base leading-relaxed sm:text-[17px] ${style.text}`}>
                      {item.event}
                    </span>
                  </div>

                  {/* Date badge */}
                  <span
                    className={`inline-flex shrink-0 items-center gap-2 rounded-lg border border-current/10 bg-white/70 px-4 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:border-current/20 group-hover:shadow-md ${
                      isTBA
                        ? 'text-[#B78320] shadow-[0_0_12px_rgba(229,168,43,0.12)]'
                        : style.date
                    }`}
                  >
                    <Calendar
                      size={16}
                      className={isTBA ? 'text-[#E5A82B]' : isCurrent ? 'text-[#E5A82B]' : 'text-[#1F3589]/60'}
                      aria-hidden="true"
                    />
                    {item.date}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Footer note */}
        <div className="group flex items-center gap-2 rounded-full border border-[#1F3589]/10 bg-white/60 px-5 py-3 shadow-sm backdrop-blur-md transition-all hover:border-[#E5A82B]/30 hover:shadow-[0_0_20px_rgba(229,168,43,0.08)]">
          <Clock
            size={15}
            className="shrink-0 text-[#1F3589]/50 transition-colors group-hover:text-[#E5A82B]"
          />
          <span className="text-sm text-[#64708A]">
            Keep track of every important conference milestone.
          </span>
        </div>
      </div>

      <style>{`
        @keyframes timelineFlow {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default ImportantDates;