/**
 * fees.js – Registration fee categories.
 * Amounts in Indian Rupees (₹). Add 18% GST where applicable.
 */

export const feeCategories = [
  {
    id: 1,
    category: 'Research Scholar / PhD Student',
    earlyBird: 1500,
    regular: 2000,
    includesGst: false,
    note: 'Proof of enrollment required.',
  },
  {
    id: 2,
    category: 'Faculty / Academician (Indian)',
    earlyBird: 2500,
    regular: 3000,
    includesGst: false,
    note: '',
  },
  {
    id: 3,
    category: 'Industry Professional (Indian)',
    earlyBird: 3000,
    regular: 3500,
    includesGst: false,
    note: '',
  },
  {
    id: 4,
    category: 'Student (UG/PG)',
    earlyBird: 1000,
    regular: 1500,
    includesGst: false,
    note: 'Valid college ID required.',
  },
  {
    id: 5,
    category: 'International Delegate (Online)',
    earlyBird: null,
    regular: 75,   // USD
    currency: 'USD',
    includesGst: false,
    note: 'Participation via online mode.',
  },
  {
    id: 6,
    category: 'International Delegate (In-person)',
    earlyBird: null,
    regular: 150,  // USD
    currency: 'USD',
    includesGst: false,
    note: 'Includes conference kit and lunch.',
  },
];

export const gstRate = 18; // percent

export const registrationBenefits = [
  'Access to all conference sessions and keynotes',
  'Conference kit (bag, pen, notepad, programme booklet)',
  'Certificate of Participation / Presentation',
  'Lunch and refreshments on conference day(s)',
  'Access to conference proceedings (digital)',
  'Networking with researchers and industry professionals',
  'Pre-conference workshop (for registered delegates)',
];

export default { feeCategories, gstRate, registrationBenefits };

