
// import { ExternalLink, Share2, AtSign, Rss } from 'lucide-react';
// import { conference } from '../../data/conference';
// import { navLinks } from '../../data/navLinks';

// const socialIcons = {
//   twitter: AtSign,
//   instagram: Share2,
//   linkedin: Rss,
// };

// const socialLabels = {
//   twitter: 'X (Twitter)',
//   instagram: 'Instagram',
//   linkedin: 'LinkedIn',
// };

// const handleScroll = (id) => (e) => {
//   e.preventDefault();
//   document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
// };

// export function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-navy text-white" aria-label="Site footer">
//       <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Brand column */}
//         <div className="flex flex-col gap-3">
//           <h2
//             className="font-bold text-lg text-white"
//             style={{ fontFamily: 'var(--font-serif)' }}
//           >
//             {conference.acronym}
//           </h2>

//           <p className="text-white/70 text-xs leading-relaxed">
//             {conference.fullName}
//           </p>

//           <p className="text-white/60 text-[11px]">
//             Organised by {conference.organiser.fullName}, Nerul, Navi Mumbai.
//           </p>

//           {/* Social icons */}
//           <div className="flex gap-2.5 mt-1">
//             {Object.entries(conference.social).map(([platform, url]) => {
//               const Icon = socialIcons[platform];
//               if (!Icon) return null;

//               return (
//                 <a
//                   key={platform}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Follow on ${socialLabels[platform] ?? platform}`}
//                   className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
//                 >
//                   <Icon size={14} aria-hidden="true" />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {/* Quick links */}
//         <nav aria-label="Footer navigation">
//           <h3 className="font-semibold text-xs uppercase tracking-widest text-gold mb-3">
//             Quick Links
//           </h3>

//           <ul className="flex flex-col gap-1.5">
//             {navLinks.map((link) => (
//               <li key={link.id}>
//                 <a
//                   href={`#${link.id}`}
//                   onClick={handleScroll(link.id)}
//                   className="text-xs text-white/70 hover:text-gold transition-colors duration-150"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Contact */}
//         <div>
//           <h3 className="font-semibold text-xs uppercase tracking-widest text-gold mb-3">
//             Contact
//           </h3>

//           <address className="not-italic flex flex-col gap-1.5 text-xs text-white/70">
//             <p>{conference.organiser.address}</p>

//             {conference.contact.emails.map((email) => (
//               <a
//                 key={email}
//                 href={`mailto:${email}`}
//                 className="hover:text-gold transition-colors duration-150"
//               >
//                 {email}
//               </a>
//             ))}

//             {conference.contact.phones.map((phone) => (
//               <a
//                 key={phone}
//                 href={`tel:${phone.replace(/\s|-/g, '')}`}
//                 className="hover:text-gold transition-colors duration-150"
//               >
//                 {phone}
//               </a>
//             ))}
//           </address>

//           <a
//             href={conference.existingSiteUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-[11px] text-gold hover:text-gold-light mt-3 transition-colors"
//           >
//             Visit current site
//             <ExternalLink size={10} aria-hidden="true" />
//           </a>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/10 py-3 text-center text-[11px] text-white/40 px-4">
//         &copy; {year} {conference.acronym} · {conference.organiser.shortName}. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import { ExternalLink, Share2, AtSign, Rss } from "lucide-react";
import { conference } from "../../data/conference";
import { navLinks } from "../../data/navLinks";

const socialIcons = {
  twitter: AtSign,
  instagram: Share2,
  linkedin: Rss,
};

const socialLabels = {
  twitter: "X (Twitter)",
  instagram: "Instagram",
  linkedin: "LinkedIn",
};

const handleScroll = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-navy text-white"
      aria-label="Site footer"
    >
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-10 md:px-8 lg:grid-cols-3 lg:gap-16 lg:px-10 lg:py-14 xl:px-12">

        {/* Brand Column */}
        <div className="flex flex-col gap-3">
          <h2
            className="text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {conference.acronym}
          </h2>

          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            {conference.fullName}
          </p>

          <p className="text-xs leading-relaxed text-white/60">
            Organised by {conference.organiser.fullName}, Nerul, Navi Mumbai.
          </p>

          {/* Social Icons */}
          <div className="mt-2 flex items-center gap-3">
            {Object.entries(conference.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              if (!Icon) return null;

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${socialLabels[platform] ?? platform}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <nav
          aria-label="Footer navigation"
          className="md:col-span-1"
        >
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleScroll(link.id)}
                  className="inline-block text-sm text-white/70 transition-colors duration-150 hover:translate-x-1 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>

          <address className="flex flex-col gap-3 text-sm not-italic leading-relaxed text-white/70">
            <p>{conference.organiser.address}</p>

            {conference.contact.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="w-fit break-all transition-colors duration-150 hover:text-gold"
              >
                {email}
              </a>
            ))}

            {conference.contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s|-/g, "")}`}
                className="w-fit transition-colors duration-150 hover:text-gold"
              >
                {phone}
              </a>
            ))}
          </address>

          <a
            href={conference.existingSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-gold transition-colors hover:text-gold-light"
          >
            Visit current site
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-4 py-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] leading-relaxed text-white/40 sm:text-xs">
            &copy; {year} {conference.acronym} · {conference.organiser.shortName}. All rights reserved.
          </p>

          <p className="text-[10px] tracking-wide text-white/30 sm:text-xs">
            IC-NBITS 2027
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
