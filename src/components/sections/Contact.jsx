import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { conference } from '../../data/conference';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          title="Get in touch"
          id="contact-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            {/* Venue */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-base mb-1">Venue</h3>
                <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                  {conference.organiser.fullName}
                  <br />
                  {conference.organiser.address}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold text-xs mt-1.5 hover:text-gold-dark transition-colors"
                >
                  Get directions <ExternalLink size={11} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-base mb-1">Email</h3>
                {conference.contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-sm text-[var(--color-text-body)] hover:text-gold transition-colors"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-base mb-1">Phone</h3>
                {conference.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s|-/g, '')}`}
                    className="block text-sm text-[var(--color-text-body)] hover:text-gold transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div
            className="rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)] min-h-[300px] bg-grey-blue flex items-center justify-center"
            aria-label="Google Maps embed showing SIESCOMS location"
          >
            <iframe
              src={conference.contact.mapEmbedUrl}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SIESCOMS location on Google Maps"
              className="block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

