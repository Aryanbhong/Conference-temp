
// import { Trophy, Award } from 'lucide-react';
// import { SectionHeading } from '../ui/SectionHeading';
// import { Card } from '../ui/Card';

// const awardCategories = [
//   {
//     id: 'mgmt',
//     category: 'Management Track',
//     prizes: [
//       { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
//       { rank: '2nd Prize', amount: '₹5,000', icon: Award },
//     ],
//   },
//   {
//     id: 'tech',
//     category: 'Technology Track',
//     prizes: [
//       { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
//       { rank: '2nd Prize', amount: '₹5,000', icon: Award },
//     ],
//   },
// ];

// export function Awards() {
//   return (
//     <section
//       id="awards"
//       aria-labelledby="awards-heading"
//       className="px-4 py-12 sm:px-6 md:px-8 md:py-14"
//       style={{ background: 'var(--color-white)' }}
//     >
//       <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 md:gap-10">
//         <SectionHeading
//           title="Best Research Paper Awards"
//           subtitle="Recognising excellence in research across management and technology tracks."
//           id="awards-heading"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
//           {awardCategories.map((cat) => (
//             <Card key={cat.id} className="p-5 sm:p-6 flex flex-col gap-4">
//               <h3
//                 className="text-navy font-bold text-base border-b border-[var(--color-border)] pb-2.5"
//                 style={{ fontFamily: 'var(--font-serif)' }}
//               >
//                 {cat.category}
//               </h3>

//               <div className="flex flex-col gap-3">
//                 {cat.prizes.map(({ rank, amount, icon: Icon }) => (
//                   <div key={rank} className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
//                       <Icon
//                         size={19}
//                         className="text-gold"
//                         aria-hidden="true"
//                       />
//                     </div>

//                     <div>
//                       <p className="font-semibold text-navy text-xs sm:text-sm">
//                         {rank}
//                       </p>

//                       <p
//                         className="text-xl font-bold"
//                         style={{
//                           color: 'var(--color-gold)',
//                           fontFamily: 'var(--font-serif)',
//                         }}
//                       >
//                         {amount}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <p className="text-[11px] leading-5 text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-3">
//                 Cash prizes + Certificate of Excellence. Winners announced at the valedictory ceremony.
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Awards;



import { Trophy, Award } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const awardCategories = [
  {
    id: 'mgmt',
    category: 'Management Track',
    prizes: [
      { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
      { rank: '2nd Prize', amount: '₹5,000', icon: Award },
    ],
  },
  {
    id: 'tech',
    category: 'Technology Track',
    prizes: [
      { rank: '1st Prize', amount: '₹10,000', icon: Trophy },
      { rank: '2nd Prize', amount: '₹5,000', icon: Award },
    ],
  },
];

export function Awards() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-heading"
      className="relative overflow-hidden px-4 py-14
        sm:px-6 md:px-8 md:py-20
        lg:px-10 xl:px-12"
      style={{ background: 'var(--color-white)' }}
    >
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute -left-32 top-10
          h-80 w-80 rounded-full bg-[#E5A82B]/[0.07] blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0
          h-96 w-96 rounded-full bg-[#1F3589]/[0.06] blur-[110px]"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div
        className="relative z-10 mx-auto flex w-full
          max-w-[1440px] flex-col items-center
          gap-10 px-2 sm:px-4 lg:gap-12 lg:px-6 xl:px-8"
      >
        <SectionHeading
          title="Best Research Paper Awards"
          subtitle="Recognising excellence in research across management and technology tracks."
          id="awards-heading"
        />

        {/* Award Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {awardCategories.map((cat, index) => (
            <Card
              key={cat.id}
              className="group relative flex h-full flex-col
                gap-6 overflow-hidden rounded-2xl
                border border-[#1F3589]/[0.08]
                bg-gradient-to-br from-[#FFFCF7]
                to-[#F8F5ED] p-6
                shadow-[0_12px_40px_rgba(31,53,137,0.06)]
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#E5A82B]/40
                hover:shadow-[0_22px_50px_rgba(31,53,137,0.10)]
                sm:p-8 lg:p-9"
            >
              {/* Top Accent */}
              <div
                className="absolute inset-x-0 top-0 h-1.5
                  bg-gradient-to-r from-[#1F3589]
                  via-[#E5A82B] to-[#1F3589]"
                aria-hidden="true"
              />

              {/* Decorative Glow */}
              <div
                className="pointer-events-none absolute -right-16
                  -top-16 h-52 w-52 rounded-full
                  bg-[#E5A82B]/10 blur-3xl
                  transition-opacity duration-500
                  group-hover:bg-[#E5A82B]/20"
                aria-hidden="true"
              />

              {/* Track Heading */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0
                    items-center justify-center rounded-2xl
                    bg-[#1F3589] text-[#F8D878]
                    shadow-lg transition-transform duration-500
                    group-hover:rotate-6 group-hover:scale-105"
                >
                  {index === 0 ? (
                    <Trophy size={25} />
                  ) : (
                    <Award size={25} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className="text-lg font-bold text-[#1F3589]
                      sm:text-xl lg:text-2xl"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {cat.category}
                  </h3>

                  <div
                    className="mt-2 h-1 w-12 rounded-full
                      bg-gradient-to-r from-[#E5A82B] to-[#F4D58A]"
                  />
                </div>
              </div>

              {/* Prizes */}
              <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cat.prizes.map(({ rank, amount, icon: Icon }) => (
                  <div
                    key={rank}
                    className="flex items-center gap-4
                      rounded-xl border border-[#1F3589]/[0.07]
                      bg-white/80 p-5
                      transition-all duration-300
                      hover:border-[#E5A82B]/40
                      hover:bg-white"
                  >
                    <div
                      className="flex h-12 w-12 shrink-0
                        items-center justify-center rounded-xl
                        bg-[#E5A82B]/10 text-[#B8860B]"
                    >
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1F3589]">
                        {rank}
                      </p>

                      <p
                        className="mt-1 text-2xl font-bold
                          text-[#B8860B] sm:text-3xl"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                className="relative z-10 mt-auto border-t
                  border-[#1F3589]/10 pt-5"
              >
                <p className="text-xs leading-6 text-slate-500 sm:text-sm">
                  Cash prizes + Certificate of Excellence.
                  Winners announced at the valedictory ceremony.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
