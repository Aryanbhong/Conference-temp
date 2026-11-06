
// // import { SectionHeading } from '../ui/SectionHeading';
// // import {
// //   organisingCommittee,
// //   technicalProgrammeCommittee,
// // } from '../../data/committee';

// // import {
// //   Crown,
// //   Users,
// //   GraduationCap,
// //   Sparkles,
// //   Globe2,
// // } from 'lucide-react';


// // function initials(name) {
// //   const clean = name.replace(/\[.*?\]/g, '').trim();
// //   return (
// //     clean
// //       .split(' ')
// //       .filter(Boolean)
// //       .slice(0, 2)
// //       .map((word) => word[0].toUpperCase())
// //       .join('') || '?'
// //   );
// // }

// // function PersonCard({ person, size = 'md', featured = false }) {
// //   const isPlaceholder = person.name.includes('[');
// //   const ini = initials(person.name);

// //   const isLarge = size === 'lg';

// //   return (
// //     <article
// //       className={`group relative flex flex-col items-center text-center rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
// //         featured
// //           ? 'bg-gradient-to-b from-white via-white to-[#FEF7E6]/60 border border-[#E5A82B]/30 shadow-xl sm:p-8'
// //           : 'bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md hover:border-[#1F3589]/30 hover:bg-white hover:shadow-md'
// //       }`}
// //     >

// //       {featured && (
// //         <div className="absolute top-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E5A82B] to-[#F8D878] opacity-70 group-hover:w-20 transition-all duration-300" />
// //       )}

// //       <div className="relative mb-5">
// //         <div
// //           className={`relative flex items-center justify-center overflow-hidden rounded-full font-bold text-white ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-105 ${
// //             isLarge ? 'w-24 h-24 text-2xl sm:w-28 sm:h-28 sm:text-3xl' : 'w-16 h-16 text-base'
// //           }`}
// //           style={{
// //             background: isPlaceholder
// //               ? '#9CA3AF'
// //               : 'linear-gradient(135deg, #1F3589 0%, #354FA5 100%)',
// //           }}
// //         >
// //           {person.photo ? (
// //             <img
// //               src={person.photo}
// //               alt={person.name}
// //               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
// //               loading="lazy"
// //             />
// //           ) : (
// //             <span>{ini}</span>
// //           )}
// //         </div>

// //         {featured && (
// //           <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E5A82B] text-white shadow-md">
// //             <Crown size={14} />
// //           </div>
// //         )}
// //       </div>

   
// //       <div className="flex flex-col items-center flex-1">
// //         <h4
// //           className={`font-bold leading-snug transition-colors duration-200 ${
// //             isLarge ? 'text-lg sm:text-xl font-serif text-[#1F3589]' : 'text-sm sm:text-base text-slate-800'
// //           } ${isPlaceholder ? 'text-slate-400 italic' : 'group-hover:text-[#855800]'}`}
// //           style={{ fontFamily: isLarge ? 'var(--font-serif)' : 'inherit' }}
// //         >
// //           {person.name}
// //         </h4>

// //         {person.role && (
// //           <span className="mt-2 inline-flex items-center rounded-full border border-[#E5A82B]/30 bg-[#FEF7E6] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#855800]">
// //             {person.role}
// //           </span>
// //         )}

// //         <p className="mt-2 text-xs leading-relaxed text-slate-500 font-medium">
// //           {person.designation || person.affiliation}
// //         </p>

// //         {person.country && (
// //           <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-slate-400">
// //             <Globe2 size={12} className="text-[#E5A82B]" />
// //             {person.country}
// //           </p>
// //         )}
// //       </div>
// //     </article>
// //   );
// // }

// // function CommitteeGroup({ title, subtitle, icon: Icon, children }) {
// //   return (
// //     <div className="w-full">
// //       {/* Group Header */}
// //       <div className="mb-10 flex flex-col items-center text-center">
// //         <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5A82B]/30 bg-gradient-to-br from-[#FEF7E6] to-white text-[#B8860B] shadow-sm">
// //           <Icon size={22} />
// //         </div>

