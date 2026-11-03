// /**
//  * Committee.jsx – Organising and Technical Programme Committee.
//  */

// import { SectionHeading } from '../ui/SectionHeading';
// import { Card } from '../ui/Card';
// import { organisingCommittee, technicalProgrammeCommittee } from '../../data/committee';

// /** Get 1-2 initials from a name */
// function initials(name) {
//   const clean = name.replace(/\[.*?\]/g, '').trim();
//   return (
//     clean
//       .split(' ')
//       .filter(Boolean)
//       .slice(0, 2)
//       .map((w) => w[0].toUpperCase())
//       .join('') || '?'
//   );
// }

// function PersonCard({ person, size = 'md' }) {
//   const isPlaceholder = person.name.includes('[');
//   const ini = initials(person.name);

//   const avatarSize = size === 'lg' ? 'w-20 h-20 text-xl' : 'w-14 h-14 text-sm';
//   const nameClass = size === 'lg' ? 'text-base' : 'text-sm';

//   return (
//     <div className="flex flex-col items-center text-center gap-2">
//       {/* Avatar */}
//       <div
//         className={`${avatarSize} rounded-full flex items-center justify-center font-bold text-white
//           border-2 border-[var(--color-border)] shrink-0`}
//         style={{ background: isPlaceholder ? '#9CA3AF' : 'var(--color-navy)' }}
//         aria-hidden="true"
//       >
//         {person.photo ? (
//           <img
//             src={person.photo}
//             alt={person.name}
//             className="w-full h-full rounded-full object-cover"
//             loading="lazy"
//           />
//         ) : ini}
//       </div>

//       <div>
//         <p
//           className={`font-semibold ${nameClass} ${isPlaceholder ? 'text-[var(--color-text-muted)] italic' : 'text-navy'}`}
//           style={{ fontFamily: 'var(--font-serif)' }}
//         >
//           {person.name}
//         </p>
//         {person.role && (
//           <p className="text-gold text-xs font-semibold">{person.role}</p>
//         )}
//         <p className="text-[var(--color-text-muted)] text-xs">
//           {person.designation || person.affiliation}
//         </p>
//         {person.country && (
//           <p className="text-[var(--color-text-muted)] text-xs">{person.country}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export function Committee() {
//   const { patron, chairperson, convenors, jointConvenors, members } = organisingCommittee;
//   const allLeadership = [...(patron || []), ...(chairperson || []), ...(convenors || []), ...(jointConvenors || [])];

//   return (
//     <section
//       id="committee"
//       aria-labelledby="committee-heading"
//       className="py-20 px-4 md:px-8"
//       style={{ background: 'var(--color-white)' }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
//         <SectionHeading
//           eyebrow="Committee"
//           title="Organising Committee"
//           id="committee-heading"
//         />

//         {/* Leadership */}
//         <div className="w-full">
//           <h3
//             className="text-navy font-bold text-base mb-6 text-center uppercase tracking-widest text-sm"
//             style={{ color: 'var(--color-gold)' }}
//           >
//             Leadership
//           </h3>
//           <div className="flex flex-wrap justify-center gap-10">
//             {allLeadership.map((p) => (
//               <PersonCard key={p.id} person={p} size="lg" />
//             ))}
//           </div>
//         </div>

//         {/* Members */}
//         <div className="w-full">
//           <h3
//             className="text-navy font-bold text-base mb-6 text-center uppercase tracking-widest text-sm"
//             style={{ color: 'var(--color-gold)' }}
//           >
//             Committee Members
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//             {members.map((p) => (
//               <PersonCard key={p.id} person={p} size="md" />
//             ))}
//           </div>
//         </div>

//         {/* Technical Programme Committee */}
//         <div className="w-full border-t border-[var(--color-border)] pt-12">
//           <h3
//             className="text-navy font-bold text-xl mb-8 text-center"
//             style={{ fontFamily: 'var(--font-serif)' }}
//           >
//             Technical Programme Committee
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//             {technicalProgrammeCommittee.map((p) => (
//               <PersonCard key={p.id} person={p} size="md" />
//             ))}
//           </div>
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
  Sparkles,
  Globe2,
} from 'lucide-react';

/** Get 1-2 initials from a name */
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

