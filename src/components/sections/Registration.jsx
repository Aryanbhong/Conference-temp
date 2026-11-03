/**
 * Registration.jsx – Fee table, benefits, and registration link.
 */

import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { feeCategories, gstRate, registrationBenefits } from '../../data/fees';
import { conference } from '../../data/conference';

function formatAmount(amount, currency = 'INR') {
  if (amount === null) return '—';
  if (currency === 'USD') return `$${amount}`;
  return `₹${amount.toLocaleString('en-IN')}`;
}

function withGst(amount, currency = 'INR') {
  if (amount === null) return '—';
  const gstAmount = Math.round(amount * (gstRate / 100));
  if (currency === 'USD') return `$${amount + gstAmount}`;
  return `₹${(amount + gstAmount).toLocaleString('en-IN')}`;
}

export function Registration() {
  return (
    <section
      id="registration"
      aria-labelledby="registration-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-grey-blue)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Registration"
          title="Registration fees"
          subtitle={`All amounts in INR unless stated otherwise. GST @ ${gstRate}% applicable.`}
          id="registration-heading"
        />

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fee table */}
          <div className="lg:col-span-2 overflow-x-auto rounded-xl shadow-sm border border-[var(--color-border)] bg-white">
            <table className="w-full text-sm" aria-label="Registration fee table">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Category</th>
                  <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">Early Bird</th>
                  <th className="text-right px-4 py-3 font-semibold">Regular</th>
                  <th className="text-right px-4 py-3 font-semibold rounded-tr-xl whitespace-nowrap">
                    Regular + GST ({gstRate}%)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {feeCategories.map((fee, idx) => (
                  <tr
                    key={fee.id}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-grey-blue'}
                  >
                    <td className="px-5 py-3 font-medium text-navy">
                      {fee.category}
                      {fee.note && (
                        <span className="block text-xs text-[var(--color-text-muted)] font-normal">
                          {fee.note}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--color-text-body)]">
                      {formatAmount(fee.earlyBird, fee.currency)}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-navy">
                      {formatAmount(fee.regular, fee.currency)}
                    </td>
                    <td className="px-4 py-3 text-right text-gold font-bold">
                      {fee.currency === 'USD'
                        ? formatAmount(fee.regular, fee.currency)
                        : withGst(fee.regular, fee.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm p-6 flex flex-col gap-5">
            <h3
              className="font-bold text-navy text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Registration includes
            </h3>
            <ul className="flex flex-col gap-3">
              {registrationBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[var(--color-text-body)]">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
              <Button
                variant="primary"
                size="md"
                href={conference.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;

