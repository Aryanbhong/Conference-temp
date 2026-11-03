/**
 * speakers.js – Speaker data.
 * Replace photo with actual image paths under /src/assets/speakers/.
 */

export const speakerCategories = [
  {
    category: 'Chief Guest',
    speakers: [
      {
        id: 'chief-guest-1',
        name: '[Chief Guest Name TBA]',
        role: 'Chief Guest',
        affiliation: '[Organisation TBA]',
        photo: null, // Replace with: import photo from '../assets/speakers/chief-guest.jpg'
        bio: 'Details to be announced.',
      },
    ],
  },
  {
    category: 'Guest of Honour',
    speakers: [
      {
        id: 'guest-honour-1',
        name: '[Guest of Honour TBA]',
        role: 'Guest of Honour',
        affiliation: '[Organisation TBA]',
        photo: null,
        bio: 'Details to be announced.',
      },
    ],
  },
  {
    category: 'Keynote Speaker',
    speakers: [
      {
        id: 'keynote-1',
        name: '[Keynote Speaker TBA]',
        role: 'Keynote Speaker',
        affiliation: '[University / Organisation TBA]',
        photo: null,
        bio: 'Details to be announced.',
      },
    ],
  },
  {
    category: 'Pre-Conference Workshop Speakers',
    speakers: [
      {
        id: 'pre-1',
        name: '[Speaker TBA]',
        role: 'Workshop Facilitator',
        affiliation: '[Organisation TBA]',
        photo: null,
        bio: 'Details to be announced.',
      },
      {
        id: 'pre-2',
        name: '[Speaker TBA]',
        role: 'Workshop Facilitator',
        affiliation: '[Organisation TBA]',
        photo: null,
        bio: 'Details to be announced.',
      },
    ],
  },
];

export default speakerCategories;

