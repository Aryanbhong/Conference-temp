// /**
//  * Registration.jsx – Fee table, benefits, and registration link.
//  */

// import { CheckCircle2 } from 'lucide-react';
// import { SectionHeading } from '../ui/SectionHeading';
// import { Button } from '../ui/Button';
// import { feeCategories, gstRate, registrationBenefits } from '../../data/fees';
// import { conference } from '../../data/conference';

// function formatAmount(amount, currency = 'INR') {
//   if (amount === null) return '—';
//   if (currency === 'USD') return `$${amount}`;
//   return `₹${amount.toLocaleString('en-IN')}`;
// }

// function withGst(amount, currency = 'INR') {
//   if (amount === null) return '—';
//   const gstAmount = Math.round(amount * (gstRate / 100));
//   if (currency === 'USD') return `$${amount + gstAmount}`;
//   return `₹${(amount + gstAmount).toLocaleString('en-IN')}`;
// }

// export function Registration() {
//   return (
//     <section
//       id="registration"
//       aria-labelledby="registration-heading"
//       className="py-20 px-4 md:px-8"
//       style={{ background: 'var(--color-grey-blue)' }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
//         <SectionHeading
//           eyebrow="Registration"
//           title="Registration fees"
//           subtitle={`All amounts in INR unless stated otherwise. GST @ ${gstRate}% applicable.`}
//           id="registration-heading"
//         />

//         <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Fee table */}
//           <div className="lg:col-span-2 overflow-x-auto rounded-xl shadow-sm border border-[var(--color-border)] bg-white">
//             <table className="w-full text-sm" aria-label="Registration fee table">
//               <thead>
//                 <tr className="bg-navy text-white">
//                   <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Category</th>
//                   <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">Early Bird</th>
//                   <th className="text-right px-4 py-3 font-semibold">Regular</th>
//                   <th className="text-right px-4 py-3 font-semibold rounded-tr-xl whitespace-nowrap">
//                     Regular + GST ({gstRate}%)
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[var(--color-border)]">
//                 {feeCategories.map((fee, idx) => (
//                   <tr
//                     key={fee.id}
//                     className={idx % 2 === 0 ? 'bg-white' : 'bg-grey-blue'}
//                   >
//                     <td className="px-5 py-3 font-medium text-navy">
//                       {fee.category}
//                       {fee.note && (
//                         <span className="block text-xs text-[var(--color-text-muted)] font-normal">
//                           {fee.note}
//                         </span>
//                       )}
//                     </td>
//                     <td className="px-4 py-3 text-right text-[var(--color-text-body)]">
//                       {formatAmount(fee.earlyBird, fee.currency)}
//                     </td>
//                     <td className="px-4 py-3 text-right font-semibold text-navy">
//                       {formatAmount(fee.regular, fee.currency)}
//                     </td>
//                     <td className="px-4 py-3 text-right text-gold font-bold">
//                       {fee.currency === 'USD'
//                         ? formatAmount(fee.regular, fee.currency)
//                         : withGst(fee.regular, fee.currency)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Benefits */}
//           <div className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm p-6 flex flex-col gap-5">
//             <h3
//               className="font-bold text-navy text-lg"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               Registration includes
//             </h3>
//             <ul className="flex flex-col gap-3">
//               {registrationBenefits.map((benefit) => (
//                 <li key={benefit} className="flex items-start gap-3">
//                   <CheckCircle2
//                     size={18}
//                     className="text-gold shrink-0 mt-0.5"
//                     aria-hidden="true"
//                   />
//                   <span className="text-sm text-[var(--color-text-body)]">{benefit}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
//               <Button
//                 variant="primary"
//                 size="md"
//                 href={conference.registrationUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full justify-center"
//               >
//                 Register Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Registration;