/* =========================
   PERSON CARD
========================= */

function PersonCard({ person, size = 'md', featured = false }) {
  const isPlaceholder = person.name.includes('[');
  const ini = initials(person.name);

  const avatarSize =
    size === 'lg'
      ? 'w-24 h-24 text-2xl'
      : 'w-16 h-16 text-lg';

  const nameClass =
    size === 'lg'
      ? 'text-lg md:text-xl'
      : 'text-sm md:text-base';

  return (
    <div
      className={`group relative flex w-full flex-col
        items-center text-center rounded-2xl
        transition-all duration-500 hover:-translate-y-2
        ${featured ? 'min-h-[280px] p-8 md:p-10' : 'min-h-[220px] p-5'}`}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-2xl
          bg-gradient-to-br from-[#E5A82B]/20
          via-white to-[#1F3589]/10
          opacity-0 blur-xl transition-opacity
          duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Card surface */}
      <div
        className="absolute inset-0 rounded-2xl
          border border-[#E5A82B]/20
          bg-white/85 shadow-[0_8px_30px_rgba(31,53,137,0.06)]
          backdrop-blur-xl transition-all duration-500
          group-hover:border-[#E5A82B]/60
          group-hover:shadow-[0_20px_50px_rgba(31,53,137,0.15)]"
        aria-hidden="true"
      />

      {/* Gold accent */}
      <div
        className="absolute top-0 left-1/2 h-1 w-0
          -translate-x-1/2 rounded-full
          bg-gradient-to-r from-[#E5A82B] to-[#F8D878]
          transition-all duration-500
          group-hover:w-2/3"
        aria-hidden="true"
      />

      {/* Avatar */}
      <div className="relative z-10 mb-4">
        <div
          className="absolute -inset-2 rounded-full
            bg-gradient-to-br from-[#E5A82B]
            via-[#F8D878] to-[#1F3589]
            opacity-40 blur-md transition-all duration-500
            group-hover:opacity-90 group-hover:blur-lg"
          aria-hidden="true"
        />

        <div
          className={`relative ${avatarSize}
            flex items-center justify-center
            overflow-hidden rounded-full
            font-bold text-white ring-4 ring-white
            shadow-[0_8px_25px_rgba(31,53,137,0.2)]
            transition-transform duration-500
            group-hover:scale-105`}
          style={{
            background: isPlaceholder
              ? '#9CA3AF'
              : 'linear-gradient(135deg, #1F3589, #354FA5)',
          }}
          aria-hidden="true"
        >
          {person.photo ? (
            <img
              src={person.photo}
              alt=""
              className="h-full w-full object-cover
                transition-transform duration-700
                group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <span>{ini}</span>
          )}
        </div>

        {/* Leadership badge */}
        {featured && (
          <div
            className="absolute -top-2 -right-2
              flex h-8 w-8 items-center justify-center
              rounded-full border-2 border-white
              bg-[#E5A82B] text-white shadow-lg"
          >
            <Crown size={14} />
          </div>
        )}
      </div>

      {/* Person details */}
      <div className="relative z-10">
        <p
          className={`${nameClass}
            font-bold leading-snug transition-colors duration-300
            ${
              isPlaceholder
                ? 'text-gray-400 italic'
                : 'text-[#1F3589] group-hover:text-[#B8860B]'
            }`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {person.name}
        </p>

        {person.role && (
          <div
            className="mt-2 inline-flex items-center
              rounded-full border border-[#E5A82B]/30
              bg-[#FEF7E6] px-3 py-1"
          >
            <span
              className="text-[10px] md:text-xs
                font-bold uppercase tracking-wider
                text-[#B8860B]"
            >
              {person.role}
            </span>
          </div>
        )}

        <p className="mt-2 text-xs leading-relaxed text-gray-500">
          {person.designation || person.affiliation}
        </p>

        {person.country && (
          <p
            className="mt-1 flex items-center justify-center
              gap-1 text-xs text-gray-400"
          >
            <Globe2 size={11} />
            {person.country}
          </p>
        )}
      </div>

      {/* Bottom decorative line */}
      <div
        className="relative z-10 mt-4 h-0.5 w-8
          rounded-full bg-[#E5A82B]/40
          transition-all duration-500
          group-hover:w-16 group-hover:bg-[#E5A82B]"
        aria-hidden="true"
      />
    </div>
  );
}

/* =========================
   COMMITTEE GROUP
========================= */

function CommitteeGroup({
  title,
  subtitle,
  icon: Icon,
  children,
}) {
  return (
    <div className="relative w-full">
      {/* Group heading */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div
          className="mb-3 flex h-12 w-12 items-center
            justify-center rounded-2xl
            border border-[#E5A82B]/30
            bg-gradient-to-br from-[#FEF7E6] to-white
            text-[#B8860B] shadow-sm"
        >
          <Icon size={22} />
        </div>

        <h3
          className="text-xl md:text-2xl font-bold text-[#1F3589]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm text-gray-500">
            {subtitle}
          </p>
        )}

        <div
          className="mt-4 h-1 w-20 rounded-full
            bg-gradient-to-r from-[#1F3589]
            via-[#E5A82B] to-[#1F3589]"
          aria-hidden="true"
        />
      </div>

      {children}
    </div>
  );
}

/* =========================
   MAIN COMMITTEE SECTION
========================= */

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
        bg-[#FEF7E6] py-20 md:py-28 px-4 md:px-8"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-32 -left-32
          h-96 w-96 rounded-full
          bg-[#E5A82B]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute top-1/3 -right-40
          h-[450px] w-[450px] rounded-full
          bg-[#1F3589]/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0
          opacity-[0.04]
          [background-image:radial-gradient(#1F3589_1px,transparent_1px)]
          [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Wide content container */}
      <div
        className="relative z-10 mx-auto flex w-full
          max-w-[1600px] flex-col items-center
          gap-16 px-2 md:gap-20 md:px-6"
      >
        {/* Main heading */}
        <div className="w-full text-center">
          <div
            className="mb-4 inline-flex items-center gap-2
              rounded-full border border-[#E5A82B]/30
              bg-white/70 px-4 py-2
              shadow-sm backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#E5A82B]" />

            <span
              className="text-xs font-bold uppercase
                tracking-[0.2em] text-[#B8860B]"
            >
              The People Behind IC-NBITS
            </span>
          </div>

          <SectionHeading
            eyebrow="Committee"
            title="Meet Our Committee"
            id="committee-heading"
          />

          <p
            className="mx-auto mt-4 max-w-3xl
              text-sm md:text-base leading-relaxed
              text-gray-600"
          >
            A distinguished team of leaders, researchers,
            and academic professionals driving innovation,
            collaboration, and nation-building.
          </p>
        </div>

        {/* Leadership */}
        <CommitteeGroup
          title="Leadership"
          subtitle="Guiding the vision of IC-NBITS"
          icon={Crown}
        >
          <div
            className="grid w-full grid-cols-1 gap-6
              sm:grid-cols-2 lg:grid-cols-4"
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

        {/* Committee members */}
        <CommitteeGroup
          title="Committee Members"
          subtitle="The team bringing the conference together"
          icon={Users}
        >
          <div
            className="grid w-full grid-cols-2 gap-4
              sm:grid-cols-3 md:grid-cols-4
              lg:grid-cols-6 xl:grid-cols-7"
          >
            {members.map((person) => (
              <PersonCard
                key={person.id}
                person={person}
              />
            ))}
          </div>
        </CommitteeGroup>

        {/* Technical Programme Committee */}
        <div
          className="w-full rounded-3xl
            border border-[#1F3589]/10
            bg-white/60 p-5 md:p-10
            shadow-[0_15px_60px_rgba(31,53,137,0.06)]
            backdrop-blur-xl"
        >
          <CommitteeGroup
            title="Technical Programme Committee"
            subtitle="Experts shaping the academic quality of the conference"
            icon={GraduationCap}
          >
            <div
              className="grid w-full grid-cols-2 gap-4
                sm:grid-cols-3 md:grid-cols-4
                lg:grid-cols-6 xl:grid-cols-7"
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

        {/* Footer decoration */}
        <div
          className="flex items-center gap-3
            text-xs font-semibold uppercase
            tracking-[0.2em] text-[#B8860B]/70"
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
