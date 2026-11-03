/**
 * BackToTop.jsx – Floating "back to top" button that appears after scrolling.
 */

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-navy shadow-lg
        flex items-center justify-center text-white border-2 border-gold
        hover:bg-gold hover:border-gold transition-all duration-200
        focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}

export default BackToTop;

