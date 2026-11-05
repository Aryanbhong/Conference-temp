
import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navLinks';
import { conference } from '../../data/conference';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../ui/Button';

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  const handleNavClick = useCallback(
    (id) => (e) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    },
    [],
  );

  const linkClass = (id) =>
    [
      'relative text-xs font-medium transition-colors duration-200 pb-0.5',
      'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-200',
      activeId === id
        ? 'text-gold after:w-full'
        : 'text-white/80 hover:text-white after:w-0 hover:after:w-full',
    ].join(' ');

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-navy shadow-md"
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 flex items-center h-12 gap-4">
        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5 flex-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className={linkClass(link.id)}
                aria-current={activeId === link.id ? 'location' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Submit Paper CTA */}
        <div className="ml-auto hidden lg:block">
          <Button
            variant="accent"
            size="sm"
            href={conference.submissionPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Paper
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <span
            className="text-white font-bold text-xs"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            IC-NBITS 2027
          </span>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="text-white p-1 rounded focus-visible:ring-2 focus-visible:ring-gold"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-navy-dark border-t border-white/10 px-4 pb-3"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className={[
                    'block px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150',
                    activeId === link.id
                      ? 'bg-white/10 text-gold'
                      : 'text-white/80 hover:bg-white/5 hover:text-white',
                  ].join(' ')}
                  aria-current={activeId === link.id ? 'location' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-2.5 px-3">
            <Button
              variant="accent"
              size="sm"
              href={conference.submissionPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
            >
              Submit Paper
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;