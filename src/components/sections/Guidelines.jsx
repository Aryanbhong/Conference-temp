// /**
//  * Guidelines.jsx – Author & Submission guidelines as accordion.
//  */

// import { SectionHeading } from '../ui/SectionHeading';
// import { Accordion } from '../ui/Accordion';

// const authorGuidelineItems = [
//   {
//     id: 'ag1',
//     title: 'Paper Format & Length',
//     content: (
//       <ul className="list-disc pl-5 space-y-1 text-sm">
//         <li>Papers must be submitted in MS Word (.docx) format using the provided template.</li>
//         <li>Full papers: 3,000–6,000 words (excluding references and abstract).</li>
//         <li>Abstract: 200–300 words with 5–7 keywords.</li>
//         <li>Font: Times New Roman 12pt, single-spaced, 1-inch margins.</li>
//         <li>Tables and figures must be numbered and captioned.</li>
//         <li>References in APA 7th edition format.</li>
//       </ul>
//     ),
//   },
//   {
//     id: 'ag2',
//     title: 'Originality & Ethics',
//     content: (
//       <ul className="list-disc pl-5 space-y-1 text-sm">
//         <li>All submissions must be original and unpublished work.</li>
//         <li>Papers must not be under review at any other journal or conference.</li>
//         <li>Plagiarism will result in immediate disqualification (max. 15% similarity).</li>
//         <li>AI-generated content must be disclosed in the author statement.</li>
//         <li>All authors must have made a genuine intellectual contribution to the work.</li>
//       </ul>
//     ),
//   },
//   {
//     id: 'ag3',
//     title: 'Abstract Submission',
//     content: (
//       <ul className="list-disc pl-5 space-y-1 text-sm">
//         <li>Submit the abstract separately before the full paper deadline.</li>
//         <li>Include: research objectives, methodology, expected/actual findings, and implications.</li>
//         <li>Abstract acceptance does not guarantee full-paper acceptance.</li>
//       </ul>
//     ),
//   },
//   {
//     id: 'ag4',
//     title: 'Review Process',
//     content: (
//       <ul className="list-disc pl-5 space-y-1 text-sm">
//         <li>All submissions undergo double-blind peer review.</li>
//         <li>Authors should remove all identifying information before submission.</li>
//         <li>Reviewers assess: originality, relevance, methodology, clarity, and contribution.</li>
//         <li>Acceptance decisions are final and communicated by email.</li>
//       </ul>
//     ),
//   },
// ];

// const submissionGuidelineItems = [
//   {
//     id: 'sg1',
//     title: 'How to Submit',
//     content: (
//       <ol className="list-decimal pl-5 space-y-1 text-sm">
//         <li>Create an account on the paper submission portal.</li>
//         <li>Complete your profile with name, affiliation, and contact details.</li>
//         <li>Select the appropriate track for your paper.</li>
//         <li>Upload your anonymised full paper in the prescribed template.</li>
//         <li>Pay the submission fee (if applicable) through the portal.</li>
//         <li>You will receive a confirmation email with your paper ID.</li>
//       </ol>
//     ),
//   },
//   {
//     id: 'sg2',
//     title: 'File Requirements',
//     content: (
//       <ul className="list-disc pl-5 space-y-1 text-sm">
//         <li>File format: MS Word (.docx) only.</li>
//         <li>Maximum file size: 10 MB.</li>
//         <li>File name: <code className="bg-grey-blue px-1 rounded">ICNBITS2027_TrackName_ShortTitle.docx</code></li>
//         <li>Remove all author details from the main document for blind review.</li>
//         <li>Author details entered separately in the submission portal.</li>
//       </ul>
//     ),
//   },
//   {
//     id: 'sg3',
//     title: 'Camera-Ready Submission',
//     content: (
//       <ul className="list-disc pl-5 space-y-1 text-sm">
//         <li>Camera-ready papers must incorporate all reviewer comments.</li>
//         <li>Include full author details in the final version.</li>
//         <li>Sign and submit the copyright transfer form.</li>
//         <li>At least one author must be registered for the paper to appear in proceedings.</li>
//       </ul>
//     ),
//   },
// ];

