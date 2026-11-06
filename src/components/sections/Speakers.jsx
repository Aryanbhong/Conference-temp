// // /**
// //  * Speakers.jsx – Speaker cards grid grouped by category.
// //  */

// // import { SectionHeading } from '../ui/SectionHeading';
// // import { Card } from '../ui/Card';
// // import { speakerCategories } from '../../data/speakers';

// // /** Generate initials from a name, handling "[Name TBA]" placeholders */
// // function getInitials(name) {
// //   const clean = name.replace(/\[.*?\]/g, '').trim();
// //   return clean
// //     .split(' ')
// //     .filter(Boolean)
// //     .slice(0, 2)
// //     .map((w) => w[0].toUpperCase())
// //     .join('') || '?';
// // }

// // function SpeakerCard({ speaker }) {
// //   const initials = getInitials(speaker.name);
// //   const isPlaceholder = speaker.name.includes('[');

// //   return (
// //     <Card className="p-6 flex flex-col items-center text-center gap-3">
// //       {/* Avatar */}
// //       <div
// //         className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-[var(--color-border)]"
// //         aria-hidden="true"
// //       >
// //         {speaker.photo ? (
// //           <img
// //             src={speaker.photo}
// //             alt={speaker.name}
// //             className="w-full h-full object-cover"
// //             loading="lazy"
// //           />
// //         ) : (
// //           <div
// //             className="w-full h-full flex items-center justify-center text-2xl font-bold text-white"
// //             style={{ background: 'var(--color-navy)' }}
// //           >
// //             {initials}
// //           </div>
// //         )}
// //       </div>

// //       <div>
// //         <p
// //           className={`font-bold text-base leading-snug ${isPlaceholder ? 'text-[var(--color-text-muted)] italic text-sm' : 'text-navy'}`}
// //           style={{ fontFamily: 'var(--font-serif)' }}
// //         >
// //           {speaker.name}
// //         </p>
// //         <p className="text-gold text-xs font-semibold mt-0.5">{speaker.role}</p>
// //         <p className="text-[var(--color-text-body)] text-xs mt-1">{speaker.affiliation}</p>
// //       </div>
// //     </Card>
// //   );
// // }

// // export function Speakers() {
// //   return (
// //     <section
// //       id="speakers"
// //       aria-labelledby="speakers-heading"
// //       className="py-20 px-4 md:px-8"
// //       style={{ background: 'var(--color-white)' }}
// //     >
// //       <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
// //         <SectionHeading
// //           eyebrow="Speakers"
// //           title="Distinguished guests & speakers"
// //           subtitle="Details to be announced. Check back soon."
// //           id="speakers-heading"
// //         />

// //         {speakerCategories.map((group) => (
// //           <div key={group.category} className="w-full">
// //             <h3
// //               className="text-navy font-bold text-lg mb-6 text-center"
// //               style={{ fontFamily: 'var(--font-serif)' }}
// //             >
// //               {group.category}
// //             </h3>
// //             <div
// //               className={`grid gap-6 justify-center ${
// //                 group.speakers.length === 1
// //                   ? 'grid-cols-1 max-w-xs mx-auto'
// //                   : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
// //               }`}
// //             >
// //               {group.speakers.map((s) => (
// //                 <SpeakerCard key={s.id} speaker={s} />
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default Speakers;



// /**
//  * Speakers.jsx – Premium animated speaker cards.
//  */

// import { motion } from "motion/react";
// import { SectionHeading } from "../ui/SectionHeading";
// import { speakerCategories } from "../../data/speakers";

// function getInitials(name) {
//   const clean = name.replace(/\[.*?\]/g, "").trim();

//   return (
//     clean
//       .split(" ")
//       .filter(Boolean)
//       .slice(0, 2)
//       .map((word) => word[0].toUpperCase())
//       .join("") || "?"
//   );
// }