// //         <h3
// //           className="font-serif text-2xl font-bold text-[#1F3589] sm:text-3xl"
// //           style={{ fontFamily: 'var(--font-serif)' }}
// //         >
// //           {title}
// //         </h3>

// //         {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}

// //         <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#1F3589] via-[#E5A82B] to-[#1F3589]" />
// //       </div>

// //       {children}
// //     </div>
// //   );
// // }



// // export function Committee() {
// //   const {
// //     patron,
// //     chairperson,
// //     convenors,
// //     jointConvenors,
// //     members,
// //   } = organisingCommittee;

// //   const allLeadership = [
// //     ...(patron || []),
// //     ...(chairperson || []),
// //     ...(convenors || []),
// //     ...(jointConvenors || []),
// //   ];

// //   return (
// //     <section
// //       id="committee"
// //       aria-labelledby="committee-heading"
// //       className="relative isolate overflow-hidden px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
// //       style={{ background: 'var(--color-white)' }}
// //     >
// //       {/* Background Lighting Aura */}
// //       <div
// //         className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#1F3589]/[0.05] blur-3xl opacity-70"
// //         aria-hidden="true"
// //       />
// //       <div
// //         className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#E5A82B]/[0.1] blur-3xl opacity-70"
// //         aria-hidden="true"
// //       />

// //       <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20">
// //         {/* Main Section Header */}
// //         <div className="w-full text-center">

// //           <SectionHeading 
// //             title="Meet Our Committee"
// //             id="committee-heading"
// //           />

// //           <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
// //             A distinguished team of leaders, researchers, and academic professionals driving innovation, collaboration, and nation-building.
// //           </p>
// //         </div>

// //         {/* Leadership Group */}
// //         {allLeadership.length > 0 && (
// //           <CommitteeGroup
// //             title="Leadership"
// //             subtitle="Guiding the vision and strategic direction of IC-NBITS"
// //             icon={Crown}
// //           >
// //             <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //               {allLeadership.map((person) => (
// //                 <PersonCard
// //                   key={person.id}
// //                   person={person}
// //                   size="lg"
// //                   featured
// //                 />
// //               ))}
// //             </div>
// //           </CommitteeGroup>
// //         )}

// //         {/* Committee Members Group */}
// //         {members?.length > 0 && (
// //           <CommitteeGroup
// //             title="Committee Members"
// //             subtitle="The dedicated team bringing the conference together"
// //             icon={Users}
// //           >
// //             <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
// //               {members.map((person) => (
// //                 <PersonCard key={person.id} person={person} />
// //               ))}
// //             </div>
// //           </CommitteeGroup>
// //         )}

// //         {/* Technical Programme Committee Group */}
// //         {technicalProgrammeCommittee?.length > 0 && (
// //           <div className="w-full rounded-[2.5rem] border border-[#1F3589]/10 bg-white/70 p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-xl">
// //             <CommitteeGroup
// //               title="Technical Programme Committee"
// //               subtitle="Experts shaping the academic rigor and peer-review quality"
// //               icon={GraduationCap}
// //             >
// //               <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
// //                 {technicalProgrammeCommittee.map((person) => (
// //                   <PersonCard key={person.id} person={person} />
// //                 ))}
// //               </div>
// //             </CommitteeGroup>
// //           </div>
// //         )}

// //         {/* Footer Conference Watermark */}
// //         <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B8860B]/70">
// //           <div className="h-px w-12 bg-[#E5A82B]/50" />
// //           IC-NBITS 2027
// //           <div className="h-px w-12 bg-[#E5A82B]/50" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Committee;


// import { SectionHeading } from '../ui/SectionHeading';
// import {
//   organisingCommittee,
//   technicalProgrammeCommittee,
// } from '../../data/committee';

