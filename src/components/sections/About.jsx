// /**
//  * About.jsx – About the Conference section.
//  */

// import { CheckCircle2 } from 'lucide-react';
// import { SectionHeading } from '../ui/SectionHeading';

// const bullets = [
//   'Scopus and ABDC publication routes',
//   'Conference proceedings with ISBN',
//   'Hybrid participation for authors and delegates',
// ];

// export function About() {
//   return (
//     <section
//       id="about"
//       aria-labelledby="about-heading"
//       className="py-20 px-4 md:px-8"
//       style={{ background: 'var(--color-white)' }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Image placeholder */}
//         <div
//           className="rounded-2xl overflow-hidden bg-navy aspect-[4/3] flex items-center justify-center
//             border-4 border-navy/10 shadow-lg"
//           aria-label="SIESCOMS campus photo placeholder"
//         >
//           <p className="text-white/50 text-sm text-center px-6">
//             [PHOTO] SIESCOMS campus<br />
//             <span className="text-xs">Replace with campus photo in /src/assets/</span>
//           </p>
//         </div>

//         {/* Text content */}
//         <div className="flex flex-col gap-5">
//           <SectionHeading
//             eyebrow="About the Conference"
//             title="A global forum for inclusive, resilient nations"
//             align="left"
//           />

//           <p className="text-[var(--color-text-body)] text-base leading-relaxed">
//             SIES College of Management Studies, Navi Mumbai, brings together researchers,
//             academicians, policymakers and industry professionals to discuss how innovation,
//             technology and sustainability together build the nation.
//           </p>

//           <p className="text-[var(--color-text-body)] text-base leading-relaxed">
//             IC-NBITS 2027 provides a platform for interdisciplinary dialogue, collaborative
//             research, and knowledge exchange across management, technology and sustainability
//             domains, contributing to India's vision of becoming a developed nation.
//           </p>

//           {/* Checkmark bullets */}
//           <ul className="flex flex-col gap-3 mt-2">
//             {bullets.map((item) => (
//               <li key={item} className="flex items-start gap-3">
//                 <CheckCircle2
//                   size={20}
//                   className="text-gold shrink-0 mt-0.5"
//                   aria-hidden="true"
//                 />
//                 <span className="text-[var(--color-text-body)] text-sm font-medium">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Images,
  Landmark,
  Pause,
  Play,
  Sprout,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

/* =========================
   SLIDESHOW DATA
========================= */

const campusImages = [
  {
    src: '/images/image-1.jpg',
    title: 'SIESCOMS Campus',
    description: 'A centre for academic excellence',
  },
  {
    src: '/images/image-2.jpg',
    title: 'Learning & Innovation',
    description: 'Where ideas become impact',
  },
  {
    src: '/images/image-3.jpg',
    title: 'Academic Community',
    description: 'Building connections and knowledge',
  },
  {
    src: '/images/image-4.jpg',
    title: 'Research & Collaboration',
    description: 'Inspiring the next generation',
  },
];

const bullets = [
  'Scopus and ABDC publication routes',
  'Conference proceedings with ISBN',
  'Hybrid participation for authors and delegates',
];

const storyCards = [
  {
    title: 'A Legacy of Excellence',
    icon: Landmark,
    text: 'Rooted in a rich legacy of academic excellence and social commitment, the South Indian Education Society (SIES), established in 1932, has consistently upheld the belief that education and research are powerful instruments of nation-building. Guided by this enduring philosophy, SIES College of Management Studies (SIESCOMS), Navi Mumbai, since its inception in 1995, has been committed to nurturing responsible leaders, advancing scholarly inquiry, and contributing meaningfully to society through high-quality research and knowledge dissemination.',
  },
  {
    title: 'Our Conference',
    icon: Globe2,
    text: 'Aligned with this vision, SIESCOMS is organizing the International Research Conference on "Nation-Building through Innovation, Technology and Sustainability", envisioned as a global academic and professional forum dedicated to exploring how innovative thinking, technological advancement, and sustainable practices can collectively contribute to inclusive and resilient nation-building. The conference seeks to bring together researchers, academicians, policymakers, industry professionals, entrepreneurs, and development practitioners from across the world to exchange ideas, present cutting-edge research, and share best practices that support national progress in an increasingly interconnected and rapidly changing world.',
  },
  {
    title: 'Building for the 21st Century',
    icon: Sprout,
    text: 'In the 21st century, nation-building extends beyond economic growth to encompass social equity, environmental responsibility, technological preparedness, and institutional strength. This conference recognizes that while innovation and technology serve as powerful enablers of development, their true impact can be realized only when guided by sustainability principles. By integrating these dimensions, the conference aims to foster meaningful dialogue and actionable insights toward building nations that are economically robust, socially inclusive, environmentally responsible, and technologically empowered.',
  },
];

