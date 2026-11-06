

// import { motion } from 'motion/react';
// import {
//   ExternalLink,
//   BookOpen,
//   FileText,
//   BadgeCheck,
// } from 'lucide-react';

// import { SectionHeading } from '../ui/SectionHeading';
// import { Card } from '../ui/Card';
// import { journalPublications, proceedings } from '../../data/publications';

// export function Publications() {
//   return (
//     <section
//       id="publications"
//       aria-labelledby="publications-heading"
//       className="relative isolate overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12"
//       style={{
//         background:
//           'radial-gradient(circle at 50% 0%, #FEF7E6 0%, #FFFFFF 55%, #F8F5EC 100%)',
//       }}
//     >
//       {/* Ambient glow */}
//       <div
//         className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full blur-[100px]"
//         style={{ background: 'rgba(31,53,137,0.07)' }}
//       />

//       <div
//         className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full blur-[100px]"
//         style={{ background: 'rgba(229,168,43,0.12)' }}
//       />

//       <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6">

//         {/* Section heading */}
//         <SectionHeading
//           title="Publication opportunities"
//           subtitle="Selected papers will be recommended for publication in Scopus / ABDC indexed journals."
//           id="publications-heading"
//         />

//         {/* Publications layout */}
//         <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">

//           {/* Journals */}
//           <div className="lg:col-span-2">

//             <h3
//               className="mb-3 flex items-center gap-2 text-base font-bold text-navy sm:text-lg"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               <BookOpen size={17} className="text-gold" aria-hidden="true" />
//               Partner Journals
//             </h3>

//             <ol className="flex flex-col gap-2.5">
//               {journalPublications.map((journal, index) => (
//                 <motion.li
//                   key={journal.id}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.1 }}
//                   transition={{
//                     duration: 0.4,
//                     delay: index * 0.05,
//                   }}
//                 >
//                   <Card
//                     className="
//                       group relative flex items-start
//                       gap-2.5 overflow-hidden rounded-xl
//                       border border-navy/10
//                       bg-white/80 p-3.5
//                       shadow-[0_5px_20px_rgba(31,53,137,0.04)]
//                       backdrop-blur-md
//                       transition-all duration-300
//                       hover:-translate-y-1
//                       hover:border-gold/40
//                       hover:shadow-[0_12px_30px_rgba(31,53,137,0.09)]
//                       sm:p-4
//                     "
//                   >
//                     {/* Accent line */}
//                     <div
//                       className="
//                         absolute inset-y-0 left-0 w-1
//                         origin-bottom scale-y-0
//                         bg-gradient-to-b from-navy to-gold
//                         transition-transform duration-300
//                         group-hover:scale-y-100
//                       "
//                     />

//                     {/* Number */}
//                     <span
//                       className="
//                         shrink-0 pt-0.5
//                         font-serif text-lg font-bold
//                         leading-none text-gold/60
//                         sm:text-xl
//                       "
//                       style={{ fontFamily: 'var(--font-serif)' }}
//                       aria-hidden="true"
//                     >
//                       {String(journal.id).padStart(2, '0')}
//                     </span>

//                     {/* Journal details */}
//                     <div className="min-w-0 flex-1">

//                       <p className="text-sm font-bold leading-snug text-navy">
//                         {journal.name}
//                       </p>

//                       {/* Indexing tags */}
//                       <div className="mt-1.5 flex flex-wrap gap-1">
//                         {journal.indexing.map((idx) => {
//                           const isScopus = idx.startsWith('Scopus');

//                           return (
//                             <span
//                               key={idx}
//                               className="
//                                 inline-flex items-center gap-1
//                                 rounded-full border px-2 py-0.5
//                                 text-[10px] font-bold
//                                 sm:text-[11px]
//                               "
//                               style={{
//                                 background: isScopus
//                                   ? 'rgba(229,168,43,0.12)'
//                                   : 'rgba(31,53,137,0.06)',
//                                 borderColor: isScopus
//                                   ? 'rgba(229,168,43,0.25)'
//                                   : 'rgba(31,53,137,0.12)',
//                                 color: isScopus
//                                   ? 'var(--color-gold-dark)'
//                                   : 'var(--color-navy)',
//                               }}
//                             >
//                               <BadgeCheck size={10} />
//                               {idx}
//                             </span>
//                           );
//                         })}
//                       </div>

//                       <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--color-text-muted)] sm:text-xs">
//                         {journal.publisher} — {journal.note}
//                       </p>
//                     </div>

