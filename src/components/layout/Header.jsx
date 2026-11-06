
import { conference } from "../../data/conference";

export function Header() {
  return (
    <header className="w-full border-b border-[var(--color-border)] bg-white px-3 py-1 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">

        {/* Left: SIES Logo + Conference Identity */}
        <div className="flex min-w-0 items-center gap-2.5">
          <a
            href={conference.organiser.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SIES College of Management Studies"
            className="shrink-0"
          >
            {/* <img
              src="/Siescoms-logo.png"
              alt="SIES College of Management Studies logo"
              className="h-4 w-auto object-contain sm:h-7"
            /> */}
            <img
  src="/Siescoms-logo.png?v=2"
  alt="SIES College of Management Studies logo"
  style={{
    width: "180px",
    height: "auto",
    maxWidth: "180px",
    display: "block",
  }}
/>
          </a>

          {/* Gold Divider */}
          <div
            className="h-7 w-px shrink-0 bg-gold"
            aria-hidden="true"
          />

          {/* Conference Identity */}
          <div className="min-w-0">
            <h1 className="font-serif text-sm font-bold leading-tight text-navy sm:text-base">
              {conference.acronym}
            </h1>

            <p className="mt-0.5 truncate text-[9px] leading-snug text-[var(--color-text-body)] sm:text-[10px]">
              {conference.fullName}
            </p>
          </div>
        </div>

        {/* Right: Dates + Host */}
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <span className="rounded-full border border-[#E5A82B]/30 bg-cream px-2.5 py-0.5 text-[9px] font-semibold text-navy sm:text-[10px]">
            {conference.dates}
          </span>

          <span className="hidden text-[10px] font-medium text-[var(--color-text-muted)] lg:inline">
            Organised by SIES College of Management Studies
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;
