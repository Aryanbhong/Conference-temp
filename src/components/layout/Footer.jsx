/**
 * Footer.jsx – Conference footer with links, contact, social icons.
 */

import { ExternalLink, Share2, AtSign, Rss } from 'lucide-react';
import { conference } from '../../data/conference';
import { navLinks } from '../../data/navLinks';

// Lucide v1+ removed Twitter/Instagram/Linkedin; use generic social icons
const socialIcons = {
  twitter:   AtSign,    // X / Twitter
  instagram: Share2,    // Instagram
  linkedin:  Rss,       // LinkedIn
};

const socialLabels = {
  twitter:   'X (Twitter)',
  instagram: 'Instagram',
  linkedin:  'LinkedIn',
};

const handleScroll = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <h2
            className="font-bold text-xl text-white"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {conference.acronym}
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            {conference.fullName}
          </p>
          <p className="text-white/60 text-xs">
            Organised by {conference.organiser.fullName}, Nerul, Navi Mumbai.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-2">
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
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h3 className="font-semibold text-sm uppercase tracking-widest text-gold mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleScroll(link.id)}
                  className="text-sm text-white/70 hover:text-gold transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest text-gold mb-4">
            Contact
          </h3>
          <address className="not-italic flex flex-col gap-2 text-sm text-white/70">
            <p>{conference.organiser.address}</p>
            {conference.contact.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="hover:text-gold transition-colors duration-150"
              >
                {email}
              </a>
            ))}
            {conference.contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s|-/g, '')}`}
                className="hover:text-gold transition-colors duration-150"
              >
                {phone}
              </a>
            ))}
          </address>
          <a
            href={conference.existingSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light mt-4 transition-colors"
          >
            Visit current site <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40 px-4">
        &copy; {year} {conference.acronym} · {conference.organiser.shortName}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
