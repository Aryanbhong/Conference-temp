// /**
//  * Header.jsx – Top brand bar: SIES logo | gold divider | IC-NBITS title.
//  */

// import { conference } from '../../data/conference';

// export function Header() {
//   return (
//     <header className="w-full bg-white border-b border-[var(--color-border)] py-3 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto flex items-center gap-4">
//         {/* SIES Logo placeholder */}
//         <a
//           href={conference.organiser.website}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={`Visit ${conference.organiser.fullName} website`}
//           className="shrink-0"
//         >
//           <div className="w-16 h-16 rounded-md bg-navy flex items-center justify-center">
//             <span className="text-white font-bold text-xs text-center leading-tight px-1">
//               SIES
//             </span>
//           </div>
//         </a>

//         {/* Gold vertical divider */}
//         <div className="w-px self-stretch bg-gold mx-1" aria-hidden="true" />

//         {/* Conference identity */}
//         <div className="flex flex-col min-w-0">
//           <span
//             className="text-navy font-bold text-xl md:text-2xl tracking-tight leading-none"
//             style={{ fontFamily: 'var(--font-serif)' }}
//           >
//             {conference.acronym}
//           </span>
//           <span className="text-[var(--color-text-body)] text-xs md:text-sm leading-snug mt-0.5 line-clamp-2">
//             {conference.fullName}
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;




import { conference } from "../../data/conference";

export function Header() {
  return (
    <header className="w-full border-b border-[var(--color-border)] bg-white px-4 py-1.5 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* Left: SIES Logo + Conference Identity */}
        <div className="flex min-w-0 items-center gap-3.5">
          <a
            href={conference.organiser.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SIES College of Management Studies"
            className="shrink-0"
          >
            <img
              src="/Siescoms-logo.png"
              alt="SIES College of Management Studies logo"
              className="h-8 w-auto object-contain sm:h-9"
            />
          </a>

          {/* Gold Divider */}
          <div
            className="h-9 w-[2px] shrink-0 bg-gold"
            aria-hidden="true"
          />

          <div className="min-w-0">
            <h1 className="font-serif text-lg font-bold leading-tight text-navy sm:text-xl">
              {conference.acronym}
            </h1>
            <p className="mt-0.5 truncate text-[10px] leading-snug text-[var(--color-text-body)] sm:text-xs">
              {conference.fullName}
            </p>
          </div>
        </div>

        {/* Right: dates + host (fills the bar so it isn't empty) */}
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <span
            className="rounded-full border border-[#E5A82B]/30 bg-cream px-3 py-1 text-[11px] font-semibold text-navy"
          >
            {conference.dates}
          </span>
          <span className="hidden text-[11px] font-medium text-[var(--color-text-muted)] lg:inline">
            Organised by SIES College of Management Studies
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;
