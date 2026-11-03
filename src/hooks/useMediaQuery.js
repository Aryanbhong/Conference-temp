/**
 * useMediaQuery.js
 * Returns true when the given CSS media query string matches.
 *
 * @param {string} query  e.g. '(max-width: 640px)'
 * @returns {boolean}
 */

import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export default useMediaQuery;

