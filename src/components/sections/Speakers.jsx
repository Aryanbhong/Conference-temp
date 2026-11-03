/**
 * Speakers.jsx – Speaker cards grid grouped by category.
 */

import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { speakerCategories } from '../../data/speakers';

/** Generate initials from a name, handling "[Name TBA]" placeholders */
function getInitials(name) {
  const clean = name.replace(/\[.*?\]/g, '').trim();
  return clean
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('') || '?';
}

function SpeakerCard({ speaker }) {
  const initials = getInitials(speaker.name);
  const isPlaceholder = speaker.name.includes('[');

  return (
    <Card className="p-6 flex flex-col items-center text-center gap-3">
      {/* Avatar */}
      <div
        className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-[var(--color-border)]"
        aria-hidden="true"
      >
        {speaker.photo ? (
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-2xl font-bold text-white"
            style={{ background: 'var(--color-navy)' }}
          >
            {initials}
          </div>
        )}
      </div>

      <div>
        <p
          className={`font-bold text-base leading-snug ${isPlaceholder ? 'text-[var(--color-text-muted)] italic text-sm' : 'text-navy'}`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {speaker.name}
        </p>
        <p className="text-gold text-xs font-semibold mt-0.5">{speaker.role}</p>
        <p className="text-[var(--color-text-body)] text-xs mt-1">{speaker.affiliation}</p>
      </div>
    </Card>
  );
}

export function Speakers() {
  return (
    <section
      id="speakers"
      aria-labelledby="speakers-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Speakers"
          title="Distinguished guests & speakers"
          subtitle="Details to be announced. Check back soon."
          id="speakers-heading"
        />

        {speakerCategories.map((group) => (
          <div key={group.category} className="w-full">
            <h3
              className="text-navy font-bold text-lg mb-6 text-center"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {group.category}
            </h3>
            <div
              className={`grid gap-6 justify-center ${
                group.speakers.length === 1
                  ? 'grid-cols-1 max-w-xs mx-auto'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              {group.speakers.map((s) => (
                <SpeakerCard key={s.id} speaker={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;

