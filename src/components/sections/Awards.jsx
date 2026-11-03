/**
 * Awards.jsx – Best Research Paper awards section.
 */

import { Trophy, Award } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const awardCategories = [
  {
    id: 'mgmt',
    category: 'Management Track',
    prizes: [
      { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
      { rank: '2nd Prize', amount: '₹5,000',  icon: Award  },
    ],
  },
  {
    id: 'tech',
    category: 'Technology Track',
    prizes: [
      { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
      { rank: '2nd Prize', amount: '₹5,000',  icon: Award  },
    ],
  },
];

export function Awards() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-grey-blue)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Awards"
          title="Best Research Paper Awards"
          subtitle="Recognising excellence in research across management and technology tracks."
          id="awards-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {awardCategories.map((cat) => (
            <Card key={cat.id} className="p-8 flex flex-col gap-6">
              <h3
                className="text-navy font-bold text-lg border-b border-[var(--color-border)] pb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {cat.category}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.prizes.map(({ rank, amount, icon: Icon }) => (
                  <div key={rank} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{rank}</p>
                      <p
                        className="text-2xl font-bold"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}
                      >
                        {amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-3">
                Cash prizes + Certificate of Excellence. Winners announced at the valedictory ceremony.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;

