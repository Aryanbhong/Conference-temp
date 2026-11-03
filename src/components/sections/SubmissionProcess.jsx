/**
 * SubmissionProcess.jsx – 4-step horizontal stepper.
 */

import { SectionHeading } from '../ui/SectionHeading';
import { Stepper } from '../ui/Stepper';

const steps = [
  {
    id: 1,
    title: 'Create account',
    description: 'Register on the paper submission portal',
    isHighlighted: false,
  },
  {
    id: 2,
    title: 'Submit paper',
    description: 'Upload your paper in the prescribed format',
    isHighlighted: false,
  },
  {
    id: 3,
    title: 'Review & acceptance',
    description: 'Intimation within one week of submission',
    isHighlighted: false,
  },
  {
    id: 4,
    title: 'Register & present',
    description: 'Pay the fee and present at the conference',
    isHighlighted: true,
  },
];

export function SubmissionProcess() {
  return (
    <section
      aria-labelledby="submission-process-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="How to Participate"
          title="Submission process"
          id="submission-process-heading"
        />
        <Stepper steps={steps} className="w-full" />
      </div>
    </section>
  );
}

export default SubmissionProcess;

