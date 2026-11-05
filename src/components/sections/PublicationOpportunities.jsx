// import { motion } from "motion/react";
// import {
//   BadgeCheck,
//   BookOpen,
//   FileText,
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";

// import { SectionHeading } from "../ui/SectionHeading";


// const routes = [
//   {
//     title: "Journal of Global Marketing",
//     publisher: "Taylor & Francis Publication",
//     tags: ["Scopus Indexed"],
//   },
//   {
//     title: "South Asian Journal of Business and Management Cases (SAJBMC)",
//     publisher: "SAGE Publication",
//     tags: ["Scopus Indexed"],
//   },
//   {
//     title: "International Journal of Advances in Signal and Image Sciences",
//     publisher: "XLESCIENCE Publication",
//     tags: ["Scopus Indexed"],
//   },
//   {
//     title: "European Economics Letters",
//     publisher: "European Economics Letters Group",
//     tags: ["ABDC Indexed"],
//   },
//   {
//     title: "Transformational Management Review (TMR)",
//     publisher:
//       "Published by IILM — institutional, peer-reviewed, open-access journal",
//     tags: ["Peer Reviewed", "Open Access"],
//   },
//   {
//     title: "International Journal for Research Trends and Innovation",
//     publisher: "Peer-reviewed journal",
//     tags: ["Peer Reviewed"],
//   },
//   {
//     title: "Conference Proceedings with ISBN Number",
//     publisher: "Official conference proceedings with ISBN registration",
//     tags: ["ISBN Registered"],
//     featured: true,
//   },
// ];

// const featuredRoute = routes.find((route) => route.featured);

// function RouteCard({ route, index }) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 35 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{
//         duration: 0.65,
//         delay: index * 0.08,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{ y: -6 }}
//       className="group relative"
//     >
  
//       <div
//         className="absolute -inset-[1px] rounded-3xl opacity-0 blur-md transition duration-500 group-hover:opacity-100"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(229,168,43,0.6) 0%, rgba(31,53,137,0.4) 50%, rgba(229,168,43,0.6) 100%)",
//         }}
//       />

//       <div
//         className="relative flex h-full flex-col sm:flex-row items-start gap-5 overflow-hidden rounded-3xl border p-6 sm:gap-7 sm:p-8 backdrop-blur-md transition-all duration-300"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,247,230,0.6) 100%)",
//           borderColor: "rgba(31, 53, 137, 0.08)",
//           boxShadow:
//             "0 10px 30px -10px rgba(31, 53, 137, 0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
//         }}
//       >
//         {/* Subtle hover sweep sheen */}
//         <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

//         {/* Dynamic ambient corner highlight */}
//         <div
//           className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-70"
//           style={{ background: "#E5A82B" }}
//         />

//         {/* Number Badge */}
//         <motion.div
//           whileHover={{ rotate: 6, scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300, damping: 15 }}
//           className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-16 sm:w-16"
//           style={{
//             background: "linear-gradient(135deg, #1F3589 0%, #101D4B 100%)",
//             color: "#E5A82B",
//             boxShadow:
//               "0 8px 20px -4px rgba(31, 53, 137, 0.35), inset 0 1px 1px rgba(255,255,255,0.2)",
//           }}
//         >
//           <span
//             className="font-serif text-xl font-extrabold sm:text-2xl tracking-tight"
//             style={{ fontFamily: "var(--font-serif)" }}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </span>
//         </motion.div>

//         {/* Main Content Area */}
//         <div className="relative z-10 flex min-w-0 flex-1 flex-col">
//           <div className="flex items-start justify-between gap-4">
//             <h3
//               className="font-serif text-lg font-bold leading-snug tracking-tight sm:text-xl text-balance"
//               style={{
//                 color: "#1F3589",
//                 fontFamily: "var(--font-serif)",
//               }}
//             >
//               {route.title}
//             </h3>

//             <div
//               className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-[#1F3589] group-hover:text-white group-hover:border-transparent"
//               style={{
//                 borderColor: "rgba(31, 53, 137, 0.12)",
//                 color: "#B8860B",
//                 background: "rgba(255, 255, 255, 0.6)",
//               }}
//             >
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </div>
//           </div>

//           <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">
//             {route.publisher}
//           </p>

//           {/* Tags */}
//           <div className="mt-5 flex flex-wrap gap-2.5">
//             {route.tags.map((tag) => {
//               const isGoldTag =
//                 tag.includes("Scopus") || tag.includes("ABDC");

