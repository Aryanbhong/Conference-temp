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
import { MapPin, Wifi } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Conference introduction"
      className="
        relative isolate overflow-hidden
        bg-[#FEF7E6]
        bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.95),transparent_70%)]
      "
    >
      
{/* Golden decorative circles */}
<div
  className="
    pointer-events-none absolute
    -left-40 -top-48
    h-[500px] w-[500px]
    rounded-full border-[2px]
    border-[#E5A82B]/40
    shadow-[0_0_60px_rgba(229,168,43,0.12)]
  "
>
  <div
    className="
      absolute inset-8 rounded-full
      border border-[#E5A82B]/30
    "
  />
  <div
    className="
      absolute inset-16 rounded-full
      border border-[#E5A82B]/20
    "
  />
</div>

{/* Right golden circles */}
<div
  className="
    pointer-events-none absolute
    -right-40 -top-40
    h-[450px] w-[450px]
    rounded-full border-[2px]
    border-[#E5A82B]/35
  "
>
  <div
    className="
      absolute inset-8 rounded-full
      border border-[#E5A82B]/25
    "
  />
</div>

{/* Visible dotted pattern */}
<div
  className="
    pointer-events-none absolute
    left-8 top-72
    h-40 w-32
    opacity-70
    [background-image:radial-gradient(#E5A82B_2px,transparent_2px)]
    [background-size:16px_16px]
  "
/>

<div
  className="
    pointer-events-none absolute
    right-8 top-64
    h-40 w-32
    opacity-70
    [background-image:radial-gradient(#E5A82B_2px,transparent_2px)]
    [background-size:16px_16px]
  "
/>


      {/* Hero Content */}
      <div
        className="
          relative z-10 mx-auto flex max-w-7xl
          flex-col items-center px-4 pt-12
          text-center md:px-8 md:pt-16
        "
      >
        {/* Badge */}
        <Badge variant="default" className="mb-6">
          <span className="font-bold text-gold">
            {conference.dates}
          </span>

          <span className="text-[var(--color-text-muted)]">·</span>

          <Wifi size={12} className="text-navy" />

          <span>{conference.mode} Mode</span>

          <span className="text-[var(--color-text-muted)]">·</span>

          <MapPin size={12} className="text-navy" />

          <span>{conference.city}</span>
        </Badge>

        {/* Heading */}
        <h1
          className="
            mb-5 max-w-5xl font-serif
            text-4xl font-bold leading-tight
            tracking-tight text-navy
            md:text-5xl lg:text-6xl
          "
        >
          Where research meets nation-building
        </h1>

        {/* Description */}
        <p
          className="
            mb-8 max-w-3xl text-sm
            leading-relaxed text-[#596579]
            md:text-base
          "
        >
          Call for papers with publication opportunities in Scopus / ABDC /
          peer-reviewed listed journals and conference proceedings with
          ISBN number.
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Button
            variant="primary"
            size="lg"
            href={conference.submissionPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
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
      </div>

{/*       
      <div className="relative z-10 w-full overflow-hidden">
        <img
          src="/Campus Sketch.png"
          alt="SIESCOMS campus architectural illustration"
          loading="eager"
          fetchPriority="high"
          className="
            block h-auto w-full
            object-contain object-bottom
            mix-blend-multiply
          "
        />
      </div> */}

    
{/* Building Illustration */}
<div
  className="
    relative z-10 w-full overflow-hidden
    bg-[#FEF7E6]
  "
>
  <img
    src="/Campus Sketch.png"
    alt="SIESCOMS campus architectural illustration"
    className="
      block w-full h-auto
      object-contain object-bottom
      mix-blend-multiply
      [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_88%,transparent_100%)]
    "
    loading="eager"
  />
</div>

      {/* Decorative waves */}
      <div
        className="
          relative h-24 w-full overflow-hidden
          bg-[#172967] md:h-32
        "
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="absolute -top-px left-0 h-36 w-full md:h-44"
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
