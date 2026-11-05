
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
      className="relative isolate overflow-hidden px-4 py-12 sm:py-14 md:px-8 md:py-16"
      style={{ background: 'var(--color-white)' }}
    >
      {/* Ambient glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#1F3589]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#E5A82B]/10 blur-[100px]"
      />

      <Sparkles
        aria-hidden="true"
        size={15}
        className="pointer-events-none absolute right-[12%] top-20 animate-pulse text-[#E5A82B]/40"
      />

      <Sparkles
        aria-hidden="true"
        size={10}
        className="pointer-events-none absolute bottom-24 left-[10%] animate-pulse text-[#1F3589]/30"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8">
        <SectionHeading
          title="Mark your calendar"
          id="dates-heading"
        />

        {/* Timeline */}
        <ol className="relative flex w-full flex-col gap-2.5">

          {/* Glowing timeline rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[22px] top-5 w-[2px] overflow-hidden rounded-full bg-gradient-to-b from-[#1F3589]/10 via-[#E5A82B]/60 to-[#1F3589]/10"
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
                className={`group relative flex items-start gap-4 overflow-hidden rounded-lg border px-4 py-4 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.015] ${style.bg} ${
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
                <div className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                  {isCurrent && (
                    <>
                      <span className="absolute h-7 w-7 animate-ping rounded-full bg-[#E5A82B]/10" />
                      <span className="absolute h-5 w-5 rounded-full bg-[#E5A82B]/15 shadow-[0_0_18px_rgba(229,168,43,0.25)]" />
                    </>
                  )}

                  <div
                    className={`relative h-3 w-3 rounded-full border-2 border-white shadow-md transition-all duration-300 group-hover:scale-125 ${style.dot} ${
                      isCurrent
                        ? 'shadow-[0_0_15px_rgba(229,168,43,0.65)]'
                        : 'group-hover:shadow-[0_0_12px_rgba(31,53,137,0.35)]'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Event information */}
                <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex-1">
                    {isCurrent && (
                      <span className="mb-1 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A87512]">
                        <Sparkles size={10} />
                        Current deadline
                      </span>
                    )}

                    <span className={`block text-sm leading-relaxed sm:text-base ${style.text}`}>
                      {item.event}
                    </span>
                  </div>

                  {/* Date badge */}
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-md border border-current/10 bg-white/70 px-3 py-2 text-xs font-semibold backdrop-blur-sm transition-all duration-300 group-hover:border-current/20 group-hover:shadow-md ${
                      isTBA
                        ? 'text-[#B78320] shadow-[0_0_12px_rgba(229,168,43,0.12)]'
                        : style.date
                    }`}
                  >
                    <Calendar
                      size={14}
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
        <div className="group flex items-center gap-2 rounded-full border border-[#1F3589]/10 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all hover:border-[#E5A82B]/30 hover:shadow-[0_0_20px_rgba(229,168,43,0.08)]">
          <Clock
            size={13}
            className="shrink-0 text-[#1F3589]/50 transition-colors group-hover:text-[#E5A82B]"
          />
          <span className="text-xs text-[#64708A] sm:text-sm">
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