// import {
//   Crown,
//   Users,
//   GraduationCap,
//   Sparkles,
//   Globe2,
// } from 'lucide-react';


// function initials(name) {
//   const clean = name.replace(/\[.*?\]/g, '').trim();
//   return (
//     clean
//       .split(' ')
//       .filter(Boolean)
//       .slice(0, 2)
//       .map((word) => word[0].toUpperCase())
//       .join('') || '?'
//   );
// }

// function PersonCard({ person, size = 'md', featured = false }) {
//   const isPlaceholder = person.name.includes('[');
//   const ini = initials(person.name);

//   const isLarge = size === 'lg';

//   return (
//     <article
//       className={`group relative flex flex-col items-center text-center rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
//         featured
//           ? 'bg-gradient-to-b from-white via-white to-[#FEF7E6]/60 border border-[#E5A82B]/30 shadow-xl sm:p-8'
//           : 'bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md hover:border-[#1F3589]/30 hover:bg-white hover:shadow-md'
//       }`}
//     >

//       {featured && (
//         <div className="absolute top-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E5A82B] to-[#F8D878] opacity-70 group-hover:w-20 transition-all duration-300" />
//       )}

//       <div className="relative mb-5">
//         <div
//           className={`relative flex items-center justify-center overflow-hidden rounded-full font-bold text-white ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-105 ${
//             isLarge ? 'w-24 h-24 text-2xl sm:w-28 sm:h-28 sm:text-3xl' : 'w-16 h-16 text-base'
//           }`}
//           style={{
//             background: isPlaceholder
//               ? '#9CA3AF'
//               : 'linear-gradient(135deg, #1F3589 0%, #354FA5 100%)',
//           }}
//         >
//           {person.photo ? (
//             <img
//               src={person.photo}
//               alt={person.name}
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               loading="lazy"
//             />
//           ) : (
//             <span>{ini}</span>
//           )}
//         </div>

//         {featured && (
//           <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E5A82B] text-white shadow-md">
//             <Crown size={14} />
//           </div>
//         )}
//       </div>

   
//       <div className="flex flex-col items-center flex-1">
//         <h4
//           className={`font-bold leading-snug transition-colors duration-200 ${
//             isLarge ? 'text-lg sm:text-xl font-serif text-[#1F3589]' : 'text-sm sm:text-base text-slate-800'
//           } ${isPlaceholder ? 'text-slate-400 italic' : 'group-hover:text-[#855800]'}`}
//           style={{ fontFamily: isLarge ? 'var(--font-serif)' : 'inherit' }}
//         >
//           {person.name}
//         </h4>

//         {person.role && (
//           <span className="mt-2 inline-flex items-center rounded-full border border-[#E5A82B]/30 bg-[#FEF7E6] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#855800]">
//             {person.role}
//           </span>
//         )}

//         <p className="mt-2 text-xs leading-relaxed text-slate-500 font-medium">
//           {person.designation || person.affiliation}
//         </p>

//         {person.country && (
//           <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-slate-400">
//             <Globe2 size={12} className="text-[#E5A82B]" />
//             {person.country}
//           </p>
//         )}
//       </div>
//     </article>
//   );
// }


// function CommitteeGroup({ title, subtitle, icon: Icon, children }) {
//   return (
//     <div className="w-full">
//       {/* Group Header */}
//       <div className="mb-8 flex flex-col items-center text-center">

//         {/* Icon + Heading */}
//         <div className="flex items-center justify-center gap-3">
//           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E5A82B]/30 bg-gradient-to-br from-[#FEF7E6] to-white text-[#B8860B] shadow-sm">
//             <Icon size={21} />
//           </div>

//           <h3
//             className="text-2xl font-bold text-[#1F3589] sm:text-3xl"
//             style={{ fontFamily: "var(--font-serif)" }}
//           >
//             {title}
//           </h3>
//         </div>

//         {/* Subtitle */}
//         {subtitle && (
//           <p className="mt-3 text-sm text-slate-500">
//             {subtitle}
//           </p>
//         )}