//                     <ExternalLink
//                       size={13}
//                       className="
//                         mt-1 shrink-0 text-gold/60
//                         transition-colors duration-300
//                         group-hover:text-navy
//                       "
//                       aria-hidden="true"
//                     />
//                   </Card>
//                 </motion.li>
//               ))}
//             </ol>
//           </div>

//           {/* Proceedings */}
//           <div>
//             <h3
//               className="mb-3 flex items-center gap-2 text-base font-bold text-navy sm:text-lg"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               <FileText size={17} className="text-gold" aria-hidden="true" />
//               Conference Proceedings
//             </h3>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ y: -4 }}
//             >
//               <Card
//                 className="
//                   relative flex h-fit flex-col
//                   gap-3 overflow-hidden rounded-xl
//                   border border-gold/25
//                   bg-gradient-to-br
//                   from-white via-[#FEF7E6] to-[#FFF3D6]
//                   p-4
//                   shadow-[0_12px_35px_rgba(229,168,43,0.10)]
//                   sm:p-5
//                 "
//               >
//                 {/* Top accent */}
//                 <div
//                   className="
//                     absolute inset-x-0 top-0 h-1
//                     bg-gradient-to-r
//                     from-navy via-gold to-navy
//                   "
//                 />

//                 {/* Icon */}
//                 <div
//                   className="
//                     flex h-10 w-10 items-center
//                     justify-center rounded-lg
//                     bg-gradient-to-br from-navy to-[#101D4B]
//                     text-gold shadow-md
//                   "
//                 >
//                   <BookOpen size={20} />
//                 </div>

//                 <p className="text-sm font-bold leading-snug text-navy sm:text-base">
//                   {proceedings.title}
//                 </p>

//                 {/* ISBN and publisher */}
//                 <div className="flex flex-col gap-2.5">

//                   <div>
//                     <p className="eyebrow mb-1">ISBN</p>
//                     <p className="text-xs font-semibold text-navy sm:text-sm">
//                       {proceedings.isbn}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="eyebrow mb-1">Publisher</p>
//                     <p className="text-xs leading-relaxed text-navy sm:text-sm">
//                       {proceedings.publisher}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Indexed in */}
//                 <div>
//                   <p className="eyebrow mb-1.5">Indexed in</p>

//                   <div className="flex flex-wrap gap-1">
//                     {proceedings.indexed.map((idx) => (
//                       <span
//                         key={idx}
//                         className="
//                           rounded-full border
//                           border-navy/10 bg-navy/5
//                           px-2 py-0.5
//                           text-[11px] font-semibold text-navy
//                         "
//                       >
//                         {idx}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Note */}
//                 <p
//                   className="
//                     border-t border-gold/20 pt-2.5
//                     text-[11px] leading-relaxed
//                     text-[var(--color-text-muted)]
//                     sm:text-xs
//                   "
//                 >
//                   {proceedings.note}
//                 </p>

//               </Card>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Publications;


