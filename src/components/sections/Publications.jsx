/**
 * Publications.jsx – Publication partners: journals and proceedings.
 */

import { ExternalLink, BookOpen, FileText } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { journalPublications, proceedings } from '../../data/publications';

export function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-grey-blue)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Publications"
          title="Publication opportunities"
          subtitle="Selected papers will be recommended for publication in Scopus / ABDC indexed journals."
          id="publications-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Journals list */}
          <div className="lg:col-span-2">
            <h3
              className="text-navy font-bold text-lg mb-5 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <BookOpen size={20} className="text-gold" aria-hidden="true" />
              Partner Journals
            </h3>
            <ol className="flex flex-col gap-4">
              {journalPublications.map((journal) => (
                <li key={journal.id}>
                  <Card className="p-5 flex items-start gap-4">
                    <span
                      className="text-2xl font-bold text-gold/40 leading-none w-7 shrink-0"
                      style={{ fontFamily: 'var(--font-serif)' }}
                      aria-hidden="true"
                    >
                      {String(journal.id).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-navy text-sm leading-snug">
                        {journal.name}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {journal.indexing.map((idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{
                              background: idx.startsWith('Scopus')
                                ? '#E5A82B22'
                                : '#1F358922',
                              color: idx.startsWith('Scopus')
                                ? 'var(--color-gold-dark)'
                                : 'var(--color-navy)',
                            }}
                          >
                            {idx}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1">
                        {journal.publisher} — {journal.note}
                      </p>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </div>

          {/* Proceedings card */}
          <div>
            <h3
              className="text-navy font-bold text-lg mb-5 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <FileText size={20} className="text-gold" aria-hidden="true" />
              Conference Proceedings
            </h3>
            <Card className="p-6 flex flex-col gap-4 h-fit">
              <p className="font-bold text-navy text-base">
                {proceedings.title}
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="eyebrow">ISBN</span>
                  <span className="text-sm font-semibold text-navy">{proceedings.isbn}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="eyebrow">Publisher</span>
                  <span className="text-sm text-navy">{proceedings.publisher}</span>
                </div>
              </div>
              <div>
                <p className="eyebrow mb-1">Indexed in</p>
                <div className="flex flex-wrap gap-1.5">
                  {proceedings.indexed.map((idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 rounded-full bg-navy/10 text-navy font-semibold"
                    >
                      {idx}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-3">
                {proceedings.note}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;

