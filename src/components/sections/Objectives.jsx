/**
 * Objectives.jsx – 4 conference objectives as numbered cards.
 */

import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const objectives = [
  {
    id: 1,
    title: 'Foster Interdisciplinary Research',
    description:
      'Create a platform where management, technology and sustainability scholars collaborate on pressing national challenges.',
  },
  {
    id: 2,
    title: 'Bridge Academia and Industry',
    description:
      'Connect academic research with real-world industry problems to produce impactful, actionable insights for nation-building.',
  },
  {
    id: 3,
    title: 'Promote Global Knowledge Exchange',
    description:
      'Facilitate interaction between Indian and international researchers, creating pathways for collaborative global research.',
  },
  {
    id: 4,
    title: 'Advance Publication Excellence',
    description:
      'Provide quality publication pathways via Scopus/ABDC indexed journals and conference proceedings with ISBN, elevating research visibility.',
  },
];

export function Objectives() {
  return (
    <section
      aria-labelledby="objectives-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-grey-blue)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Conference Objectives"
          title="What we aim to achieve"
          id="objectives-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {objectives.map((obj) => (
            <Card key={obj.id} className="p-7 flex gap-5 items-start">
              <span
                className="text-4xl font-bold text-gold/30 leading-none shrink-0"
                style={{ fontFamily: 'var(--font-serif)' }}
                aria-hidden="true"
              >
                {String(obj.id).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-bold text-navy text-base mb-2">
                  {obj.title}
                </h3>
                <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Objectives;

