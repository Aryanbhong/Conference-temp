/**
 * Card.jsx – Generic white card with soft shadow.
 * Variants: 'default' | 'flat' | 'bordered'
 */

import PropTypes from 'prop-types';

const variantClasses = {
  default:  'bg-white rounded-xl shadow-md',
  flat:     'bg-white rounded-xl',
  bordered: 'bg-white rounded-xl border border-[var(--color-border)]',
};

/**
 * @param {{ variant?: string, className?: string, children: React.ReactNode }} props
 */
export function Card({ variant = 'default', className = '', children, ...rest }) {
  return (
    <div
      className={`${variantClasses[variant] ?? variantClasses.default} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  variant: PropTypes.oneOf(['default', 'flat', 'bordered']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;

