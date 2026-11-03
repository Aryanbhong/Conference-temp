// /**
//  * QuickInfoBar.jsx – 4-column stats bar that overlaps the hero bottom.
//  */

// import { Calendar, Monitor, MapPin, LayoutGrid } from 'lucide-react';
// import { conference } from '../../data/conference';

// const stats = [
//   {
//     id: 'date',
//     Icon: Calendar,
//     label: 'DATE',
//     value: '[DATES]',
//     valueFrom: 'dates',
//   },
//   {
//     id: 'mode',
//     Icon: Monitor,
//     label: 'MODE',
//     value: 'Hybrid',
//     valueFrom: 'mode',
//   },
//   {
//     id: 'venue',
//     Icon: MapPin,
//     label: 'VENUE',
//     value: 'SIESCOMS, Nerul',
//     valueFrom: 'venue',
//   },
//   {
//     id: 'tracks',
//     Icon: LayoutGrid,
//     label: 'TRACKS',
//     value: '6 tracks · 40+ topics',
//   },
// ];

// export function QuickInfoBar() {
//   return (
//     <div className="relative z-10 -mt-1">
//       <div className="max-w-5xl mx-auto px-4 md:px-8">
//         <div
//           className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]
//             bg-white shadow-xl rounded-xl border border-[var(--color-border)] overflow-hidden"
//           role="list"
//           aria-label="Conference quick facts"
//         >
//           {stats.map(({ id, Icon, label, value, valueFrom }) => {
//             const displayValue = valueFrom ? conference[valueFrom] : value;
//             return (
//               <div
//                 key={id}
//                 role="listitem"
//                 className="flex flex-col items-center justify-center gap-1 px-4 py-5 text-center
//                   first:rounded-l-xl last:rounded-r-xl hover:bg-grey-blue transition-colors duration-150"
//               >
//                 <Icon
//                   size={18}
//                   className="text-gold mb-1"
//                   aria-hidden="true"
//                 />
//                 <span className="eyebrow">{label}</span>
//                 <span className="font-bold text-navy text-sm md:text-base leading-snug">
//                   {displayValue}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuickInfoBar;

import { Calendar, Monitor, MapPin, LayoutGrid } from "lucide-react";
import { conference } from "../../data/conference";

const stats = [
  {
    id: "date",
    Icon: Calendar,
    label: "DATE",
    value: "[DATES]",
    valueFrom: "dates",
  },
  {
    id: "mode",
    Icon: Monitor,
    label: "MODE",
    value: "Hybrid",
    valueFrom: "mode",
  },
  {
    id: "venue",
    Icon: MapPin,
    label: "VENUE",
    value: "SIESCOMS, Nerul",
    valueFrom: "venue",
  },
  {
    id: "tracks",
    Icon: LayoutGrid,
    label: "TRACKS",
    value: "6 tracks · 40+ topics",
  },
];

export function QuickInfoBar() {
  return (
    <section className="relative z-20 -mt-8 px-4 md:-mt-10 md:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Glass Information Card */}
        <div
          role="list"
          aria-label="Conference quick facts"
          className="
            group relative grid grid-cols-2
            overflow-hidden rounded-2xl

            border border-white/80
            bg-white/80
            shadow-[0_20px_60px_rgba(31,53,137,0.12)]

            backdrop-blur-2xl
            transition-all duration-500

            hover:shadow-[0_25px_70px_rgba(31,53,137,0.18)]

            md:grid-cols-4
          "
        >
          {/* Gold top accent */}
          <div
            className="
              absolute left-0 top-0 h-[3px] w-full
              bg-gradient-to-r
              from-transparent via-[#E5A82B] to-transparent
            "
          />

          {stats.map(({ id, Icon, label, value, valueFrom }, index) => {
            const displayValue = valueFrom
              ? conference[valueFrom]
              : value;

            return (
              <div
                key={id}
                role="listitem"
                className={`
                  group/item relative flex flex-col
                  items-center justify-center
                  gap-2 px-3 py-6 text-center

                  border-white/70
                  transition-all duration-300

                  hover:bg-[#FEF7E6]/70

                  ${index < 2 ? "border-b md:border-b-0" : ""}
                  ${index % 2 === 0 ? "border-r" : ""}
                  ${index === 1 ? "md:border-r" : ""}
                  ${index === 2 ? "md:border-r" : ""}
                `}
              >
                {/* Icon glass container */}
                <div
                  className="
                    relative flex h-11 w-11
                    items-center justify-center
                    rounded-xl

                    border border-[#E5A82B]/20
                    bg-gradient-to-br
                    from-[#FEF7E6]
                    to-white

                    shadow-[0_4px_15px_rgba(229,168,43,0.10)]

                    transition-all duration-300

                    group-hover/item:-translate-y-1
                    group-hover/item:border-[#E5A82B]/50
                    group-hover/item:shadow-[0_8px_25px_rgba(229,168,43,0.25)]
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="
                      text-[#E5A82B]
                      transition-all duration-300
                      group-hover/item:scale-110
                      group-hover/item:text-[#1F3589]
                    "
                    aria-hidden="true"
                  />
                </div>

                {/* Label */}
                <span
                  className="
                    text-[10px] font-bold
                    uppercase tracking-[0.18em]
                    text-[#A77917]
                  "
                >
                  {label}
                </span>

                {/* Value */}
                <span
                  className="
                    text-sm font-bold leading-snug
                    text-[#1F3589]
                    md:text-base
                  "
                >
                  {displayValue}
                </span>

                {/* Hover accent */}
                <div
                  className="
                    absolute bottom-0 left-1/2
                    h-[2px] w-0
                    -translate-x-1/2
                    bg-[#E5A82B]

                    transition-all duration-300
                    group-hover/item:w-1/2
                  "
                />
              </div>
            );
          })}
        </div>

        {/* Floating gold decorative dots */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-2 -top-3
            h-6 w-6 rounded-full
            bg-[#E5A82B]/20 blur-md
          "
        />
      </div>
    </section>
  );
}

export default QuickInfoBar;