//               return (
//                 <span
//                   key={tag}
//                   className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-transform duration-300 group-hover:scale-[1.02]"
//                   style={{
//                     background: isGoldTag
//                       ? "linear-gradient(135deg, rgba(229, 168, 43, 0.18) 0%, rgba(229, 168, 43, 0.08) 100%)"
//                       : "linear-gradient(135deg, rgba(31, 53, 137, 0.08) 0%, rgba(31, 53, 137, 0.03) 100%)",
//                     borderColor: isGoldTag
//                       ? "rgba(229, 168, 43, 0.35)"
//                       : "rgba(31, 53, 137, 0.15)",
//                     color: isGoldTag ? "#855800" : "#1F3589",
//                     boxShadow: isGoldTag
//                       ? "0 2px 8px rgba(229, 168, 43, 0.12)"
//                       : "none",
//                   }}
//                 >
//                   <BadgeCheck size={14} aria-hidden="true" />
//                   {tag}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export function PublicationOpportunities() {
//   return (
//     <section
//       id="publication-opportunities"
//       aria-labelledby="publication-opportunities-heading"
//       className="relative isolate overflow-hidden px-4 py-28 md:px-8"
//       style={{
//         background:
//           "radial-gradient(circle at 50% 0%, #FEF7E6 0%, #FFFFFF 50%, #F8F5EC 100%)",
//       }}
//     >
//       {/* Background ambient lighting */}
//       <div
//         className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full blur-[140px] opacity-70"
//         style={{ background: "rgba(31, 53, 137, 0.08)" }}
//       />
//       <div
//         className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full blur-[140px] opacity-70"
//         style={{ background: "rgba(229, 168, 43, 0.15)" }}
//       />

//       {/* Top metallic divider bar */}
//       <motion.div
//         initial={{ scaleX: 0, opacity: 0 }}
//         whileInView={{ scaleX: 1, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2 }}
//         className="absolute left-1/2 top-0 h-[2px] w-2/3 -translate-x-1/2"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, #E5A82B, #1F3589, #E5A82B, transparent)",
//           boxShadow: "0 0 20px rgba(229, 168, 43, 0.5)",
//         }}
//       />

//       <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-20">
//         {/* Section heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative flex flex-col items-center text-center"
//         >
//           <SectionHeading
//             title="Where your research can be published"
//             subtitle="Papers presented at the conference will have opportunities for publication through the following routes, subject to standard review processes."
//             id="publication-opportunities-heading"
//           />

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 120 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="mt-6 h-[3px] rounded-full"
//             style={{
//               background: "linear-gradient(90deg, #1F3589, #E5A82B)",
//               boxShadow: "0 0 16px rgba(229, 168, 43, 0.5)",
//             }}
//           />
//         </motion.div>

//         {/* How it works banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//           className="group relative w-full overflow-hidden rounded-[2.5rem] border p-8 sm:p-14"
//           style={{
//             background:
//               "linear-gradient(135deg, #0D163A 0%, #1F3589 60%, #101D4B 100%)",
//             borderColor: "rgba(229, 168, 43, 0.3)",
//             boxShadow: "0 30px 80px -20px rgba(31, 53, 137, 0.35)",
//           }}
//         >
//           {/* Animated decorative glow */}
//           <motion.div
//             animate={{
//               opacity: [0.3, 0.65, 0.3],
//               scale: [1, 1.15, 1],
//             }}
//             transition={{
//               duration: 7,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 rounded-full blur-[100px]"
//             style={{ background: "rgba(229, 168, 43, 0.35)" }}
//           />

//           <div className="relative z-10 flex flex-col items-center gap-8 text-center">
//             {/* Header Icon Badge */}
//             <motion.div
//               whileHover={{ rotate: -6, scale: 1.08 }}
//               className="flex h-16 w-16 items-center justify-center rounded-2xl border"
//               style={{
//                 background:
//                   "linear-gradient(135deg, rgba(229, 168, 43, 0.25) 0%, rgba(229, 168, 43, 0.05) 100%)",
//                 borderColor: "rgba(229, 168, 43, 0.4)",
//                 color: "#E5A82B",
//                 boxShadow: "0 0 30px rgba(229, 168, 43, 0.2)",
//               }}
//             >
//               <FileText size={28} />
//             </motion.div>

//             <div className="space-y-2">

//               <h3
//                 className="font-serif text-3xl font-bold text-white sm:text-4xl tracking-tight"
//                 style={{ fontFamily: "var(--font-serif)" }}
//               >
//                 How it works
//               </h3>
//             </div>

