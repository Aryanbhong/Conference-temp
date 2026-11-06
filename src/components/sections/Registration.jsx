

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
      className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
      style={{ background: '#F8F5EC' }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        {/* Section Heading */}
        <div className="max-w-2xl text-center">
          <SectionHeading
            title="Registration Fees"
            subtitle={`Select your category below to view applicable fees and inclusions. GST @ ${gstRate}% applied where applicable.`}
            id="registration-heading"
          />
        </div>

        {/* GST Toggle */}
        <div className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-700 sm:text-xs">
            Include GST ({gstRate}%) in rates
          </span>

          <button
            type="button"
            onClick={() => setIncludeGst(!includeGst)}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              includeGst ? 'bg-[#1F3589]' : 'bg-slate-300'
            }`}
            role="switch"
            aria-checked={includeGst}
          >
            <span
              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out ${
                includeGst ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Main Workspace */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Category List */}
          <div className="flex flex-col gap-1.5 lg:col-span-5">
            {feeCategories.map((fee) => {
              const isSelected = fee.id === selectedId;

              return (
                <button
                  key={fee.id}
                  type="button"
                  onClick={() => setSelectedId(fee.id)}
                  className={`flex items-center justify-between rounded-lg p-3 text-left transition-all duration-200 sm:p-3.5 ${
                    isSelected
                      ? 'bg-[#1F3589] text-white shadow-md'
                      : 'border border-slate-200/80 bg-white text-slate-800 hover:border-[#1F3589]/40'
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span
                      className={`text-[11px] font-bold ${
                        isSelected ? 'text-[#E5A82B]' : 'text-slate-400'
                      }`}
                    >
                      {String(fee.id).padStart(2, '0')}
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold leading-snug sm:text-sm">
                        {fee.category}
                      </p>

                      {fee.note && (
                        <p
                          className={`mt-0.5 text-[10px] sm:text-xs ${
                            isSelected ? 'text-slate-200' : 'text-slate-500'
                          }`}
                        >
                          {fee.note}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="ml-2 flex shrink-0 items-center gap-1.5">
                    <span
                      className={`text-xs font-bold sm:text-sm ${
                        isSelected ? 'text-[#E5A82B]' : 'text-[#1F3589]'
                      }`}
                    >
                      {formatAmount(fee.regular, fee.currency)}
                    </span>

                    <ChevronRight
                      size={14}
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
                className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <div>
                  {/* Category Title */}
                  <div className="border-b border-slate-100 pb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#855800]">
                      <ShieldCheck size={12} />
                      Selected Category
                    </span>

                    <h3
                      className="mt-1 font-serif text-xl font-bold text-[#1F3589] sm:text-2xl"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {activeCategory.category}
                    </h3>
                  </div>

                  {/* Fee Options Grid */}
                  <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {/* Early Bird */}
                    <div className="rounded-lg border border-slate-200 bg-[#FEF7E6]/50 p-3.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
                        Early Bird Fee
                      </span>

                      <p className="mt-1 text-xl font-bold text-[#1F3589] sm:text-2xl">
                        {formatAmount(totalEarly, activeCategory.currency)}
                      </p>

                      {includeGst && !isUsd && (
                        <p className="mt-1 text-[10px] text-slate-500 sm:text-[11px]">
                          Base rate: {formatAmount(baseEarly)} + 18% GST
                        </p>
                      )}
                    </div>

                    {/* Regular */}
                    <div className="rounded-lg border border-[#1F3589] bg-[#1F3589] p-3.5 text-white">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E5A82B] sm:text-xs">
                        Standard Fee
                      </span>

                      <p className="mt-1 text-xl font-bold sm:text-2xl">
                        {formatAmount(totalRegular, activeCategory.currency)}
                      </p>

                      {includeGst && !isUsd && (
                        <p className="mt-1 text-[10px] text-slate-200 sm:text-[11px]">
                          Base rate: {formatAmount(baseRegular)} + 18% GST
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Registration Benefits
                    </h4>

                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {registrationBenefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 sm:text-xs"
                        >
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-[#E5A82B]"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit Link */}
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <a
                    href={'/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1F3589] py-3 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#101D4B] sm:text-sm"
                  >
                    Proceed to Registration
                    <ArrowRight size={14} />
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