// function SpeakerCard({ speaker, index }) {
//   const initials = getInitials(speaker.name);
//   const isPlaceholder = speaker.name.includes("[");

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 35, scale: 0.96 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.12,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{
//         y: -10,
//         scale: 1.025,
//         transition: { duration: 0.25 },
//       }}
//       className="group relative h-full"
//     >
//       {/* Outer glow */}
//       <div
//         className="absolute -inset-[1px] rounded-2xl opacity-0 blur-md transition duration-500 group-hover:opacity-100"
//          style={{ background: 'var(--color-white)' }}
//       />

//       {/* Card */}
//       <div
//         className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border p-7 text-center"
//         style={{
//           background:
//             "linear-gradient(145deg, #ffffff 0%, #FEF7E6 100%)",
//           borderColor: "rgba(31, 53, 137, 0.12)",
//           boxShadow: "0 12px 35px rgba(31, 53, 137, 0.07)",
//         }}
//       >
//         {/* Decorative corner glow */}
//         <div
//           className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-40 blur-3xl transition-all duration-500 group-hover:opacity-90"
//           style={{ background: "#E5A82B" }}
//         />

//         {/* Top accent */}
//         <div
//           className="absolute left-0 top-0 h-1 w-full"
//           style={{
//             background:
//               "linear-gradient(90deg, #1F3589, #E5A82B, #1F3589)",
//           }}
//         />

//         {/* Speaker number */}
//         <div className="absolute right-4 top-4">
//           <span
//             className="text-[10px] font-bold tracking-[0.18em]"
//             style={{ color: "rgba(31, 53, 137, 0.35)" }}
//           >
//             SPEAKER {String(index + 1).padStart(2, "0")}
//           </span>
//         </div>

//         {/* Avatar */}
//         <motion.div
//           whileHover={{ rotate: 4, scale: 1.07 }}
//           transition={{ type: "spring", stiffness: 250, damping: 15 }}
//           className="relative mb-6 mt-5"
//         >
//           {/* Avatar glow ring */}
//           <motion.div
//             animate={{
//               opacity: [0.35, 0.7, 0.35],
//               scale: [1, 1.06, 1],
//             }}
//             transition={{
//               duration: 3.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute -inset-2 rounded-full blur-md"
//             style={{
//               background:
//                 "linear-gradient(135deg, #E5A82B, #1F3589)",
//             }}
//           />

//           <div
//             className="relative h-28 w-28 overflow-hidden rounded-full border-[3px] p-1"
//             style={{
//               borderColor: "#E5A82B",
//               background: "#ffffff",
//               boxShadow: "0 0 0 5px rgba(229, 168, 43, 0.10)",
//             }}
//           >
//             <div className="h-full w-full overflow-hidden rounded-full">
//               {speaker.photo ? (
//                 <img
//                   src={speaker.photo}
//                   alt={speaker.name}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                   loading="lazy"
//                 />
//               ) : (
//                 <div
//                   className="flex h-full w-full items-center justify-center text-3xl font-bold text-white"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #1F3589 0%, #15265F 100%)",
//                   }}
//                 >
//                   {initials}
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.div>

//         {/* Role badge */}
//         <span
//           className="mb-4 rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
//           style={{
//             color: "#9A6A08",
//             background: "rgba(229, 168, 43, 0.10)",
//             borderColor: "rgba(229, 168, 43, 0.30)",
//           }}
//         >
//           {speaker.role}
//         </span>

//         {/* Name */}
//         <h3
//           className={`mb-2 text-lg font-bold leading-snug ${
//             isPlaceholder
//               ? "text-sm italic"
//               : "text-[#1F3589]"
//           }`}
//           style={{
//             fontFamily: "var(--font-serif)",
//             color: isPlaceholder ? "#8B8B8B" : "#1F3589",
//           }}
//         >
//           {speaker.name}
//         </h3>

//         {/* Affiliation */}
//         <p
//           className="text-xs leading-6"
//           style={{ color: "rgba(31, 53, 137, 0.68)" }}
//         >
//           {speaker.affiliation}
//         </p>

//         {/* Bottom decorative line */}
//         <div className="mt-auto w-full pt-7">
//           <motion.div
//             initial={{ width: "25%" }}
//             whileHover={{ width: "100%" }}
//             className="mx-auto h-[2px] rounded-full transition-all duration-500"
//             style={{
//               background:
//                 "linear-gradient(90deg, transparent, #E5A82B, transparent)",
//             }}
//           />
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export function Speakers() {
//   return (
//     <section
//       id="speakers"
//       aria-labelledby="speakers-heading"
//       className="relative isolate overflow-hidden px-4 py-24 md:px-8"
//       style={{ background: 'var(--color-white)' }}
//     >
//       {/* Background decoration */}
//       <div
//         className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full blur-[110px]"
//       />

//       <div
//         className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full blur-[110px]"
//       />

//       <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center"
//         >
//           <SectionHeading
//             title="Distinguished guests & speakers"
//             subtitle="Details to be announced. Check back soon."
//             id="speakers-heading"
//           />

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 110 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="mx-auto mt-6 h-[3px] rounded-full"
//             style={{
//               background: "linear-gradient(90deg, #1F3589, #E5A82B)",
//               boxShadow: "0 0 15px rgba(229, 168, 43, 0.35)",
//             }}
//           />
//         </motion.div>

//         {/* Speaker categories */}
//         {speakerCategories.map((group, groupIndex) => (
//           <motion.div
//             key={group.category}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
//             className="w-full"
//           >
//             {/* Category heading */}
//             <div className="mb-9 flex flex-col items-center">
//               <span
//                 className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em]"
//                 style={{ color: "#B8860B" }}
//               >
//                 IC-NBITS 2027
//               </span>

//               <h2
//                 className="text-center text-xl font-bold md:text-2xl"
//                 style={{
//                   color: "#1F3589",
//                   fontFamily: "var(--font-serif)",
//                 }}
//               >
//                 {group.category}
//               </h2>

//               <div
//                 className="mt-4 h-px w-24"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, transparent, #E5A82B, transparent)",
//                 }}
//               />
//             </div>

//             {/* Cards */}
//             <div
//               className={`grid items-stretch gap-7 ${
//                 group.speakers.length === 1
//                   ? "mx-auto max-w-sm grid-cols-1"
//                   : group.speakers.length === 2
//                     ? "mx-auto max-w-3xl grid-cols-1 sm:grid-cols-2"
//                     : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
//               }`}
//             >
//               {group.speakers.map((speaker, index) => (
//                 <SpeakerCard
//                   key={speaker.id}
//                   speaker={speaker}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Speakers;



import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { speakerCategories } from "../../data/speakers";

function getInitials(name) {
  const clean = name.replace(/\[.*?\]/g, "").trim();

  return (
    clean
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("") || "?"
  );
}

function SpeakerCard({ speaker, index }) {
  const initials = getInitials(speaker.name);
  const isPlaceholder = speaker.name.includes("[");

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group relative h-full"
    >
      <div
        className="relative flex h-full items-center gap-4 overflow-hidden rounded-xl border p-4 sm:p-5"
        style={{
          background: "linear-gradient(110deg, #ffffff 0%, #FEF7E6 100%)",
          borderColor: "rgba(31, 53, 137, 0.12)",
          boxShadow: "0 8px 24px rgba(31, 53, 137, 0.06)",
        }}
      >
        {/* Top accent */}
        <div
          className="absolute left-0 top-0 h-full w-1"
          style={{
            background: "linear-gradient(180deg, #1F3589, #E5A82B)",
          }}
        />

        {/* Speaker image */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="relative ml-1 h-20 w-20 shrink-0 sm:h-24 sm:w-24"
        >
          <div
            className="h-full w-full overflow-hidden rounded-full border-[3px] p-1"
            style={{
              borderColor: "#E5A82B",
              background: "#ffffff",
              boxShadow: "0 0 0 4px rgba(229, 168, 43, 0.10)",
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-full">
              {speaker.photo ? (
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center text-xl font-bold text-white sm:text-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F3589 0%, #15265F 100%)",
                  }}
                >
                  {initials}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Speaker information */}
        <div className="min-w-0 flex-1 py-1">
          <span
            className="mb-2 inline-block rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
            style={{
              color: "#9A6A08",
              background: "rgba(229, 168, 43, 0.10)",
              borderColor: "rgba(229, 168, 43, 0.25)",
            }}
          >
            {speaker.role}
          </span>

          <h3
            className={`text-base font-bold leading-snug sm:text-lg ${
              isPlaceholder ? "italic" : ""
            }`}
            style={{
              fontFamily: "var(--font-serif)",
              color: isPlaceholder ? "#8B8B8B" : "#1F3589",
            }}
          >
            {speaker.name}
          </h3>

          <p
            className="mt-1 text-xs leading-relaxed sm:text-sm"
            style={{ color: "rgba(31, 53, 137, 0.68)" }}
          >
            {speaker.affiliation}
          </p>
        </div>

        {/* Speaker number */}
        <span
          className="absolute right-3 top-3 text-[9px] font-bold tracking-wider"
          style={{ color: "rgba(31, 53, 137, 0.30)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
}

export function Speakers() {
  return (
    <section
      id="speakers"
      aria-labelledby="speakers-heading"
      className="relative isolate overflow-hidden px-4 py-14 md:px-8 md:py-16"
      style={{ background: "var(--color-white)" }}
    >
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-9">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeading
            title="Distinguished guests & speakers"
            subtitle="Details to be announced. Check back soon."
            id="speakers-heading"
          />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-4 h-[3px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #1F3589, #E5A82B)",
            }}
          />
        </motion.div>

        {/* Speaker categories */}
        {speakerCategories.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="w-full"
          >
            {/* Category heading */}
            <div className="mb-5 flex flex-col items-center">
              <span
                className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{ color: "#B8860B" }}
              >
                IC-NBITS 2027
              </span>

              <h2
                className="text-center text-lg font-bold md:text-xl"
                style={{
                  color: "#1F3589",
                  fontFamily: "var(--font-serif)",
                }}
              >
                {group.category}
              </h2>

              <div
                className="mt-3 h-px w-20"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #E5A82B, transparent)",
                }}
              />
            </div>

            {/* Horizontal speaker cards */}
            <div
              className={`grid items-stretch gap-4 ${
                group.speakers.length === 1
                  ? "mx-auto max-w-xl grid-cols-1"
                  : "grid-cols-1 lg:grid-cols-2"
              }`}
            >
              {group.speakers.map((speaker, index) => (
                <SpeakerCard
                  key={speaker.id}
                  speaker={speaker}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;