//             <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-200/90 sm:text-base font-normal">
//               Manuscripts will be shortlisted by the Conference Review Committee
//               and recommended for submission to associated journals. Final
//               publication decisions rest solely with the journals and will be
//               based on their standard peer-review process.
//             </p>

//             {/* Step-by-Step Flow */}
//             <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
//               {[
//                 "Shortlisting",
//                 "Review",
//                 "Recommendation",
//                 "Editorial decision",
//               ].map((step, index) => (
//                 <motion.div
//                   key={step}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group/step inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#E5A82B] hover:bg-white/15"
//                 >
//                   <span
//                     className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold shadow-sm transition-transform duration-300 group-hover/step:scale-110"
//                     style={{
//                       background: "#E5A82B",
//                       color: "#1F3589",
//                     }}
//                   >
//                     {index + 1}
//                   </span>
//                   <span>{step}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Publication routes panel */}
//         <div
//           className="relative w-full overflow-hidden rounded-[2.5rem] border p-6 sm:p-10 lg:p-14"
//           style={{
//             background: "rgba(255, 255, 255, 0.65)",
//             borderColor: "rgba(31, 53, 137, 0.08)",
//             boxShadow:
//               "0 25px 70px -15px rgba(31, 53, 137, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
//             backdropFilter: "blur(20px)",
//           }}
//         >
//           {/* Panel header */}
//           <div className="mb-12 flex flex-col items-center text-center">
//             <span
//               className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em]"
//               style={{ color: "#B8860B" }}
//             >
//               Research Destinations
//             </span>

//             <h3
//               className="font-serif text-2xl font-bold sm:text-3xl"
//               style={{
//                 color: "#1F3589",
//                 fontFamily: "var(--font-serif)",
//               }}
//             >
//               Explore Publication Routes
//             </h3>

//             <p className="mt-2 max-w-lg text-sm text-slate-500">
//               Discover the journals and official proceedings affiliated with the conference.
//             </p>
//           </div>

//           {/* Journal cards container */}
//           <div className="grid grid-cols-1 gap-5">
//             {routes
//               .filter((route) => !route.featured)
//               .map((route, index) => (
//                 <RouteCard
//                   key={route.title}
//                   route={route}
//                   index={index}
//                 />
//               ))}
//           </div>

//           {/* Featured proceedings */}
//           {featuredRoute && (
//             <motion.div
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.7 }}
//               whileHover={{ y: -5 }}
//               className="group relative mt-10 overflow-hidden rounded-3xl border p-8 sm:p-10"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #FFFDF7 0%, #FEF7E6 50%, #FFF3D6 100%)",
//                 borderColor: "rgba(229, 168, 43, 0.4)",
//                 boxShadow: "0 20px 50px -10px rgba(229, 168, 43, 0.15)",
//               }}
//             >
//               {/* Highlight bar side accent */}
//               <motion.div
//                 animate={{ opacity: [0.6, 1, 0.6] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute inset-y-0 left-0 w-2"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, #1F3589 0%, #E5A82B 50%, #1F3589 100%)",
//                   boxShadow: "0 0 15px rgba(229, 168, 43, 0.5)",
//                 }}
//               />

//               <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
//                 {/* Icon tile */}
//                 <motion.div
//                   whileHover={{ rotate: 5, scale: 1.05 }}
//                   className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #1F3589 0%, #101D4B 100%)",
//                     color: "#E5A82B",
//                     boxShadow: "0 10px 25px rgba(31, 53, 137, 0.25)",
//                   }}
//                 >
//                   <BookOpen size={30} />
//                 </motion.div>

//                 {/* Content */}
//                 <div className="flex-1 space-y-2">
//                   <span
//                     className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider"
//                     style={{
//                       background: "rgba(229, 168, 43, 0.18)",
//                       color: "#855800",
//                       border: "1px solid rgba(229, 168, 43, 0.3)",
//                     }}
//                   >
//                     <BadgeCheck size={13} />
//                     ISBN Registered
//                   </span>

//                   <h3
//                     className="font-serif text-xl font-bold leading-snug sm:text-2xl"
//                     style={{
//                       color: "#1F3589",
//                       fontFamily: "var(--font-serif)",
//                     }}
//                   >
//                     {featuredRoute.title}
//                   </h3>

//                   <p className="text-sm font-medium leading-relaxed text-slate-600">
//                     {featuredRoute.publisher}
//                   </p>
//                 </div>

