
// import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
// import { SectionHeading } from '../ui/SectionHeading';
// import { conference } from '../../data/conference';

// export function Contact() {
//   return (
//     <section
//       id="contact"
//       aria-labelledby="contact-heading"
//       className="py-12 px-4 md:px-6"
//       style={{ background: 'var(--color-white)' }}
//     >
//       <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
//         <SectionHeading
//           title="Get in touch"
//           id="contact-heading"
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
//           {/* Contact info */}
//           <div className="flex flex-col gap-6">
//             {/* Venue */}
//             <div className="flex items-start gap-3">
//               <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
//                 <MapPin size={17} className="text-navy" aria-hidden="true" />
//               </div>

//               <div>
//                 <h3 className="font-bold text-navy text-sm mb-1">Venue</h3>

//                 <p className="text-[var(--color-text-body)] text-xs leading-relaxed">
//                   {conference.organiser.fullName}
//                   <br />
//                   {conference.organiser.address}
//                 </p>

//                 <a
//                   href="https://maps.google.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1 text-gold text-xs mt-1 hover:text-gold-dark transition-colors"
//                 >
//                   Get directions
//                   <ExternalLink size={10} aria-hidden="true" />
//                 </a>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-start gap-3">
//               <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
//                 <Mail size={17} className="text-navy" aria-hidden="true" />
//               </div>

//               <div>
//                 <h3 className="font-bold text-navy text-sm mb-1">Email</h3>

//                 {conference.contact.emails.map((email) => (
//                   <a
//                     key={email}
//                     href={`mailto:${email}`}
//                     className="block text-xs text-[var(--color-text-body)] hover:text-gold transition-colors"
//                   >
//                     {email}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-start gap-3">
//               <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
//                 <Phone size={17} className="text-navy" aria-hidden="true" />
//               </div>

//               <div>
//                 <h3 className="font-bold text-navy text-sm mb-1">Phone</h3>