import { motion } from 'motion/react';
import {
  ExternalLink,
  BookOpen,
  FileText,
  BadgeCheck,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { journalPublications, proceedings } from '../../data/publications';

export function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="relative isolate overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 xl:px-12"
      style={{
        background:
          'radial-gradient(circle at 50% 0%, #FEF7E6 0%, #FFFFFF 55%, #F8F5EC 100%)',
      }}
    >
      {/* Ambient Glow */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full blur-[100px]"
        style={{ background: 'rgba(31,53,137,0.07)' }}
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full blur-[100px]"
        style={{ background: 'rgba(229,168,43,0.12)' }}
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 lg:gap-12">

        {/* Section Heading */}
        <div className="w-full text-center">
          <SectionHeading
            title="Publication opportunities"
            subtitle="Selected papers will be recommended for publication in Scopus / ABDC indexed journals."
            id="publications-heading"
          />
        </div>

        {/* Publications Layout */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">

          {/* Journals */}
          <div className="lg:col-span-2">

            <h3
              className="mb-5 flex items-center gap-2 text-base font-bold text-navy sm:text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <BookOpen size={19} className="text-gold" aria-hidden="true" />
              Partner Journals
            </h3>

            <ol className="flex flex-col gap-3">
              {journalPublications.map((journal, index) => (
                <motion.li
                  key={journal.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                >
                  <Card
                    className="
                      group relative flex items-start
                      gap-3 overflow-hidden rounded-xl
                      border border-navy/10
                      bg-white/80 p-4
                      shadow-[0_5px_20px_rgba(31,53,137,0.04)]
                      backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-gold/40
                      hover:shadow-[0_12px_30px_rgba(31,53,137,0.09)]
                      sm:gap-4 sm:p-5
                    "
                  >
                    {/* Accent Line */}
                    <div
                      className="
                        absolute inset-y-0 left-0 w-1
                        origin-bottom scale-y-0
                        bg-gradient-to-b from-navy to-gold
                        transition-transform duration-300
                        group-hover:scale-y-100
                      "
                    />

                    {/* Number */}
                    <span
                      className="
                        shrink-0 pt-0.5
                        font-serif text-lg font-bold
                        leading-none text-gold/60
                        sm:text-xl
                      "
                      style={{ fontFamily: 'var(--font-serif)' }}
                      aria-hidden="true"
                    >
                      {String(journal.id).padStart(2, '0')}
                    </span>

                    {/* Journal Details */}
                    <div className="min-w-0 flex-1">

                      <p className="text-sm font-bold leading-snug text-navy sm:text-base">
                        {journal.name}
                      </p>

                      {/* Indexing Tags */}
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {journal.indexing.map((idx) => {
                          const isScopus = idx.startsWith('Scopus');

                          return (
                            <span
                              key={idx}
                              className="
                                inline-flex items-center gap-1
                                rounded-full border px-2.5 py-1
                                text-[10px] font-bold
                                sm:text-[11px]
                              "
                              style={{
                                background: isScopus
                                  ? 'rgba(229,168,43,0.12)'
                                  : 'rgba(31,53,137,0.06)',
                                borderColor: isScopus
                                  ? 'rgba(229,168,43,0.25)'
                                  : 'rgba(31,53,137,0.12)',
                                color: isScopus
                                  ? 'var(--color-gold-dark)'
                                  : 'var(--color-navy)',
                              }}
                            >
                              <BadgeCheck size={11} />
                              {idx}
                            </span>
                          );
                        })}
                      </div>

                      <p className="mt-2 text-[11px] leading-relaxed text-[var(--color-text-muted)] sm:text-xs">
                        {journal.publisher} — {journal.note}
                      </p>
                    </div>

                    <ExternalLink
                      size={14}
                      className="
                        mt-1 shrink-0 text-gold/60
                        transition-colors duration-300
                        group-hover:text-navy
                      "
                      aria-hidden="true"
                    />
                  </Card>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Conference Proceedings */}
          <div>
            <h3
              className="mb-5 flex items-center gap-2 text-base font-bold text-navy sm:text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <FileText size={19} className="text-gold" aria-hidden="true" />
              Conference Proceedings
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Card
                className="
                  relative flex h-fit flex-col
                  gap-4 overflow-hidden rounded-2xl
                  border border-gold/25
                  bg-gradient-to-br
                  from-white via-[#FEF7E6] to-[#FFF3D6]
                  p-5
                  shadow-[0_12px_35px_rgba(229,168,43,0.10)]
                  sm:p-6
                "
              >
                {/* Top Accent */}
                <div
                  className="
                    absolute inset-x-0 top-0 h-1
                    bg-gradient-to-r
                    from-navy via-gold to-navy
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex h-11 w-11 items-center
                    justify-center rounded-xl
                    bg-gradient-to-br from-navy to-[#101D4B]
                    text-gold shadow-md
                  "
                >
                  <BookOpen size={21} />
                </div>

                <p className="text-base font-bold leading-snug text-navy sm:text-lg">
                  {proceedings.title}
                </p>

                {/* ISBN and Publisher */}
                <div className="flex flex-col gap-4">

                  <div>
                    <p className="eyebrow mb-1">ISBN</p>
                    <p className="text-xs font-semibold text-navy sm:text-sm">
                      {proceedings.isbn}
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow mb-1">Publisher</p>
                    <p className="text-xs leading-relaxed text-navy sm:text-sm">
                      {proceedings.publisher}
                    </p>
                  </div>

                </div>

                {/* Indexed In */}
                <div>
                  <p className="eyebrow mb-2">Indexed in</p>

                  <div className="flex flex-wrap gap-1.5">
                    {proceedings.indexed.map((idx) => (
                      <span
                        key={idx}
                        className="
                          rounded-full border
                          border-navy/10 bg-navy/5
                          px-2.5 py-1
                          text-[10px] font-semibold text-navy
                          sm:text-[11px]
                        "
                      >
                        {idx}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <p
                  className="
                    border-t border-gold/20 pt-3
                    text-[11px] leading-relaxed
                    text-[var(--color-text-muted)]
                    sm:text-xs
                  "
                >
                  {proceedings.note}
                </p>

              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Publications;