//                 {/* Proceedings button/badge */}
//                 <div
//                   className="flex shrink-0 items-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #1F3589 0%, #101D4B 100%)",
//                     boxShadow: "0 10px 25px -5px rgba(31, 53, 137, 0.3)",
//                   }}
//                 >
//                   <BookOpen size={16} />
//                   Official Proceedings
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </div>

//         {/* Bottom glowing line */}
//         <motion.div
//           animate={{
//             opacity: [0.3, 0.8, 0.3],
//             scaleX: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="h-[2px] w-1/2 rounded-full"
//           style={{
//             background:
//               "linear-gradient(90deg, transparent, #E5A82B, #1F3589, transparent)",
//             boxShadow: "0 0 18px rgba(229, 168, 43, 0.4)",
//           }}
//         />
//       </div>
//     </section>
//   );
// }

// export default PublicationOpportunities;


import { motion } from "motion/react";
import {
  BadgeCheck,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const routes = [
  {
    title: "Journal of Global Marketing",
    publisher: "Taylor & Francis Publication",
    tags: ["Scopus Indexed"],
  },
  {
    title: "South Asian Journal of Business and Management Cases (SAJBMC)",
    publisher: "SAGE Publication",
    tags: ["Scopus Indexed"],
  },
  {
    title: "International Journal of Advances in Signal and Image Sciences",
    publisher: "XLESCIENCE Publication",
    tags: ["Scopus Indexed"],
  },
  {
    title: "European Economics Letters",
    publisher: "European Economics Letters Group",
    tags: ["ABDC Indexed"],
  },
  {
    title: "Transformational Management Review (TMR)",
    publisher:
      "Published by IILM — institutional, peer-reviewed, open-access journal",
    tags: ["Peer Reviewed", "Open Access"],
  },
  {
    title: "International Journal for Research Trends and Innovation",
    publisher: "Peer-reviewed journal",
    tags: ["Peer Reviewed"],
  },
  {
    title: "Conference Proceedings with ISBN Number",
    publisher: "Official conference proceedings with ISBN registration",
    tags: ["ISBN Registered"],
    featured: true,
  },
];

const featuredRoute = routes.find((route) => route.featured);

function RouteCard({ route, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      {/* Hover Glow */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 blur-md transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(229,168,43,0.6), rgba(31,53,137,0.4), rgba(229,168,43,0.6))",
        }}
      />

      {/* Card */}
      <div
        className="relative flex h-full flex-col items-start gap-5 overflow-hidden rounded-3xl border p-6 backdrop-blur-md transition-all duration-300 sm:flex-row sm:gap-7 sm:p-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(254,247,230,0.6))",
          borderColor: "rgba(31,53,137,0.08)",
          boxShadow:
            "0 10px 30px -10px rgba(31,53,137,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        {/* Hover Sheen */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        {/* Ambient Corner Glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: "#E5A82B" }}
        />

        {/* Number Badge */}
        <motion.div
          whileHover={{ rotate: 6, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-16 sm:w-16"
          style={{
            background: "linear-gradient(135deg, #1F3589, #101D4B)",
            color: "#E5A82B",
            boxShadow:
              "0 8px 20px -4px rgba(31,53,137,0.35), inset 0 1px 1px rgba(255,255,255,0.2)",
          }}
        >
          <span
            className="font-serif text-xl font-extrabold tracking-tight sm:text-2xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="font-serif text-lg font-bold leading-snug tracking-tight text-balance sm:text-xl"
              style={{
                color: "#1F3589",
                fontFamily: "var(--font-serif)",
              }}
            >
              {route.title}
            </h3>

            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-transparent group-hover:bg-[#1F3589] group-hover:text-white"
              style={{
                borderColor: "rgba(31,53,137,0.12)",
                color: "#B8860B",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
            {route.publisher}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            {route.tags.map((tag) => {
              const isGoldTag =
                tag.includes("Scopus") || tag.includes("ABDC");

              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: isGoldTag
                      ? "linear-gradient(135deg, rgba(229,168,43,0.18), rgba(229,168,43,0.08))"
                      : "linear-gradient(135deg, rgba(31,53,137,0.08), rgba(31,53,137,0.03))",
                    borderColor: isGoldTag
                      ? "rgba(229,168,43,0.35)"
                      : "rgba(31,53,137,0.15)",
                    color: isGoldTag ? "#855800" : "#1F3589",
                    boxShadow: isGoldTag
                      ? "0 2px 8px rgba(229,168,43,0.12)"
                      : "none",
                  }}
                >
                  <BadgeCheck size={14} aria-hidden="true" />
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function PublicationOpportunities() {
  return (
    <section
      id="publication-opportunities"
      aria-labelledby="publication-opportunities-heading"
      className="relative isolate overflow-hidden px-4 py-24 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #FEF7E6 0%, #FFFFFF 50%, #F8F5EC 100%)",
      }}
    >
      {/* Background Ambient Lighting */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full blur-[140px] opacity-70"
        style={{ background: "rgba(31,53,137,0.08)" }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full blur-[140px] opacity-70"
        style={{ background: "rgba(229,168,43,0.15)" }}
      />

      {/* Top Metallic Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-1/2 top-0 h-[2px] w-2/3 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, #E5A82B, #1F3589, #E5A82B, transparent)",
          boxShadow: "0 0 20px rgba(229,168,43,0.5)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16">

        {/* New Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center text-center"
        >

          <h2
            id="publication-opportunities-heading"
            className="font-serif text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            style={{
              color: "#1F3589",
              fontFamily: "var(--font-serif)",
            }}
          >
            Publication Opportunities
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 h-[3px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #1F3589, #E5A82B)",
              boxShadow: "0 0 16px rgba(229,168,43,0.5)",
            }}
          />
        </motion.div>

        {/* Publication Routes Panel */}
        <div
          className="relative w-full overflow-hidden rounded-[2.5rem] border p-6 sm:p-10 lg:p-14"
          style={{
            background: "rgba(255,255,255,0.65)",
            borderColor: "rgba(31,53,137,0.08)",
            boxShadow:
              "0 25px 70px -15px rgba(31,53,137,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Panel Header */}
          <div className="mb-12 flex flex-col items-center text-center">
            <span
              className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "#B8860B" }}
            >
              Research Destinations
            </span>

            <h3
              className="font-serif text-2xl font-bold sm:text-3xl"
              style={{
                color: "#1F3589",
                fontFamily: "var(--font-serif)",
              }}
            >
              Explore Publication Routes
            </h3>

            <p className="mt-2 max-w-lg text-sm text-slate-500">
              Discover the journals and official proceedings affiliated with the conference.
            </p>
          </div>

          {/* Journal Cards */}
          <div className="grid grid-cols-1 gap-5">
            {routes
              .filter((route) => !route.featured)
              .map((route, index) => (
                <RouteCard
                  key={route.title}
                  route={route}
                  index={index}
                />
              ))}
          </div>

          {/* Featured Proceedings */}
          {featuredRoute && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="group relative mt-10 overflow-hidden rounded-3xl border p-8 sm:p-10"
              style={{
                background:
                  "linear-gradient(135deg, #FFFDF7, #FEF7E6 50%, #FFF3D6)",
                borderColor: "rgba(229,168,43,0.4)",
                boxShadow: "0 20px 50px -10px rgba(229,168,43,0.15)",
              }}
            >
              {/* Highlight Bar */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-y-0 left-0 w-2"
                style={{
                  background:
                    "linear-gradient(180deg, #1F3589, #E5A82B 50%, #1F3589)",
                  boxShadow: "0 0 15px rgba(229,168,43,0.5)",
                }}
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F3589, #101D4B)",
                    color: "#E5A82B",
                    boxShadow: "0 10px 25px rgba(31,53,137,0.25)",
                  }}
                >
                  <BookOpen size={30} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider"
                    style={{
                      background: "rgba(229,168,43,0.18)",
                      color: "#855800",
                      borderColor: "rgba(229,168,43,0.3)",
                    }}
                  >
                    <BadgeCheck size={13} />
                    ISBN Registered
                  </span>

                  <h3
                    className="font-serif text-xl font-bold leading-snug sm:text-2xl"
                    style={{
                      color: "#1F3589",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {featuredRoute.title}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed text-slate-600">
                    {featuredRoute.publisher}
                  </p>
                </div>

                {/* Proceedings Badge */}
                <div
                  className="flex shrink-0 items-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F3589, #101D4B)",
                    boxShadow: "0 10px 25px -5px rgba(31,53,137,0.3)",
                  }}
                >
                  <BookOpen size={16} />
                  Official Proceedings
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Glowing Line */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-[2px] w-1/2 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #E5A82B, #1F3589, transparent)",
            boxShadow: "0 0 18px rgba(229,168,43,0.4)",
          }}
        />
      </div>
    </section>
  );
}

export default PublicationOpportunities;