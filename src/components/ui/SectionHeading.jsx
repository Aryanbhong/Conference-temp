// /**
//  * SectionHeading.jsx – Consistent section heading with eyebrow + gold bar.
//  */

// import PropTypes from 'prop-types';

// /**
//  * @param {{ eyebrow?: string, title: string, subtitle?: string, align?: 'center'|'left', className?: string }} props
//  */
// export function SectionHeading({
//   eyebrow,
//   title,
//   subtitle,
//   align = 'center',
//   className = '',
// }) {
//   const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

//   return (
//     <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
//       {eyebrow && (
//         <span className="eyebrow">{eyebrow}</span>
//       )}
//       <h2
//         className="font-serif text-3xl md:text-4xl font-bold text-navy leading-tight"
//         style={{ fontFamily: 'var(--font-serif)' }}
//       >
//         {title}
//       </h2>
//       {/* Gold underline bar */}
//       <div className={`gold-bar ${align === 'center' ? 'mx-auto' : ''}`} />
//       {subtitle && (
//         <p className="text-text-body max-w-2xl mt-1 text-base md:text-lg leading-relaxed"
//            style={{ color: 'var(--color-text-body)' }}>
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// }

// SectionHeading.propTypes = {
//   eyebrow: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string,
//   align: PropTypes.oneOf(['center', 'left']),
//   className: PropTypes.string,
// };

// export default SectionHeading;


/**
 * SectionHeading.jsx – Premium conference section heading.
 * Features: eyebrow, title, gold divider, subtitle.
 */

import PropTypes from 'prop-types';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isLeft = align === 'left';

  const alignClass = isLeft
    ? 'items-start text-left'
    : 'items-center text-center';

  return (
    <div
      className={`
        relative flex flex-col
        gap-5 sm:gap-6
        ${alignClass}
        ${className}
      `}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <span
          className="
            inline-flex items-center gap-3
            rounded-full
            border border-gold/30
            bg-gold/10
            px-4 py-2
            text-[10px] sm:text-xs
            font-bold uppercase tracking-[0.2em]
            text-gold-dark
            shadow-[0_4px_15px_rgba(229,168,43,0.06)]
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(229,168,43,0.5)]" />
          {eyebrow}
        </span>
      )}

      {/* Main title */}
      <h2
        className="
          max-w-4xl
          font-serif
          text-3xl sm:text-4xl lg:text-5xl
          font-bold
          leading-[1.15]
          tracking-tight
          text-navy
          [text-wrap:balance]
        "
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h2>

      {/* Decorative divider */}
      <div
        className={`
          flex items-center gap-2
          ${isLeft ? '' : 'justify-center'}
        `}
        aria-hidden="true"
      >
        <span className="h-[2px] w-10 rounded-full bg-gold/40" />

        <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-gold to-[#F2C45D] shadow-[0_0_12px_rgba(229,168,43,0.25)]" />

        <span className="h-[2px] w-10 rounded-full bg-gold/40" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="
            max-w-2xl
            text-sm sm:text-base lg:text-lg
            leading-7 sm:leading-8
            text-slate-600
            [text-wrap:pretty]
          "
          style={{ color: 'var(--color-text-body)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left']),
  className: PropTypes.string,
};

export default SectionHeading;
