// /**
//  * Badge.jsx – Pill badge component (used in hero, etc.).
//  * Variants: 'default' | 'gold' | 'navy' | 'outline'
//  */

// import PropTypes from 'prop-types';

// const variantClasses = {
//   default: 'bg-white/80 text-navy border border-[var(--color-border)] backdrop-blur-sm',
//   gold:    'bg-gold/20 text-gold-dark border border-gold/40',
//   navy:    'bg-navy text-white',
//   outline: 'bg-transparent text-navy border border-navy',
// };

// /**
//  * @param {{ variant?: string, className?: string, children: React.ReactNode }} props
//  */
// export function Badge({ variant = 'default', className = '', children }) {
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold
//         tracking-wide ${variantClasses[variant] ?? variantClasses.default} ${className}`}
//     >
//       {children}
//     </span>
//   );
// }

// Badge.propTypes = {
//   variant: PropTypes.oneOf(['default', 'gold', 'navy', 'outline']),
//   className: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };

// export default Badge;


/**
 * Badge.jsx – Premium conference pill badge.
 * Variants: 'default' | 'gold' | 'navy' | 'outline'
 */

import PropTypes from 'prop-types';

const variantClasses = {
  default: `
    border border-white/70
    bg-white/70
    text-navy
    shadow-[0_4px_15px_rgba(31,53,137,0.06)]
    backdrop-blur-xl
    hover:border-gold/40
    hover:bg-white/90
  `,

  gold: `
    border border-gold/40
    bg-gradient-to-r from-gold/15 via-[#FEF7E6] to-gold/20
    text-gold-dark
    shadow-[0_4px_20px_rgba(229,168,43,0.12)]
    hover:border-gold/70
    hover:shadow-[0_6px_25px_rgba(229,168,43,0.2)]
  `,

  navy: `
    border border-white/10
    bg-gradient-to-r from-navy to-[#354FA5]
    text-white
    shadow-[0_5px_20px_rgba(31,53,137,0.2)]
    hover:shadow-[0_8px_30px_rgba(31,53,137,0.3)]
  `,

  outline: `
    border border-navy/25
    bg-transparent
    text-navy
    hover:border-gold
    hover:bg-gold/5
  `,
};

const sizeClasses = {
  sm: 'px-3 py-1 text-[10px]',
  md: 'px-4 py-1.5 text-xs',
  lg: 'px-5 py-2 text-sm',
};

export function Badge({
  variant = 'default',
  size = 'md',
  className = '',
  children,
}) {
  return (
    <span
      className={`
        group relative inline-flex items-center
        justify-center gap-2 overflow-hidden
        rounded-full font-semibold tracking-wide
        transition-all duration-300 ease-out
        hover:-translate-y-0.5
        active:translate-y-0
        ${variantClasses[variant] ?? variantClasses.default}
        ${sizeClasses[size] ?? sizeClasses.md}
        ${className}
      `}
    >
      {/* Subtle hover highlight */}
      <span
        className="pointer-events-none absolute inset-0
          rounded-full bg-gradient-to-r
          from-transparent via-white/30 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100"
        aria-hidden="true"
      />

      <span className="relative z-10 inline-flex
        items-center gap-2">
        {children}
      </span>
    </span>
  );
}

Badge.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'gold',
    'navy',
    'outline',
  ]),

  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  className: PropTypes.string,

  children: PropTypes.node.isRequired,
};

export default Badge;
