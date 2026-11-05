
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      {/* Hover Glow */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 blur-md transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(229,168,43,0.6), rgba(31,53,137,0.4), rgba(229,168,43,0.6))",
        }}
      />

      {/* Card */}
      <div
        className="relative flex h-full flex-col items-start gap-3 overflow-hidden rounded-2xl border p-4 backdrop-blur-md transition-all duration-300 sm:flex-row sm:items-center sm:gap-4 sm:p-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(254,247,230,0.6))",
          borderColor: "rgba(31,53,137,0.08)",
          boxShadow:
            "0 8px 25px -10px rgba(31,53,137,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        {/* Hover Sheen */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        {/* Ambient Corner Glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: "#E5A82B" }}
        />

        {/* Number Badge */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11"
          style={{
            background: "linear-gradient(135deg, #1F3589, #101D4B)",
            color: "#E5A82B",
            boxShadow:
              "0 6px 16px -4px rgba(31,53,137,0.3), inset 0 1px 1px rgba(255,255,255,0.2)",
          }}
        >
          <span
            className="font-serif text-base font-extrabold tracking-tight sm:text-lg"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="font-serif text-sm font-bold leading-snug tracking-tight text-balance sm:text-base"
              style={{
                color: "#1F3589",
                fontFamily: "var(--font-serif)",
              }}
            >
              {route.title}
            </h3>

            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-transparent group-hover:bg-[#1F3589] group-hover:text-white"
              style={{
                borderColor: "rgba(31,53,137,0.12)",
                color: "#B8860B",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          <p className="mt-1 text-xs font-medium leading-relaxed text-slate-600">
            {route.publisher}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {route.tags.map((tag) => {
              const isGoldTag =
                tag.includes("Scopus") || tag.includes("ABDC");

              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider transition-transform duration-300 group-hover:scale-[1.02]"
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
                  <BadgeCheck size={11} aria-hidden="true" />
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
      className="relative isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #FEF7E6 0%, #FFFFFF 50%, #F8F5EC 100%)",
      }}
    >
      {/* Background Ambient Lighting */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full blur-[120px] opacity-60"
        style={{ background: "rgba(31,53,137,0.08)" }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full blur-[120px] opacity-60"
        style={{ background: "rgba(229,168,43,0.15)" }}
      />

      {/* Top Metallic Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 h-[2px] w-2/3 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, #E5A82B, #1F3589, #E5A82B, transparent)",
          boxShadow: "0 0 15px rgba(229,168,43,0.4)",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center text-center"
        >
          <h2
            id="publication-opportunities-heading"
            className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            style={{
              color: "#1F3589",
              fontFamily: "var(--font-serif)",
            }}
          >
            Publication Opportunities
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 h-[3px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #1F3589, #E5A82B)",
              boxShadow: "0 0 12px rgba(229,168,43,0.4)",
            }}
          />
        </motion.div>

        {/* Publication Routes Panel */}
        <div
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border p-4 sm:p-6 lg:p-7"
          style={{
            background: "rgba(255,255,255,0.65)",
            borderColor: "rgba(31,53,137,0.08)",
            boxShadow:
              "0 20px 50px -15px rgba(31,53,137,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Panel Header */}
          <div className="mb-6 flex flex-col items-center text-center">
            <span
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: "#B8860B" }}
            >
              Research Destinations
            </span>

            <h3
              className="font-serif text-xl font-bold sm:text-2xl"
              style={{
                color: "#1F3589",
                fontFamily: "var(--font-serif)",
              }}
            >
              Explore Publication Routes
            </h3>

            <p className="mt-2 max-w-lg text-xs leading-relaxed text-slate-500 sm:text-sm">
              Discover the journals and official proceedings affiliated with the conference.
            </p>
          </div>

          {/* Journal Cards */}
          <div className="grid grid-cols-1 gap-3">
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative mt-6 overflow-hidden rounded-2xl border p-5 sm:p-6"
              style={{
                background:
                  "linear-gradient(135deg, #FFFDF7, #FEF7E6 50%, #FFF3D6)",
                borderColor: "rgba(229,168,43,0.4)",
                boxShadow: "0 15px 35px -10px rgba(229,168,43,0.15)",
              }}
            >
              {/* Highlight Bar */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-y-0 left-0 w-1.5"
                style={{
                  background:
                    "linear-gradient(180deg, #1F3589, #E5A82B 50%, #1F3589)",
                  boxShadow: "0 0 12px rgba(229,168,43,0.4)",
                }}
              />

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F3589, #101D4B)",
                    color: "#E5A82B",
                    boxShadow: "0 8px 20px rgba(31,53,137,0.2)",
                  }}
                >
                  <BookOpen size={25} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider"
                    style={{
                      background: "rgba(229,168,43,0.18)",
                      color: "#855800",
                      borderColor: "rgba(229,168,43,0.3)",
                    }}
                  >
                    <BadgeCheck size={12} />
                    ISBN Registered
                  </span>

                  <h3
                    className="font-serif text-lg font-bold leading-snug sm:text-xl"
                    style={{
                      color: "#1F3589",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {featuredRoute.title}
                  </h3>

                  <p className="text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">
                    {featuredRoute.publisher}
                  </p>
                </div>

                {/* Proceedings Badge */}
                <div
                  className="flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg transition-transform duration-300 group-hover:scale-105 sm:text-xs"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F3589, #101D4B)",
                    boxShadow: "0 8px 20px -5px rgba(31,53,137,0.3)",
                  }}
                >
                  <BookOpen size={15} />
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
          className="h-[2px] w-1/3 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #E5A82B, #1F3589, transparent)",
            boxShadow: "0 0 15px rgba(229,168,43,0.3)",
          }}
        />
      </div>
    </section>
  );
}

export default PublicationOpportunities;