//                 {conference.contact.phones.map((phone) => (
//                   <a
//                     key={phone}
//                     href={`tel:${phone.replace(/\s|-/g, '')}`}
//                     className="block text-xs text-[var(--color-text-body)] hover:text-gold transition-colors"
//                   >
//                     {phone}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Map embed */}
//           <div
//             className="rounded-xl overflow-hidden shadow-md border border-[var(--color-border)] min-h-[260px] bg-grey-blue flex items-center justify-center"
//             aria-label="Google Maps embed showing SIESCOMS location"
//           >
//             <iframe
//               src={conference.contact.mapEmbedUrl}
//               width="100%"
//               height="300"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="SIESCOMS location on Google Maps"
//               className="block"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';
import { conference } from '../../data/conference';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative isolate overflow-hidden
        px-4 py-14 sm:px-6 sm:py-16
        md:px-8 md:py-20 lg:px-10
        xl:px-12
      "
      style={{ background: 'var(--color-white)' }}
    >
      {/* Background Decorations */}
      <div
        className="
          pointer-events-none absolute
          -left-40 top-10 h-96 w-96
          rounded-full bg-[#E5A82B]/[0.07] blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-0 h-96 w-96
          rounded-full bg-[#1F3589]/[0.06] blur-3xl
        "
        aria-hidden="true"
      />

      {/* Main Container */}
      <div
        className="
          relative z-10 mx-auto flex w-full
          max-w-[1440px] flex-col items-center
          gap-10 px-2 sm:px-4
          lg:gap-12 lg:px-6 xl:px-8
        "
      >
        {/* Heading */}
        <SectionHeading
          title="Get in touch"
          id="contact-heading"
        />

        {/* Contact Content */}
        <div
          className="
            grid w-full grid-cols-1
            gap-7 lg:grid-cols-2
            lg:gap-10 xl:gap-12
          "
        >
          {/* Contact Information */}
          <div className="flex flex-col gap-5">
            {/* Venue */}
            <div
              className="
                group flex items-start gap-5
                rounded-2xl border border-[#1F3589]/[0.08]
                bg-gradient-to-br from-white to-[#F8F5ED]
                p-5 shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#E5A82B]/40
                hover:shadow-lg
                sm:p-6
              "
            >
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center rounded-xl
                  bg-[#1F3589]/[0.07]
                  text-[#1F3589]
                  transition-all duration-300
                  group-hover:bg-[#1F3589]
                  group-hover:text-[#E5A82B]
                "
              >
                <MapPin size={22} aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    mb-2 text-base font-bold text-[#1F3589]
                    sm:text-lg
                  "
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Venue
                </h3>

                <p
                  className="
                    text-sm leading-7
                    text-[var(--color-text-body)]
                  "
                >
                  {conference.organiser.fullName}
                  <br />
                  {conference.organiser.address}
                </p>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3 inline-flex items-center gap-2
                    text-sm font-semibold text-[#B8860B]
                    transition-colors
                    hover:text-[#1F3589]
                  "
                >
                  Get directions
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              className="
                group flex items-start gap-5
                rounded-2xl border border-[#1F3589]/[0.08]
                bg-gradient-to-br from-white to-[#F8F5ED]
                p-5 shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#E5A82B]/40
                hover:shadow-lg
                sm:p-6
              "
            >
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center rounded-xl
                  bg-[#1F3589]/[0.07]
                  text-[#1F3589]
                  transition-all duration-300
                  group-hover:bg-[#1F3589]
                  group-hover:text-[#E5A82B]
                "
              >
                <Mail size={22} aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    mb-2 text-base font-bold text-[#1F3589]
                    sm:text-lg
                  "
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Email
                </h3>

                <div className="flex flex-col gap-2">
                  {conference.contact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="
                        break-all text-sm
                        text-[var(--color-text-body)]
                        transition-colors
                        hover:text-[#B8860B]
                      "
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div
              className="
                group flex items-start gap-5
                rounded-2xl border border-[#1F3589]/[0.08]
                bg-gradient-to-br from-white to-[#F8F5ED]
                p-5 shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#E5A82B]/40
                hover:shadow-lg
                sm:p-6
              "
            >
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center rounded-xl
                  bg-[#1F3589]/[0.07]
                  text-[#1F3589]
                  transition-all duration-300
                  group-hover:bg-[#1F3589]
                  group-hover:text-[#E5A82B]
                "
              >
                <Phone size={22} aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    mb-2 text-base font-bold text-[#1F3589]
                    sm:text-lg
                  "
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Phone
                </h3>

                <div className="flex flex-col gap-2">
                  {conference.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s|-/g, '')}`}
                      className="
                        text-sm text-[var(--color-text-body)]
                        transition-colors
                        hover:text-[#B8860B]
                      "
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div
            className="
              group relative min-h-[350px]
              overflow-hidden rounded-2xl
              border border-[#1F3589]/10
              bg-[#F3F1EA]
              shadow-[0_15px_45px_rgba(31,53,137,0.10)]
              lg:min-h-full
            "
            aria-label="Google Maps embed showing SIESCOMS location"
          >
            {/* Map Accent */}
            <div
              className="
                absolute inset-x-0 top-0 z-10
                h-1 bg-gradient-to-r
                from-[#1F3589] via-[#E5A82B]
                to-[#1F3589]
              "
              aria-hidden="true"
            />

            <iframe
              src={conference.contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '350px',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SIESCOMS location on Google Maps"
              className="
                absolute inset-0 h-full w-full
                min-h-[350px]
              "
            />
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          className="
            flex w-full max-w-sm items-center gap-4 opacity-60
          "
        >
          <div
            className="
              h-px flex-1
              bg-gradient-to-r from-transparent to-[#E5A82B]
            "
          />

          <div className="h-2 w-2 rotate-45 bg-[#E5A82B]" />

          <div
            className="
              h-px flex-1
              bg-gradient-to-l from-transparent to-[#E5A82B]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
