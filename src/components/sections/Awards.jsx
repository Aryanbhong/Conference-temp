
import { Trophy, Award } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const awardCategories = [
  {
    id: 'mgmt',
    category: 'Management Track',
    prizes: [
      { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
      { rank: '2nd Prize', amount: '₹5,000', icon: Award },
    ],
  },
  {
    id: 'tech',
    category: 'Technology Track',
    prizes: [
      { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
      { rank: '2nd Prize', amount: '₹5,000', icon: Award },
    ],
  },
];

export function Awards() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-heading"
      className="px-4 py-12 sm:px-6 md:px-8 md:py-14"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 md:gap-10">
        <SectionHeading
          title="Best Research Paper Awards"
          subtitle="Recognising excellence in research across management and technology tracks."
          id="awards-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
          {awardCategories.map((cat) => (
            <Card key={cat.id} className="p-5 sm:p-6 flex flex-col gap-4">
              <h3
                className="text-navy font-bold text-base border-b border-[var(--color-border)] pb-2.5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {cat.category}
              </h3>

              <div className="flex flex-col gap-3">
                {cat.prizes.map(({ rank, amount, icon: Icon }) => (
                  <div key={rank} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon
                        size={19}
                        className="text-gold"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-navy text-xs sm:text-sm">
                        {rank}
                      </p>

                      <p
                        className="text-xl font-bold"
                        style={{
                          color: 'var(--color-gold)',
                          fontFamily: 'var(--font-serif)',
                        }}
                      >
                        {amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] leading-5 text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-3">
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