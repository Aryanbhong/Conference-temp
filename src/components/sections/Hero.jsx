// // /**
// //  * Hero.jsx – Full-screen hero section with badge, headline, CTAs,
// //  * and SIESCOMS building illustration.
// //  */

// // import { conference } from '../../data/conference';
// // import { Button } from '../ui/Button';
// // import { Badge } from '../ui/Badge';
// // import { MapPin, Wifi } from 'lucide-react';

// // export function Hero() {
// //   return (
// //     <section
// //       id="hero"
// //       aria-label="Hero section"
// //       className="relative overflow-hidden"
// //       style={{ background: 'var(--color-cream)' }}
// //     >
// //       {/* Main hero content */}
// //       <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-0 flex flex-col items-center text-center">
// //         {/* Pill badge */}
// //         <Badge variant="default" className="mb-6">
// //           <span className="font-bold text-gold">{conference.dates}</span>
// //           <span className="text-[var(--color-text-muted)]">·</span>
// //           <Wifi size={12} className="text-navy" aria-hidden="true" />
// //           <span>{conference.mode} Mode</span>
// //           <span className="text-[var(--color-text-muted)]">·</span>
// //           <MapPin size={12} className="text-navy" aria-hidden="true" />
// //           <span>{conference.city}</span>
// //         </Badge>

// //         {/* Main headline */}
// //         <h1
// //           className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy max-w-3xl leading-tight mb-5"
// //           style={{ fontFamily: 'var(--font-serif)' }}
// //         >
// //           Where research meets nation-building
// //         </h1>

// //         {/* Subtext */}
// //         <p className="text-base md:text-lg max-w-xl mb-8" style={{ color: 'var(--color-text-body)' }}>
// //           Call for papers with publication opportunities in Scopus / ABDC / peer-reviewed
// //           listed journals and conference proceedings with ISBN number.
// //         </p>

// //         {/* CTAs */}
// //         <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
// //           <Button
// //             variant="primary"
// //             size="lg"
// //             href={conference.submissionPortalUrl}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Submit Paper
// //           </Button>
// //           <Button
// //             variant="secondary"
// //             size="lg"
// //             href={conference.brochureUrl}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Download Brochure
// //           </Button>
// //         </div>

// //         {/* Building illustration */}
// //         <div className="w-full max-w-4xl mx-auto" aria-label="SIESCOMS building illustration">
// //           {/* SVG placeholder – replace with /src/assets/hero-building.svg */}
// //           <img
// //             src="/hero-building.svg"
// //             alt="SIESCOMS campus line-art illustration"
// //             className="w-full h-auto object-contain"
// //             loading="eager"
// //             onError={(e) => {
// //               // Fallback: render a styled placeholder
// //               e.target.style.display = 'none';
// //               e.target.nextSibling.style.display = 'flex';
// //             }}
// //           />
// //           {/* Fallback placeholder */}
// //           <div
// //             className="hidden w-full h-56 md:h-72 rounded-t-2xl items-end justify-center
// //               border-2 border-dashed border-navy/20 bg-navy/5"
// //             aria-hidden="true"
// //           >
// //             <p className="text-navy/40 text-sm font-medium pb-6 text-center">
// //               [Hero building illustration — place hero-building.svg in /public]
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Hero;



// import { conference } from "../../data/conference";
// import { Button } from "../ui/Button";
// import { Badge } from "../ui/Badge";
// import { MapPin, Wifi } from "lucide-react";

// export function Hero() {
//   return (
//     <section
//       id="hero"
//       aria-label="Conference introduction"
//       className="relative overflow-hidden bg-cream"
//     >
//       {/* Hero Content */}
//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-10 text-center md:px-8 md:pt-12">

//         {/* Conference Badge */}
//         <Badge variant="default" className="mb-5">
//           <span className="font-bold text-gold">
//             {conference.dates}
//           </span>

//           <span className="text-[var(--color-text-muted)]">·</span>

//           <Wifi size={12} className="text-navy" />

//           <span>{conference.mode} Mode</span>

//           <span className="text-[var(--color-text-muted)]">·</span>

//           <MapPin size={12} className="text-navy" />

//           <span>{conference.city}</span>
//         </Badge>

//         {/* Heading */}
//         <h1 className="mb-5 max-w-4xl font-serif text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
//           Where research meets nation-building
//         </h1>

//         {/* Description */}
//         <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--color-text-body)] md:text-base">
//           Call for papers with publication opportunities in Scopus / ABDC /
//           peer-reviewed listed journals and conference proceedings with
//           ISBN number.
//         </p>

//         {/* Buttons */}
//         <div className="mb-10 flex flex-wrap justify-center gap-3">
//           <Button
//             variant="primary"
//             size="lg"
//             href={conference.submissionPortalUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Submit Paper
//           </Button>

//           <Button
//             variant="secondary"
//             size="lg"
//             href={conference.brochureUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Download Brochure
//           </Button>
//         </div>
//       </div>

