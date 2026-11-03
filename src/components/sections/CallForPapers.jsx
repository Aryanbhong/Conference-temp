/**
 * CallForPapers.jsx – 6 tracks accordion/tab card grid.
 */

import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { tracks } from '../../data/tracks';

/* Map icon name strings to lucide components */
import {
  TrendingUp, Megaphone, Users, GitMerge, Cpu, Leaf, ChevronDown,
} from 'lucide-react';

const iconMap = { TrendingUp, Megaphone, Users, GitMerge, Cpu, Leaf };

export function CallForPapers() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="call-for-papers"
      aria-labelledby="cfp-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Call for Papers"
          title="Research tracks & topics"
          subtitle="Submit original, unpublished research across six interdisciplinary tracks."
          id="cfp-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {tracks.map((track) => {
            const Icon = iconMap[track.icon] ?? Leaf;
            const isOpen = openId === track.id;

            return (
              <article
                key={track.id}
                className="border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(track.id)}
                  aria-expanded={isOpen}
                  aria-controls={`track-panel-${track.id}`}
                  id={`track-header-${track.id}`}
                  className="w-full flex items-center gap-4 px-6 py-4 bg-white hover:bg-grey-blue
                    text-left transition-colors duration-150"
                >
                  {/* Icon badge */}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                      transition-colors duration-200 ${isOpen ? 'bg-navy' : 'bg-navy/10'}`}
                  >
                    <Icon
                      size={18}
                      className={isOpen ? 'text-gold' : 'text-navy'}
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    className="font-semibold text-navy flex-1 text-sm md:text-base"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {track.title}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`track-panel-${track.id}`}
                  role="region"
                  aria-labelledby={`track-header-${track.id}`}
                  hidden={!isOpen}
                  className="px-6 py-4 bg-grey-blue border-t border-[var(--color-border)]"
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {track.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-body)]"
                      >
                        <span className="text-gold font-bold mt-0.5 shrink-0">›</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CallForPapers;

