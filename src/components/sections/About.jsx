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
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Pause,
  Play,
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
              ${
                activeIndex === index
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
              ${
                activeIndex === index
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
   ABOUT SECTION
========================= */

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden
        bg-white px-4 py-20 md:px-8 md:py-28"
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

      <div className="relative z-10 mx-auto grid
        w-full max-w-[1600px] grid-cols-1
        items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Campus slideshow */}
        <div className="w-full">
          <CampusSlideshow />
        </div>

        {/* About content */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About the Conference"
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

          <p className="text-base leading-relaxed
            text-[var(--color-text-body)]">
            IC-NBITS 2027 provides a platform for
            interdisciplinary dialogue, collaborative research,
            and knowledge exchange across management,
            technology and sustainability domains, contributing
            to India's vision of becoming a developed nation.
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
                  rounded-xl border border-[#1F3589]/5
                  bg-[#FEF7E6]/50 p-4
                  transition-all duration-300
                  hover:border-[#E5A82B]/30
                  hover:bg-[#FEF7E6]"
              >
                <div
                  className="flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl bg-white
                    text-[#E5A82B] shadow-sm
                    transition-all duration-300
                    group-hover:bg-[#1F3589]
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
              bg-gradient-to-r from-[#1F3589] to-[#E5A82B]" />

            <span className="text-xs font-semibold
              uppercase tracking-widest text-[#B8860B]">
              IC-NBITS 2027
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