//       {/* Building Illustration */}
//       {/* <div className="relative w-full overflow-hidden">
//         <img
//           src="/Campus Sketch.png"
//           alt="Architectural line illustration of the SIESCOMS campus"
//           className="
//             block
//             h-auto
//             w-full
//             object-contain
//             object-bottom
//           "
//           loading="eager"
//           fetchPriority="high"
//         />
//       </div> */}

//       {/* Building Illustration */}
// <div className="relative w-full overflow-hidden bg-cream">
//   <img
//     src="/Campus Sketch.png"
//     alt="SIESCOMS campus architectural illustration"
//     className="
//       block
//       w-full
//       h-auto
//       object-contain
//       mix-blend-multiply
//     "
//     loading="eager"
//     fetchPriority="high"
//   />
// </div>

//     </section>
//   );
// }

// export default Hero;


import { conference } from "../../data/conference";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { MapPin, Wifi, GraduationCap, Award } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Conference introduction"
      className="
        relative isolate overflow-hidden
        bg-[#FEF7E6]
        bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.95),transparent_65%)]
      "
    >
      {/* Decorative gold blur orb — top-left */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#E5A82B]/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Decorative navy blur orb — bottom-right */}
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-[360px] w-[360px] rounded-full bg-[#1F3589]/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Fine dotted pattern — top-right */}
      <div
        className="pointer-events-none absolute right-10 top-16 h-32 w-28 opacity-60 [background-image:radial-gradient(#E5A82B_2px,transparent_2px)] [background-size:15px_15px]"
        aria-hidden="true"
      />

      {/* Sketch background layer — blended into the cream backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <img
          src="/Campus Sketch.png"
          alt=""
          loading="eager"
          fetchPriority="high"
          className="
            absolute inset-x-0 mx-auto
            bottom-4 md:bottom-6
            h-[74%] w-full max-w-6xl
            object-contain object-bottom
            mix-blend-multiply opacity-70
            [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_58%,rgba(0,0,0,0.6)_82%,transparent)]
          "
        />
        {/* Soft/cream veil so the headline stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7E6] via-[#FEF7E6]/55 to-[#FEF7E6]/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(255,255,255,0.9),transparent_72%)]" />
        {/* Bottom veil that melts the sketch into the navy wave so it is
            no longer hard-cut at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#172967]/35 via-[#172967]/10 to-transparent" />
      </div>

      {/* Centered single-column layout over the sketch */}
      <div
        className="
          relative z-10 mx-auto flex max-w-5xl flex-col
          items-center text-center
          px-4 pb-12 pt-5
          md:px-8 md:pt-7
        "
      >
        <div className="flex flex-col items-center text-center">
          <Badge variant="default" size="lg" className="mb-6">
            <span className="font-bold text-gold">{conference.dates}</span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <Wifi size={12} className="text-navy" />
            <span>{conference.mode} Mode</span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <MapPin size={12} className="text-navy" />
            <span>{conference.city}</span>
          </Badge>

          <h1
            className="
              mb-5 max-w-2xl font-serif
              text-4xl font-bold leading-tight
              tracking-tight text-navy
              md:text-5xl lg:text-6xl
            "
          >
            Where research meets{" "}
            <span className="relative whitespace-nowrap">
              nation-building
              <span
                className="absolute -bottom-1.5 left-0 h-1.5 w-full rounded-full bg-[#E5A82B]"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p
            className="
              mb-9 max-w-xl text-sm
              leading-relaxed text-[#596579]
              md:text-base
            "
          >
            Call for papers with publication opportunities in Scopus / ABDC /
            peer-reviewed listed journals and conference proceedings with
            ISBN number.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="lg"
              href={conference.submissionPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap size={18} />
              Submit Paper
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={conference.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brochure
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5A82B]/15 text-gold">
                <Award size={18} />
              </span>
              <span className="text-xs font-medium text-[#596579]">
                Scopus / ABDC indexed
                <br />
                <span className="text-navy">publication routes</span>
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5A82B]/15 text-gold">
                <MapPin size={18} />
              </span>
              <span className="text-xs font-medium text-[#596579]">
                Navi Mumbai
                <br />
                <span className="text-navy">hybrid conference</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave divider */}
      <div
        className="relative h-20 w-full overflow-hidden bg-[#172967] md:h-28"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="absolute -top-px left-0 h-32 w-full md:h-40"
        >
          <path
            d="M0 80 C230 145 420 20 720 95 S1180 145 1440 45 L1440 180 L0 180 Z"
            fill="#E5A82B"
          />
          <path
            d="M0 95 C230 160 420 35 720 110 S1180 160 1440 60 L1440 180 L0 180 Z"
            fill="#1F3589"
          />
          <path
            d="M0 125 C240 170 430 65 720 130 S1180 175 1440 95 L1440 180 L0 180 Z"
            fill="#172967"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