/* =========================
   CAMPUS SLIDESHOW
========================= */

function CampusSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeImage = campusImages[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % campusImages.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + campusImages.length) % campusImages.length
    );
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="group relative w-full">
      {/* Outer decorative glow */}
      <div
        className="absolute -inset-3 rounded-[2rem]
          bg-gradient-to-br from-[#E5A82B]/30
          via-[#1F3589]/10 to-[#E5A82B]/20
          opacity-70 blur-xl transition-opacity
          duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Main slideshow */}
      <div
        className="relative aspect-[4/3] overflow-hidden
          rounded-3xl border border-white/50
          bg-[#1F3589]
          shadow-[0_25px_70px_rgba(31,53,137,0.2)]"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Image overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t
            from-[#101B40]/90 via-[#101B40]/10
            to-transparent"
          aria-hidden="true"
        />

        {/* Top label */}
        <div className="absolute left-5 top-5 z-10">
          <div
            className="flex items-center gap-2
              rounded-full border border-white/20
              bg-white/15 px-4 py-2
              text-xs font-semibold text-white
              shadow-lg backdrop-blur-xl"
          >
            <Images size={14} className="text-[#F8D878]" />
            Campus Gallery
          </div>
        </div>

        {/* Slide counter */}
        <div
          className="absolute right-5 top-5 z-10
            rounded-full border border-white/20
            bg-black/20 px-3 py-2
            text-xs font-semibold text-white
            backdrop-blur-xl"
        >
          {String(activeIndex + 1).padStart(2, '0')}
          <span className="mx-1 text-white/50">/</span>
          {String(campusImages.length).padStart(2, '0')}
        </div>

        {/* Image caption */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0
              z-10 p-6 md:p-8"
          >
            <div className="mb-3 h-1 w-12 rounded-full bg-[#E5A82B]" />

            <h3
              className="text-2xl font-bold text-white
                md:text-3xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {activeImage.title}
            </h3>

            <p className="mt-2 text-sm text-white/75">
              {activeImage.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Previous / Next */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous campus image"
          className="absolute left-4 top-1/2 z-20
            flex h-11 w-11 -translate-y-1/2
            items-center justify-center rounded-full
            border border-white/20 bg-white/15
            text-white backdrop-blur-xl
            transition-all duration-300
            hover:scale-110 hover:bg-white/30"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next campus image"
          className="absolute right-4 top-1/2 z-20
            flex h-11 w-11 -translate-y-1/2
            items-center justify-center rounded-full
            border border-white/20 bg-white/15
            text-white backdrop-blur-xl
            transition-all duration-300
            hover:scale-110 hover:bg-white/30"
        >
          <ChevronRight size={22} />
        </button>

        {/* Play / Pause */}
        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="absolute bottom-5 right-5 z-20
            flex h-10 w-10 items-center justify-center
            rounded-full border border-white/20
            bg-white/15 text-white backdrop-blur-xl
            transition-all duration-300
            hover:bg-white/30"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Thumbnail navigation */}
      <div className="mt-5 grid grid-cols-4 gap-3">
        {campusImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${image.title}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            className={`relative aspect-[4/3] overflow-hidden
              rounded-xl border-2 transition-all duration-300
              ${activeIndex === index
                ? 'border-[#E5A82B] opacity-100 shadow-lg'
                : 'border-transparent opacity-60 hover:opacity-100'
              }`}
          >
            <img
              src={image.src}
              alt=""
              className="h-full w-full object-cover
                transition-transform duration-500
                hover:scale-110"
              loading="lazy"
            />

            {activeIndex === index && (
              <div className="absolute inset-0
                bg-[#1F3589]/10" />
            )}
          </button>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {campusImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500
              ${activeIndex === index
                ? 'w-10 bg-[#E5A82B]'
                : 'w-3 bg-[#1F3589]/20 hover:bg-[#1F3589]/40'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================
   STORY CARD
========================= */

function StoryCard({ card, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden
        rounded-[2rem] border border-navy/10
        bg-white
        shadow-[0_12px_45px_rgba(31,53,137,0.07)]
        transition-all duration-500
        hover:-translate-y-2 hover:border-gold/40
        hover:shadow-[0_30px_70px_rgba(31,53,137,0.14)]"
    >
      {/* Top gradient hairline */}
      <div
        className="absolute inset-x-0 top-0 h-1.5
          bg-gradient-to-r from-navy via-gold to-navy
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16
          h-52 w-52 rounded-full bg-gold/10 blur-3xl
          opacity-50 transition-opacity duration-500
          group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        className="relative z-10 flex h-full flex-col
          gap-6 p-7 sm:p-8 md:flex-row md:gap-8"
      >
        {/* Icon tile */}
        <div className="flex shrink-0 items-center justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center
              rounded-2xl bg-gradient-to-br
              from-navy to-navy-light
              text-gold shadow-lg
              transition-all duration-500
              group-hover:rotate-6 group-hover:scale-110"
          >
            <Icon size={28} strokeWidth={1.7} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          {/* Title */}
          <h3
            className="font-serif text-xl font-bold
              tracking-tight text-navy sm:text-2xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {card.title}
          </h3>

          {/* Gold accent */}
          <div
            className="mt-3 mb-5 h-1 w-12 rounded-full
              bg-gradient-to-r from-gold to-gold-light
              transition-all duration-500
              group-hover:w-20"
            aria-hidden="true"
          />

          {/* Collapsible body */}
          <div className="relative flex-1">
            <div
              className="overflow-hidden
              transition-[max-height] duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ maxHeight: expanded ? 800 : 132 }}
            >
              <p className="text-sm leading-7
              text-slate-600 sm:text-base sm:leading-8">
                {card.text}
              </p>
            </div>

            {/* Fade-out when collapsed */}
            {!expanded && (
              <div
                className="pointer-events-none absolute inset-x-0
                bottom-0 h-16
                bg-gradient-to-t from-white to-transparent"
                aria-hidden="true"
              />
            )}

            {/* Toggle */}
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="relative mt-3 inline-flex items-center
              gap-1.5 text-sm font-semibold
              text-navy
              transition-colors duration-300
              hover:text-gold"
            >
              {expanded ? 'Show less' : 'Read more'}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300
                ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   ABOUT SECTION
========================= */

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden
        bg-white px-4 py-14 md:px-8 md:py-20"
    >
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -left-32
          top-20 h-80 w-80 rounded-full
          bg-[#E5A82B]/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32
          bottom-0 h-96 w-96 rounded-full
          bg-[#1F3589]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex
        w-full max-w-[1600px] flex-col gap-16 lg:gap-24">

        {/* Centered pill header */}
        <div className="relative flex flex-col items-center">
          <div
            className="pointer-events-none absolute -top-12
              left-1/2 h-44 w-80 -translate-x-1/2
              rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <span
            className="inline-flex items-center gap-3
              rounded-full border border-gold/30
              bg-gold/10 px-4 py-2
              text-[10px] sm:text-xs
              font-bold uppercase tracking-[0.2em]
              text-gold-dark
              shadow-[0_4px_15px_rgba(229,168,43,0.06)]"
          >
            <span
              className="h-1.5 w-1.5 rounded-full
                bg-gold shadow-[0_0_8px_rgba(229,168,43,0.5)]"
            />
            About the Conference
          </span>
        </div>

        {/* Top: slideshow + about intro */}
        <div className="grid grid-cols-1
          items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Campus slideshow */}
          <div className="w-full">
            <CampusSlideshow />
          </div>

          {/* About content */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              title="A global forum for inclusive, resilient nations"
              align="left"
            />

            <p className="text-base leading-relaxed
              text-[var(--color-text-body)]">
              SIES College of Management Studies, Navi Mumbai,
              brings together researchers, academicians,
              policymakers and industry professionals to discuss
              how innovation, technology and sustainability
              together build the nation.
            </p>

            {/* Conference highlights */}
            <div className="mt-2 flex flex-col gap-4">
              {bullets.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="group flex items-center gap-4
                    rounded-xl border border-navy/5
                    bg-cream/50 p-4
                    transition-all duration-300
                    hover:border-gold/30
                    hover:bg-cream"
                >
                  <div
                    className="flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-xl bg-white
                      text-gold shadow-sm
                      transition-all duration-300
                      group-hover:bg-navy
                      group-hover:text-white"
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  <span className="text-sm font-medium
                    text-[var(--color-text-body)]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="mt-2 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full
                bg-gradient-to-r from-navy to-gold" />

              <span className="text-xs font-semibold
                uppercase tracking-widest text-gold-dark">
                IC-NBITS 2027
              </span>
            </div>
          </div>
        </div>

        {/* Three narrative cards – grouped in a distinct panel */}
        <div
          className="relative overflow-hidden rounded-[2.5rem]
            border border-navy/10
            bg-gradient-to-br from-cream via-white to-gold/5
            px-4 py-10 sm:px-8 md:px-12 md:py-14
            shadow-[0_20px_60px_rgba(31,53,137,0.06)]"
        >
          {/* Panel decorations */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2
              h-64 w-[36rem] -translate-x-1/2
              rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 right-10
              h-64 w-72 rounded-full bg-navy/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col gap-6">
            {storyCards.map((card, index) => (
              <StoryCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