//         {/* Decorative underline */}
//         <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#1F3589] via-[#E5A82B] to-[#1F3589]" />
//       </div>

//       {children}
//     </div>
//   );
// }



// export function Committee() {
//   const {
//     patron,
//     chairperson,
//     convenors,
//     jointConvenors,
//     members,
//   } = organisingCommittee;

//   const allLeadership = [
//     ...(patron || []),
//     ...(chairperson || []),
//     ...(convenors || []),
//     ...(jointConvenors || []),
//   ];

//   return (
//     <section
//       id="committee"
//       aria-labelledby="committee-heading"
//       className="relative isolate overflow-hidden px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
//       style={{ background: 'var(--color-white)' }}
//     >
//       {/* Background Lighting Aura */}
//       <div
//         className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#1F3589]/[0.05] blur-3xl opacity-70"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#E5A82B]/[0.1] blur-3xl opacity-70"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20">
//         {/* Main Section Header */}
//         <div className="w-full text-center">

//           <SectionHeading 
//             title="Meet Our Committee"
//             id="committee-heading"
//           />

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
//             A distinguished team of leaders, researchers, and academic professionals driving innovation, collaboration, and nation-building.
//           </p>
//         </div>

//         {/* Leadership Group */}
//         {allLeadership.length > 0 && (
//           <CommitteeGroup
//             title="Leadership"
//             subtitle="Guiding the vision and strategic direction of IC-NBITS"
//             icon={Crown}
//           >
//             <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {allLeadership.map((person) => (
//                 <PersonCard
//                   key={person.id}
//                   person={person}
//                   size="lg"
//                   featured
//                 />
//               ))}
//             </div>
//           </CommitteeGroup>
//         )}

//         {/* Committee Members Group */}
//         {members?.length > 0 && (
//           <CommitteeGroup
//             title="Committee Members"
//             subtitle="The dedicated team bringing the conference together"
//             icon={Users}
//           >
//             <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//               {members.map((person) => (
//                 <PersonCard key={person.id} person={person} />
//               ))}
//             </div>
//           </CommitteeGroup>
//         )}

//         {/* Technical Programme Committee Group */}
//         {technicalProgrammeCommittee?.length > 0 && (
//           <div className="w-full rounded-[2.5rem] border border-[#1F3589]/10 bg-white/70 p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-xl">
//             <CommitteeGroup
//               title="Technical Programme Committee"
//               subtitle="Experts shaping the academic rigor and peer-review quality"
//               icon={GraduationCap}
//             >
//               <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//                 {technicalProgrammeCommittee.map((person) => (
//                   <PersonCard key={person.id} person={person} />
//                 ))}
//               </div>
//             </CommitteeGroup>
//           </div>
//         )}

//         {/* Footer Conference Watermark */}
//         <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B8860B]/70">
//           <div className="h-px w-12 bg-[#E5A82B]/50" />
//           IC-NBITS 2027
//           <div className="h-px w-12 bg-[#E5A82B]/50" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Committee;



import { SectionHeading } from '../ui/SectionHeading';
import {
  organisingCommittee,
  technicalProgrammeCommittee,
} from '../../data/committee';

import {
  Crown,
  Users,
  GraduationCap,
  Globe2,
} from 'lucide-react';

function initials(name) {
  const clean = name.replace(/\[.*?\]/g, '').trim();

  return (
    clean
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join('') || '?'
  );
}

