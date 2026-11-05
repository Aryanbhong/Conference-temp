/**
 * Hero.jsx – Immersive IC-NBITS conference hero.
 */

import { conference } from '../../data/conference';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

import {
  MapPin,
  Wifi,
  ArrowUpRight,
  Download,
} from 'lucide-react';

export function Hero() {

  async function downloadBrochure() {
  try {
    const response = await fetch('/documents/IC-NBITS%20Brochure.pdf');

    if (!response.ok) {
      throw new Error('Brochure PDF not found');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'IC-NBITS Brochure.pdf';

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Brochure download failed:', error);
    alert('Unable to download the brochure. Please try again.');
  }
}

  return (
    <section
      id="hero"
      aria-label="Conference introduction"
      className="
        relative isolate overflow-hidden
        bg-[#FEF7E6]
      "
    >
      {/* Campus background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Campus Sketch.png"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="
            absolute inset-0
            h-full w-full
            object-cover object-center
          "
        />

        {/* Soft ivory overlay */}
        <div
          className="
            absolute inset-0
            bg-[#FEF7E6]/65
          "
        />

        {/* Gentle top-to-bottom fade */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#FFFDF7]/80
            via-transparent
            to-[#FEF7E6]/35
          "
        />

        {/* Subtle golden atmosphere */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#E5A82B]/10
            via-transparent
            to-[#E5A82B]/15
          "
        />
      </div>

      {/* Golden decorative circles */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 -top-48 z-[1]
          h-[450px] w-[450px]
          rounded-full border-2 border-gold/40
          shadow-[0_0_60px_rgba(229,168,43,0.12)]
        "
      >
        <div className="absolute inset-8 rounded-full border border-gold/30" />
        <div className="absolute inset-16 rounded-full border border-gold/20" />
      </div>

      {/* Right decorative circles */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-40 z-[1]
          h-[400px] w-[400px]
          rounded-full border-2 border-gold/35
        "
      >
        <div className="absolute inset-8 rounded-full border border-gold/25" />
        <div className="absolute inset-16 rounded-full border border-gold/15" />
      </div>

      {/* Left dotted pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-5 top-1/3 z-[1]
          hidden h-36 w-28 opacity-50 md:block
          [background-image:radial-gradient(#E5A82B_2px,transparent_2px)]
          [background-size:16px_16px]
        "
      />

      {/* Right dotted pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-5 top-1/3 z-[1]
          hidden h-36 w-28 opacity-50 md:block
          [background-image:radial-gradient(#E5A82B_2px,transparent_2px)]
          [background-size:16px_16px]
        "
      />

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto
          flex max-w-7xl flex-col
          items-center px-4
          pb-40 pt-16
          text-center sm:px-8
          md:pb-48 md:pt-20
          lg:pb-56 lg:pt-24
        "
      >
        {/* Conference details */}
        <Badge
          variant="default"
          className="
            mb-8 flex flex-wrap justify-center
            gap-2 border-gold/40
            bg-white/75 px-5 py-3
            shadow-[0_8px_30px_rgba(31,53,137,0.08)]
            backdrop-blur-xl
            sm:gap-3
          "
        >
          <span className="font-bold text-gold-dark">
            {conference.dates}
          </span>

          <span className="text-slate-400">·</span>

          <Wifi size={14} className="text-navy" />

          <span>{conference.mode} Mode</span>

          <span className="text-slate-400">·</span>

          <MapPin size={14} className="text-navy" />

          <span>{conference.city}</span>
        </Badge>

        {/* Main heading */}
        <h1
          className="
            mb-6 max-w-5xl
            font-serif text-4xl
            font-bold leading-[1.12]
            tracking-tight text-navy
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Where research
          <br />

          <span className="relative inline-block">
            meets nation-building

            <span
              aria-hidden="true"
              className="
                absolute -bottom-3 left-1/2
                h-1 w-2/3 -translate-x-1/2
                rounded-full
                bg-gradient-to-r
                from-transparent via-gold to-transparent
              "
            />
          </span>
        </h1>

        {/* Decorative divider */}
        <div
          aria-hidden="true"
          className="my-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold/50 sm:w-20" />
          <span className="h-2.5 w-2.5 rotate-45 bg-gold" />
          <span className="h-px w-12 bg-gold/50 sm:w-20" />
        </div>

        {/* Description */}
        <p
          className="
            mb-9 max-w-3xl
            text-sm leading-7
            text-[#39465C]
            sm:text-base sm:leading-8
            md:text-lg
          "
        >
          Call for papers with publication opportunities in
          Scopus / ABDC / peer-reviewed listed journals and
          conference proceedings with ISBN number.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href={"/"}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[190px] rounded-full"
          >
            Submit Paper
            <ArrowUpRight size={18} />
          </Button>

        <Button
  variant="secondary"
  size="lg"
  onClick={downloadBrochure}
  className="
    min-w-[210px]
    rounded-full border-2
    border-navy bg-white/60
    backdrop-blur-md
  "
>
  <Download size={18} />
  Download Brochure
</Button>

        </div>
      </div>

      {/* Bottom navy and gold waves */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 left-0 z-20
          h-28 w-full overflow-hidden
          sm:h-36 md:h-44
        "
      >
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-full w-full"
        >
          {/* Gold wave */}
          <path
            d="M0 105 C230 35 420 150 720 90 S1180 35 1440 110 L1440 180 L0 180 Z"
            fill="#E5A82B"
          />

          {/* Main navy wave */}
          <path
            d="M0 120 C230 50 420 165 720 105 S1180 50 1440 125 L1440 180 L0 180 Z"
            fill="#1F3589"
          />

          {/* Deep navy bottom */}
          <path
            d="M0 145 C240 85 430 175 720 130 S1180 80 1440 145 L1440 180 L0 180 Z"
            fill="#172967"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
