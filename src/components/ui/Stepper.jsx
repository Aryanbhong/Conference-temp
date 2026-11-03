/**
 * Stepper.jsx – Horizontal (desktop) / vertical (mobile) step indicator.
 */

import PropTypes from 'prop-types';
import { Check } from 'lucide-react';

/**
 * @param {{ steps: Array<{id:number, title:string, description:string, isHighlighted?:boolean}>, className?: string }} props
 */
export function Stepper({ steps, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Connecting line – hidden on mobile */}
      <div
        className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-[var(--color-border)] z-0"
        style={{ marginLeft: '10%', marginRight: '10%' }}
        aria-hidden="true"
      />

      <ol className="flex flex-col md:flex-row gap-8 md:gap-4 relative z-10">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          const circleBase =
            'w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold border-2 shrink-0 transition-colors';
          const circleClass = step.isHighlighted
            ? `${circleBase} bg-gold border-gold text-white shadow-lg`
            : `${circleBase} bg-navy border-navy text-white`;

          return (
            <li
              key={step.id}
              className="flex flex-col items-center text-center flex-1 gap-3"
            >
              {/* Circle */}
              <div className={circleClass} aria-hidden="true">
                {isLast ? <Check size={22} strokeWidth={3} /> : step.id}
              </div>

              {/* Label */}
              <div>
                <p className={`font-semibold text-sm ${step.isHighlighted ? 'text-gold' : 'text-navy'}`}>
                  {step.title}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5 max-w-[10rem] mx-auto leading-snug">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isHighlighted: PropTypes.bool,
    }),
  ).isRequired,
  className: PropTypes.string,
};

export default Stepper;

