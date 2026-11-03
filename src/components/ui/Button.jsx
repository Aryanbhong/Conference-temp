// /**
//  * Button.jsx – Reusable button component.
//  * Variants: 'primary' | 'secondary' | 'accent' | 'ghost'
//  * Sizes:    'sm' | 'md' | 'lg'
//  */

// import PropTypes from 'prop-types';

// const variantClasses = {
//   primary:
//     'bg-navy text-white border-2 border-navy hover:bg-navy-dark hover:border-navy-dark focus-visible:ring-2 focus-visible:ring-gold',
//   secondary:
//     'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white focus-visible:ring-2 focus-visible:ring-navy',
//   accent:
//     'bg-gold text-white border-2 border-gold hover:bg-gold-dark hover:border-gold-dark focus-visible:ring-2 focus-visible:ring-gold',
//   ghost:
//     'bg-transparent text-navy border-2 border-transparent hover:border-navy focus-visible:ring-2 focus-visible:ring-navy',
// };

// const sizeClasses = {
//   sm: 'px-4 py-1.5 text-sm',
//   md: 'px-6 py-2.5 text-sm',
//   lg: 'px-8 py-3.5 text-base',
// };

// /**
//  * @param {{ variant?: string, size?: string, className?: string, as?: string, href?: string, target?: string, rel?: string, disabled?: boolean, children: React.ReactNode, onClick?: function }} props
//  */
// export function Button({
//   variant = 'primary',
//   size = 'md',
//   className = '',
//   as: Tag = 'button',
//   href,
//   target,
//   rel,
//   disabled = false,
//   children,
//   onClick,
//   ...rest
// }) {
//   const base =
//     'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 cursor-pointer select-none';

//   const classes = [
//     base,
//     variantClasses[variant] ?? variantClasses.primary,
//     sizeClasses[size] ?? sizeClasses.md,
//     disabled ? 'opacity-50 pointer-events-none' : '',
//     className,
//   ]
//     .filter(Boolean)
//     .join(' ');

//   if (href) {
//     return (
//       <a href={href} target={target} rel={rel} className={classes} {...rest}>
//         {children}
//       </a>
//     );
//   }

//   return (
//     <Tag className={classes} disabled={disabled} onClick={onClick} {...rest}>
//       {children}
//     </Tag>
//   );
// }

// Button.propTypes = {
//   variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'ghost']),
//   size: PropTypes.oneOf(['sm', 'md', 'lg']),
//   className: PropTypes.string,
//   as: PropTypes.string,
//   href: PropTypes.string,
//   target: PropTypes.string,
//   rel: PropTypes.string,
//   disabled: PropTypes.bool,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
// };

// export default Button;


/**
 * Button.jsx – Premium reusable button component.
 * Variants: 'primary' | 'secondary' | 'accent' | 'ghost'
 * Sizes:    'sm' | 'md' | 'lg'
 */

import PropTypes from 'prop-types';

const variantClasses = {
  primary: `
    border border-navy
    bg-gradient-to-r from-navy to-[#354FA5]
    text-white
    shadow-[0_5px_18px_rgba(31,53,137,0.18)]
    hover:border-[#354FA5]
    hover:shadow-[0_8px_28px_rgba(31,53,137,0.3)]
    focus-visible:ring-2 focus-visible:ring-gold
    focus-visible:ring-offset-2
  `,

  secondary: `
    border border-navy/15
    bg-white/80 text-navy
    shadow-sm backdrop-blur-md
    hover:border-navy/30
    hover:bg-navy hover:text-white
    hover:shadow-[0_6px_20px_rgba(31,53,137,0.12)]
    focus-visible:ring-2 focus-visible:ring-navy
    focus-visible:ring-offset-2
  `,

  accent: `
    border border-gold
    bg-gradient-to-r from-gold to-[#F2C45D]
    text-[#1F3589]
    shadow-[0_5px_18px_rgba(229,168,43,0.2)]
    hover:border-[#F2C45D]
    hover:shadow-[0_8px_28px_rgba(229,168,43,0.3)]
    focus-visible:ring-2 focus-visible:ring-gold
    focus-visible:ring-offset-2
  `,

  ghost: `
    border border-transparent
    bg-transparent text-navy
    hover:border-navy/15
    hover:bg-navy/5
    focus-visible:ring-2 focus-visible:ring-navy
    focus-visible:ring-offset-2
  `,
};

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  href,
  target,
  rel,
  disabled = false,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const base = `
    group relative isolate
    inline-flex items-center justify-center gap-2
    overflow-hidden rounded-xl
    font-semibold tracking-wide
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    active:translate-y-0 active:scale-[0.98]
    focus-visible:outline-none
    select-none
  `;

  const disabledClasses = `
    cursor-not-allowed opacity-50
    shadow-none hover:translate-y-0
    hover:shadow-none active:scale-100
  `;

  const classes = [
    base,
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    disabled ? disabledClasses : 'cursor-pointer',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render as an anchor when href is provided.
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={classes}
        {...rest}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />

        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <Tag
      type={Tag === 'button' ? type : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={Tag !== 'button' && disabled ? true : undefined}
      onClick={disabled ? undefined : onClick}
      className={classes}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />

      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </Tag>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  as: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
