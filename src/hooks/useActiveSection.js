/**
 * useActiveSection.js
 * Uses IntersectionObserver to track which section is currently in view.
 * Returns the id of the active section.
 *
 * @param {string[]} sectionIds  - ordered list of section IDs to observe
 * @param {object}   [options]   - IntersectionObserver options override
 */

import { useState, useEffect, useRef } from 'react';

/**
 * @param {string[]} sectionIds
 * @param {{ rootMargin?: string, threshold?: number }} [options]
 * @returns {string} activeId
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  const rootMargin = options.rootMargin ?? '-20% 0px -70% 0px';
  const threshold  = options.threshold  ?? 0;

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold },
    );

    const observer = observerRef.current;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeId;
}

export default useActiveSection;

