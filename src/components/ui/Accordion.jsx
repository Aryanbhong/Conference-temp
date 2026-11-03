/**
 * Accordion.jsx – Accessible single/multi accordion component.
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * @param {{ items: Array<{id:string|number, title:string, content:React.ReactNode}>, allowMultiple?: boolean, className?: string }} props
 */
export function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-header-${item.id}`}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-navy bg-white hover:bg-grey-blue transition-colors duration-200 gap-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
              hidden={!isOpen}
              className="px-6 py-4 bg-white text-sm text-[var(--color-text-body)] leading-relaxed"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  allowMultiple: PropTypes.bool,
  className: PropTypes.string,
};

export default Accordion;