/**
 * Registration.jsx – Streamlined Tabbed Fee Schedule
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { feeCategories, gstRate, registrationBenefits } from '../../data/fees';
import { conference } from '../../data/conference';

function formatAmount(amount, currency = 'INR') {
  if (amount === null || amount === undefined) return '—';
  if (currency === 'USD') return `$${amount}`;
  return `₹${amount.toLocaleString('en-IN')}`;
}

function calculateGst(amount, rate) {
  if (amount === null || amount === undefined) return 0;
  return Math.round(amount * (rate / 100));
}

export function Registration() {
  const [selectedId, setSelectedId] = useState(feeCategories[0]?.id || 1);
  const [includeGst, setIncludeGst] = useState(true);

  const activeCategory =
    feeCategories.find((item) => item.id === selectedId) || feeCategories[0];

  const isUsd = activeCategory.currency === 'USD';
  const currentGstRate = isUsd ? 0 : gstRate;

  const baseRegular = activeCategory.regular || 0;
  const baseEarly = activeCategory.earlyBird || 0;

  const regularGst = calculateGst(baseRegular, currentGstRate);
  const earlyGst = calculateGst(baseEarly, currentGstRate);

  const totalRegular = baseRegular + (includeGst ? regularGst : 0);
  const totalEarly = baseEarly + (includeGst ? earlyGst : 0);

  return (
    <section
      id="registration"
      aria-labelledby="registration-heading"
      className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ background: '#F8F5EC' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {/* Section Heading */}
        <div className="max-w-3xl text-center">
          <SectionHeading
            title="Registration Fees"
            subtitle={`Select your category below to view applicable fees and inclusions. GST @ ${gstRate}% applied where applicable.`}
            id="registration-heading"
          />
        </div>

        {/* GST Toggle */}
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
          <span className="text-xs font-semibold text-slate-700">
            Include GST ({gstRate}%) in rates
          </span>
          <button
            type="button"
            onClick={() => setIncludeGst(!includeGst)}
            className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              includeGst ? 'bg-[#1F3589]' : 'bg-slate-300'
            }`}
            role="switch"
            aria-checked={includeGst}
          >
            <span
              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out ${
                includeGst ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Main Workspace */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Category List */}
          <div className="flex flex-col gap-2 lg:col-span-5">
            {feeCategories.map((fee) => {
              const isSelected = fee.id === selectedId;

              return (
                <button
                  key={fee.id}
                  type="button"
                  onClick={() => setSelectedId(fee.id)}
                  className={`flex items-center justify-between rounded-xl p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#1F3589] text-white shadow-md'
                      : 'border border-slate-200/80 bg-white text-slate-800 hover:border-[#1F3589]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold ${
                        isSelected ? 'text-[#E5A82B]' : 'text-slate-400'
                      }`}
                    >
                      {String(fee.id).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-snug">
                        {fee.category}
                      </p>
                      {fee.note && (
                        <p
                          className={`text-xs ${
                            isSelected ? 'text-slate-200' : 'text-slate-500'
                          }`}
                        >
                          {fee.note}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold ${
                        isSelected ? 'text-[#E5A82B]' : 'text-[#1F3589]'
                      }`}
                    >
                      {formatAmount(fee.regular, fee.currency)}
                    </span>
                    <ChevronRight
                      size={16}
                      className={isSelected ? 'text-[#E5A82B]' : 'text-slate-400'}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div>
                  {/* Category Title */}
                  <div className="border-b border-slate-100 pb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#855800]">
                      <ShieldCheck size={14} /> Selected Category
                    </span>
                    <h3
                      className="mt-1 font-serif text-2xl font-bold text-[#1F3589]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {activeCategory.category}
                    </h3>
                  </div>

                  {/* Fee Options Grid */}
                  <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Early Bird */}
                    <div className="rounded-xl border border-slate-200 bg-[#FEF7E6]/50 p-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Early Bird Fee
                      </span>
                      <p className="mt-1 text-2xl font-bold text-[#1F3589]">
                        {formatAmount(totalEarly, activeCategory.currency)}
                      </p>
                      {includeGst && !isUsd && (
                        <p className="mt-1 text-[11px] text-slate-500">
                          Base rate: {formatAmount(baseEarly)} + 18% GST
                        </p>
                      )}
                    </div>

                    {/* Regular */}
                    <div className="rounded-xl border border-[#1F3589] bg-[#1F3589] p-4 text-white">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#E5A82B]">
                        Standard Fee
                      </span>
                      <p className="mt-1 text-2xl font-bold">
                        {formatAmount(totalRegular, activeCategory.currency)}
                      </p>
                      {includeGst && !isUsd && (
                        <p className="mt-1 text-[11px] text-slate-200">
                          Base rate: {formatAmount(baseRegular)} + 18% GST
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Registration Benefits
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {registrationBenefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-[#E5A82B]"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit Link */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={conference.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F3589] py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#101D4B]"
                  >
                    Proceed to Registration
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;