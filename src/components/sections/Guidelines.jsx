/**
 * Guidelines.jsx – Author & Submission guidelines as accordion.
 */

import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';

const authorGuidelineItems = [
  {
    id: 'ag1',
    title: 'Paper Format & Length',
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>Papers must be submitted in MS Word (.docx) format using the provided template.</li>
        <li>Full papers: 3,000–6,000 words (excluding references and abstract).</li>
        <li>Abstract: 200–300 words with 5–7 keywords.</li>
        <li>Font: Times New Roman 12pt, single-spaced, 1-inch margins.</li>
        <li>Tables and figures must be numbered and captioned.</li>
        <li>References in APA 7th edition format.</li>
      </ul>
    ),
  },
  {
    id: 'ag2',
    title: 'Originality & Ethics',
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>All submissions must be original and unpublished work.</li>
        <li>Papers must not be under review at any other journal or conference.</li>
        <li>Plagiarism will result in immediate disqualification (max. 15% similarity).</li>
        <li>AI-generated content must be disclosed in the author statement.</li>
        <li>All authors must have made a genuine intellectual contribution to the work.</li>
      </ul>
    ),
  },
  {
    id: 'ag3',
    title: 'Abstract Submission',
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>Submit the abstract separately before the full paper deadline.</li>
        <li>Include: research objectives, methodology, expected/actual findings, and implications.</li>
        <li>Abstract acceptance does not guarantee full-paper acceptance.</li>
      </ul>
    ),
  },
  {
    id: 'ag4',
    title: 'Review Process',
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>All submissions undergo double-blind peer review.</li>
        <li>Authors should remove all identifying information before submission.</li>
        <li>Reviewers assess: originality, relevance, methodology, clarity, and contribution.</li>
        <li>Acceptance decisions are final and communicated by email.</li>
      </ul>
    ),
  },
];

const submissionGuidelineItems = [
  {
    id: 'sg1',
    title: 'How to Submit',
    content: (
      <ol className="list-decimal pl-5 space-y-1 text-sm">
        <li>Create an account on the paper submission portal.</li>
        <li>Complete your profile with name, affiliation, and contact details.</li>
        <li>Select the appropriate track for your paper.</li>
        <li>Upload your anonymised full paper in the prescribed template.</li>
        <li>Pay the submission fee (if applicable) through the portal.</li>
        <li>You will receive a confirmation email with your paper ID.</li>
      </ol>
    ),
  },
  {
    id: 'sg2',
    title: 'File Requirements',
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>File format: MS Word (.docx) only.</li>
        <li>Maximum file size: 10 MB.</li>
        <li>File name: <code className="bg-grey-blue px-1 rounded">ICNBITS2027_TrackName_ShortTitle.docx</code></li>
        <li>Remove all author details from the main document for blind review.</li>
        <li>Author details entered separately in the submission portal.</li>
      </ul>
    ),
  },
  {
    id: 'sg3',
    title: 'Camera-Ready Submission',
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>Camera-ready papers must incorporate all reviewer comments.</li>
        <li>Include full author details in the final version.</li>
        <li>Sign and submit the copyright transfer form.</li>
        <li>At least one author must be registered for the paper to appear in proceedings.</li>
      </ul>
    ),
  },
];

export function Guidelines() {
  return (
    <section
      id="guidelines"
      aria-labelledby="guidelines-heading"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-grey-blue)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Guidelines"
          title="Author & Submission Guidelines"
          id="guidelines-heading"
        />

        <div className="w-full flex flex-col gap-8">
          <div>
            <h3
              className="font-bold text-navy text-lg mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Author Guidelines
            </h3>
            <Accordion items={authorGuidelineItems} />
          </div>

          <div>
            <h3
              className="font-bold text-navy text-lg mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Submission Guidelines
            </h3>
            <Accordion items={submissionGuidelineItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;

