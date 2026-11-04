import { motion } from 'motion/react';
import {
  BadgeCheck,
  BookOpen,
  FileText,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

/* =========================
   PUBLICATION ROUTES DATA
========================= */

const routes = [
  {
    title: 'Journal of Global Marketing',
    publisher: 'Taylor & Francis Publication',
    tags: ['Scopus Indexed'],
    featured: false,
  },
  {
    title: 'South Asian Journal of Business and Management Cases (SAJBMC)',
    publisher: 'SAGE Publication',
    tags: ['Scopus Indexed'],
    featured: false,
  },
  {
    title: 'International Journal of Advances in Signal and Image Sciences',
    publisher: 'XLESCIENCE Publication',
    tags: ['Scopus Indexed'],
    featured: false,
  },
  {
    title: 'European Economics Letters',
    publisher: 'European Economics Letters Group',
    tags: ['ABDC Indexed'],
    featured: false,
  },
  {
    title: 'Transformational Management Review (TMR)',
    publisher: 'Published by IILM — institutional, peer-reviewed, open-access journal',
    tags: ['Peer Reviewed', 'Open Access'],
    featured: false,
  },
  {
    title: 'International Journal for Research Trends and Innovation',
    publisher: 'Peer-reviewed journal',
    tags: ['Peer Reviewed'],
    featured: false,
  },
  {
    title: 'Conference Proceedings with ISBN Number',
    publisher: 'Official conference proceedings with ISBN registration',
    tags: ['ISBN Registered'],
    featured: true,
  },
];

/* =========================
   ROUTE CARD
========================= */

function RouteCard({ route, index }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex items-center gap-5 overflow-hidden
        rounded-3xl border border-navy/10 bg-white p-5 sm:p-7
        shadow-[0_10px_35px_rgba(31,53,137,0.06)]
        transition-all duration-500
        hover:-translate-y-1.5 hover:border-gold/40
        hover:shadow-[0_25px_60px_rgba(31,53,137,0.12)]"
    >
      {/* Top hairline */}
      <div
        className="absolute inset-x-0 top-0 h-1
          bg-gradient-to-r from-navy via-gold to-navy
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-14 -top-14
          h-40 w-40 rounded-full bg-gold/10 blur-3xl
          opacity-50 transition-opacity duration-500
          group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        className="relative z-10 flex h-16 w-16 shrink-0
          items-center justify-center rounded-2xl
          bg-gradient-to-br from-navy to-navy-light
          text-gold shadow-lg
          transition-all duration-500
          group-hover:rotate-6 group-hover:scale-110"
      >
        <span
          className="font-serif text-2xl font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 flex min-w-0 flex-1
        flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-serif text-lg font-bold leading-snug
              tracking-tight text-navy"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {route.title}
          </h3>

        </div>

        <div
          className="h-1 w-12 rounded-full
            bg-gradient-to-r from-gold to-gold-light
            transition-all duration-500
            group-hover:w-20"
          aria-hidden="true"
        />

        <p className="text-sm leading-relaxed text-slate-600">
          {route.publisher}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {route.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5
                rounded-full px-3 py-1 text-[11px]
                font-semibold uppercase tracking-wide"
              style={{
                background:
                  tag.includes('Scopus') || tag.includes('ABDC')
                    ? 'var(--color-gold-soft, #E5A82B22)'
                    : 'var(--color-navy-soft, #1F358922)',
                color: tag.includes('Scopus') || tag.includes('ABDC')
                  ? 'var(--color-gold-dark)'
                  : 'var(--color-navy)',
              }}
            >
              <BadgeCheck size={13} aria-hidden="true" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   PUBLICATION OPPORTUNITIES SECTION
========================= */

export function PublicationOpportunities() {
  return (
    <section
      id="publication-opportunities"
      aria-labelledby="publication-opportunities-heading"
      className="relative overflow-hidden
        bg-white px-4 py-14 md:px-8 md:py-20"
    >
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -left-32
          top-24 h-80 w-80 rounded-full
          bg-[#E5A82B]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32
          bottom-16 h-96 w-96 rounded-full
          bg-[#1F3589]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex
        w-full max-w-[1600px] flex-col items-center gap-14 lg:gap-20">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div
            className="pointer-events-none absolute -top-16
              left-1/2 h-48 w-80 -translate-x-1/2
              rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <SectionHeading
            eyebrow="Publication Opportunities"
            title="Where your research can be published"
            subtitle="Papers presented at the conference will have opportunities for publication through the following routes, subject to standard review processes."
            id="publication-opportunities-heading"
          />
        </div>

        {/* Manuscript note callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden
            rounded-[2rem] border border-white/10
            bg-gradient-to-br from-navy via-navy-light
            to-[#0E1A40] p-8 sm:p-10
            shadow-[0_25px_60px_rgba(31,53,137,0.3)]"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20
              h-64 w-64 rounded-full bg-gold/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16
              h-64 w-64 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center
                rounded-xl bg-gold text-navy shadow-lg">
                <FileText size={22} />
              </div>
              <h3
                className="font-serif text-xl font-bold text-white
                  sm:text-2xl"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                How it works
              </h3>
            </div>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed
              text-white/80 sm:text-base sm:leading-8">
              Manuscripts will be shortlisted by the Conference Review Committee
              and recommended for submission to associated journals. Final
              publication decisions rest solely with the journals and will be
              based on their standard peer-review process.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {['Shortlisting', 'Review', 'Recommendation', 'Editorial decision'].map(
                (step, i) => (
                  <span
                    key={step}
                    className="inline-flex items-center gap-2
                      rounded-full border border-white/15
                      bg-white/10 px-4 py-1.5
                      text-[11px] font-semibold uppercase
                      tracking-wide text-white backdrop-blur"
                  >
                    <span className="flex h-4 w-4 items-center justify-center
                      rounded-full bg-gold text-[9px]
                      font-bold text-navy">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Routes — horizontal rows inside a padded panel */}
        <div className="w-full rounded-[2.5rem] border border-navy/10
          bg-gradient-to-br from-cream via-white to-gold/5
          px-4 py-10 shadow-[0_20px_60px_rgba(31,53,137,0.06)]
          sm:px-10 lg:px-14 lg:py-14">
          <div className="flex flex-col gap-6 lg:gap-7">
            {routes
              .filter((route) => !route.featured)
              .map((route, index) => (
                <RouteCard key={route.title} route={route} index={index} />
              ))}

            {/* Featured proceedings card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden
                rounded-3xl border border-gold/30
                bg-gradient-to-r from-cream via-white to-gold/10
                p-8 sm:flex-row sm:items-center sm:gap-8
                sm:p-10 shadow-[0_15px_45px_rgba(31,53,137,0.07)]
                transition-all duration-500
                hover:shadow-[0_25px_60px_rgba(229,168,43,0.18)]"
            >
              <div
                className="absolute inset-y-0 left-0 w-1.5
                  bg-gradient-to-b from-navy via-gold to-gold"
                aria-hidden="true"
              />

              <div className="relative flex h-16 w-16 shrink-0
                items-center justify-center rounded-2xl
                bg-gradient-to-br from-navy to-navy-light
                text-gold shadow-lg
                transition-transform duration-500
                group-hover:rotate-6 group-hover:scale-110">
                <span
                  className="font-serif text-2xl font-bold tracking-tight"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  07
                </span>
              </div>

              <div className="mt-5 flex flex-1 flex-col gap-2 sm:mt-0">
                <h3 className="font-serif text-xl font-bold tracking-tight
                  text-navy sm:text-2xl"
                  style={{ fontFamily: 'var(--font-serif)' }}>
                  {routes[6].title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {routes[6].publisher}
                </p>
                <span className="mt-1 inline-flex w-fit items-center gap-1.5
                  rounded-full px-3 py-1 text-[11px]
                  font-semibold uppercase tracking-wide"
                  style={{
                    background: 'var(--color-gold-soft, #E5A82B22)',
                    color: 'var(--color-gold-dark)',
                  }}>
                  <BadgeCheck size={13} aria-hidden="true" />
                  ISBN Registered
                </span>
              </div>

              <div className="mt-5 sm:mt-0">
                <span className="inline-flex items-center gap-2
                  rounded-full bg-navy px-5 py-2.5
                  text-xs font-semibold uppercase
                  tracking-wide text-white shadow-lg
                  transition-all duration-300
                  group-hover:bg-navy-light">
                  <BookOpen size={15} />
                  Official proceedings
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PublicationOpportunities;