// export function Guidelines() {
//   return (
//     <section
//       id="guidelines"
//       aria-labelledby="guidelines-heading"
//       className="py-20 px-4 md:px-8"
//       style={{ background: 'var(--color-white)' }}
//     >
//       <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
//         <SectionHeading
//           eyebrow="Guidelines"
//           title="Author & Submission Guidelines"
//           id="guidelines-heading"
//         />

//         <div className="w-full flex flex-col gap-8">
//           <div>
//             <h3
//               className="font-bold text-navy text-lg mb-4"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               Author Guidelines
//             </h3>
//             <Accordion items={authorGuidelineItems} />
//           </div>

//           <div>
//             <h3
//               className="font-bold text-navy text-lg mb-4"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               Submission Guidelines
//             </h3>
//             <Accordion items={submissionGuidelineItems} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Guidelines;



import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';

const authorGuidelineItems = [
  {
    id: 'ag1',
    title: 'Paper Format & Length',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-text-body)]">
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
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-text-body)]">
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
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-text-body)]">
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
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-text-body)]">
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
      <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-[var(--color-text-body)]">
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
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-text-body)]">
        <li>File format: MS Word (.docx) only.</li>
        <li>Maximum file size: 10 MB.</li>
        <li>
          File name:{' '}
          <code className="break-all rounded bg-grey-blue px-2 py-1 text-xs">
            ICNBITS2027_TrackName_ShortTitle.docx
          </code>
        </li>
        <li>Remove all author details from the main document for blind review.</li>
        <li>Author details entered separately in the submission portal.</li>
      </ul>
    ),
  },
  {
    id: 'sg3',
    title: 'Camera-Ready Submission',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-text-body)]">
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
      className="
        relative isolate overflow-hidden
        px-4 py-14 sm:px-6 sm:py-16
        md:px-8 md:py-20 lg:px-10
        xl:px-12
      "
      style={{ background: 'var(--color-white)' }}
    >
      {/* Background Decorations */}
      <div
        className="
          pointer-events-none absolute
          -left-40 top-20 h-96 w-96
          rounded-full bg-[#E5A82B]/[0.06] blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-10 h-96 w-96
          rounded-full bg-[#1F3589]/[0.05] blur-3xl
        "
        aria-hidden="true"
      />

      {/* Main Container */}
      <div
        className="
          relative z-10 mx-auto flex w-full
          max-w-[1440px] flex-col items-center
          gap-10 px-2 sm:px-4
          lg:gap-12 lg:px-6 xl:px-8
        "
      >
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Guidelines"
          title="Author & Submission Guidelines"
          id="guidelines-heading"
        />

        {/* Guidelines Content */}
        <div className="flex w-full flex-col gap-8 lg:gap-10">

          {/* Author Guidelines */}
          <div
            className="
              rounded-2xl border border-[#1F3589]/10
              bg-gradient-to-br from-white to-[#F8F5ED]/70
              p-5 shadow-sm
              sm:p-7 lg:p-9
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center rounded-xl
                  bg-[#1F3589]/[0.08]
                  text-[#1F3589]
                  font-bold text-lg
                "
              >
                01
              </div>

              <div>
                <h3
                  className="text-lg font-bold text-navy sm:text-xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Author Guidelines
                </h3>
                <p className="mt-1 text-xs text-[var(--color-text-body)] sm:text-sm">
                  Formatting, originality and review requirements
                </p>
              </div>
            </div>

            <Accordion items={authorGuidelineItems} />
          </div>

          {/* Submission Guidelines */}
          <div
            className="
              rounded-2xl border border-[#1F3589]/10
              bg-gradient-to-br from-white to-[#F8F5ED]/70
              p-5 shadow-sm
              sm:p-7 lg:p-9
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center rounded-xl
                  bg-[#E5A82B]/[0.13]
                  text-[#9A7010]
                  font-bold text-lg
                "
              >
                02
              </div>

              <div>
                <h3
                  className="text-lg font-bold text-navy sm:text-xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Submission Guidelines
                </h3>
                <p className="mt-1 text-xs text-[var(--color-text-body)] sm:text-sm">
                  Submission procedure and final paper requirements
                </p>
              </div>
            </div>

            <Accordion items={submissionGuidelineItems} />
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="flex w-full max-w-sm items-center gap-4 opacity-60">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E5A82B]" />
          <div className="h-2 w-2 rotate-45 bg-[#E5A82B]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E5A82B]" />
        </div>
      </div>
    </section>
  );
}

export default Guidelines;