function PersonCard({ person, size = 'md', featured = false }) {
  const isPlaceholder = person.name.includes('[');
  const ini = initials(person.name);
  const isLarge = size === 'lg';

  return (
    <article
      className={`group relative flex h-full flex-col
        items-center rounded-2xl text-center
        transition-all duration-300 hover:-translate-y-1.5
        ${
          featured
            ? 'border border-[#E5A82B]/30 bg-gradient-to-b from-white via-white to-[#FEF7E6]/60 p-7 shadow-lg hover:shadow-xl sm:p-8'
            : 'border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md hover:border-[#1F3589]/30 hover:bg-white hover:shadow-lg sm:p-6'
        }`}
    >
      {/* Featured Card Accent */}
      {featured && (
        <div
          className="absolute left-1/2 top-0 h-1 w-14
            -translate-x-1/2 rounded-full
            bg-gradient-to-r from-[#E5A82B] to-[#F8D878]
            opacity-70 transition-all duration-300
            group-hover:w-24"
        />
      )}

      {/* Profile Image */}
      <div className="relative mb-5">
        <div
          className={`relative flex items-center justify-center
            overflow-hidden rounded-full font-bold text-white
            ring-4 ring-white shadow-md
            transition-transform duration-300 group-hover:scale-105
            ${
              isLarge
                ? 'h-24 w-24 text-2xl sm:h-28 sm:w-28 sm:text-3xl'
                : 'h-20 w-20 text-xl sm:h-24 sm:w-24'
            }`}
          style={{
            background: isPlaceholder
              ? '#9CA3AF'
              : 'linear-gradient(135deg, #1F3589 0%, #354FA5 100%)',
          }}
        >
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              className="h-full w-full object-cover
                transition-transform duration-500
                group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <span>{ini}</span>
          )}
        </div>

        {/* Leadership Crown */}
        {featured && (
          <div
            className="absolute -bottom-1 -right-1
              flex h-9 w-9 items-center justify-center
              rounded-full border-2 border-white
              bg-[#E5A82B] text-white shadow-md"
          >
            <Crown size={16} />
          </div>
        )}
      </div>

      {/* Person Information */}
      <div className="flex flex-1 flex-col items-center">
        <h4
          className={`font-bold leading-snug
            transition-colors duration-200
            ${
              isLarge
                ? 'font-serif text-lg text-[#1F3589] sm:text-xl'
                : 'text-sm text-slate-800 sm:text-base'
            }
            ${
              isPlaceholder
                ? 'italic text-slate-400'
                : 'group-hover:text-[#855800]'
            }`}
          style={{
            fontFamily: isLarge ? 'var(--font-serif)' : 'inherit',
          }}
        >
          {person.name}
        </h4>

        {person.role && (
          <span
            className="mt-3 inline-flex items-center
              rounded-full border border-[#E5A82B]/30
              bg-[#FEF7E6] px-3 py-1
              text-[10px] font-extrabold uppercase
              tracking-wider text-[#855800]"
          >
            {person.role}
          </span>
        )}

        <p
          className="mt-3 text-xs font-medium
            leading-relaxed text-slate-500 sm:text-sm"
        >
          {person.designation || person.affiliation}
        </p>

        {person.country && (
          <p
            className="mt-2 flex items-center gap-1.5
              text-[11px] font-semibold text-slate-400"
          >
            <Globe2 size={13} className="text-[#E5A82B]" />
            {person.country}
          </p>
        )}
      </div>
    </article>
  );
}

function CommitteeGroup({ title, subtitle, icon: Icon, children }) {
  return (
    <div className="w-full">
      {/* Group Header */}
      <div className="mb-9 flex flex-col items-center text-center">
        {/* Icon + Heading */}
        <div className="flex items-center justify-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center
              justify-center rounded-xl
              border border-[#E5A82B]/30
              bg-gradient-to-br from-[#FEF7E6] to-white
              text-[#B8860B] shadow-sm"
          >
            <Icon size={22} />
          </div>

          <h3
            className="text-2xl font-bold text-[#1F3589]
              sm:text-3xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {title}
          </h3>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            {subtitle}
          </p>
        )}

        {/* Decorative Underline */}
        <div
          className="mt-4 h-1 w-20 rounded-full
            bg-gradient-to-r from-[#1F3589]
            via-[#E5A82B] to-[#1F3589]"
        />
      </div>

      {children}
    </div>
  );
}

export function Committee() {
  const {
    patron,
    chairperson,
    convenors,
    jointConvenors,
    members,
  } = organisingCommittee;

  const allLeadership = [
    ...(patron || []),
    ...(chairperson || []),
    ...(convenors || []),
    ...(jointConvenors || []),
  ];

  return (
    <section
      id="committee"
      aria-labelledby="committee-heading"
      className="relative isolate overflow-hidden
        px-4 py-16 sm:px-6 sm:py-20
        md:px-8 md:py-24 lg:px-10
        xl:px-12"
      style={{ background: 'var(--color-white)' }}
    >
      {/* Background Lighting */}
      <div
        className="pointer-events-none absolute -left-40 top-20
          h-[500px] w-[500px] rounded-full
          bg-[#1F3589]/[0.05] blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20
          h-[500px] w-[500px] rounded-full
          bg-[#E5A82B]/[0.1] blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div
        className="relative mx-auto flex w-full
          max-w-[1440px] flex-col items-center
          gap-16 px-2 sm:px-4
          lg:gap-20 lg:px-6 xl:px-8"
      >
        {/* Main Section Header */}
        <div className="w-full text-center">
          <SectionHeading
            title="Meet Our Committee"
            id="committee-heading"
          />

          <p
            className="mx-auto mt-4 max-w-3xl
              text-sm leading-relaxed text-slate-600
              sm:text-base sm:leading-7"
          >
            A distinguished team of leaders, researchers,
            and academic professionals driving innovation,
            collaboration, and nation-building.
          </p>
        </div>

        {/* Leadership Group */}
        {allLeadership.length > 0 && (
          <CommitteeGroup
            title="Leadership"
            subtitle="Guiding the vision and strategic direction of IC-NBITS"
            icon={Crown}
          >
            <div
              className="grid w-full grid-cols-1
                gap-6 sm:grid-cols-2
                lg:grid-cols-4 lg:gap-7"
            >
              {allLeadership.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                  size="lg"
                  featured
                />
              ))}
            </div>
          </CommitteeGroup>
        )}

        {/* Committee Members Group */}
        {members?.length > 0 && (
          <CommitteeGroup
            title="Committee Members"
            subtitle="The dedicated team bringing the conference together"
            icon={Users}
          >
            <div
              className="grid w-full grid-cols-2
                gap-4 sm:grid-cols-3 sm:gap-5
                md:grid-cols-4 lg:grid-cols-5
                xl:grid-cols-6 xl:gap-6"
            >
              {members.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                />
              ))}
            </div>
          </CommitteeGroup>
        )}

        {/* Technical Programme Committee */}
        {technicalProgrammeCommittee?.length > 0 && (
          <div
            className="w-full rounded-[2rem]
              border border-[#1F3589]/10
              bg-gradient-to-br from-white
              via-white to-[#F8F5ED]
              p-5 shadow-xl backdrop-blur-xl
              sm:p-8 md:p-10 lg:p-12"
          >
            <CommitteeGroup
              title="Technical Programme Committee"
              subtitle="Experts shaping the academic rigor and peer-review quality"
              icon={GraduationCap}
            >
              <div
                className="grid w-full grid-cols-2
                  gap-4 sm:grid-cols-3 sm:gap-5
                  md:grid-cols-4 lg:grid-cols-5
                  xl:grid-cols-6 xl:gap-6"
              >
                {technicalProgrammeCommittee.map((person) => (
                  <PersonCard
                    key={person.id}
                    person={person}
                  />
                ))}
              </div>
            </CommitteeGroup>
          </div>
        )}

        {/* Footer Conference Watermark */}
        <div
          className="flex items-center gap-3
            text-xs font-bold uppercase
            tracking-[0.25em] text-[#B8860B]/70"
        >
          <div className="h-px w-12 bg-[#E5A82B]/50" />
          IC-NBITS 2027
          <div className="h-px w-12 bg-[#E5A82B]/50" />
        </div>
      </div>
    </section>
  );
}

export default Committee;

