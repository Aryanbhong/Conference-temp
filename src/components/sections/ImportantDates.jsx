/**
 * ImportantDates.jsx – Timeline of key dates.
 */

import { Calendar, Clock } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { importantDates } from '../../data/dates';

const statusStyles = {
  past:     { bg: 'bg-[var(--color-border)]',    dot: 'bg-gray-400',      text: 'text-gray-400 line-through' },
  current:  { bg: 'bg-gold/10 border border-gold/40', dot: 'bg-gold',      text: 'text-navy font-semibold' },
  upcoming: { bg: 'bg-white',                    dot: 'bg-navy',          text: 'text-navy' },
};

export function ImportantDates() {
  return (
    <section
      id="important-dates"
      aria-labelledby="dates-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Important Dates"
          title="Mark your calendar"
          id="dates-heading"
        />

        {/* Timeline */}
        <ol className="w-full flex flex-col gap-0 relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5 bg-[var(--color-border)]"
            aria-hidden="true"
          />

          {importantDates.map((item, idx) => {
            const style = statusStyles[item.status] ?? statusStyles.upcoming;
            return (
              <li
                key={item.id}
                className={`relative flex items-start gap-5 rounded-xl px-5 py-4 ml-0 transition-colors ${style.bg} ${idx > 0 ? 'mt-2' : ''}`}
              >
                {/* Dot */}
                <div
                  className={`w-4 h-4 rounded-full shrink-0 mt-1 border-2 border-white shadow ${style.dot} z-10`}
                  aria-hidden="true"
                />

                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className={`text-sm flex-1 ${style.text}`}>
                    {item.event}
                  </span>
                  <span className="inline-flex items-center gap-1.5 shrink-0 text-xs font-semibold text-gold">
                    <Calendar size={13} aria-hidden="true" />
                    {item.date}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default ImportantDates;

