/**
 * publications.js – Journal and proceedings publication partners.
 * Source: ic-nbits.in
 */

export const journalPublications = [
  {
    id: 1,
    name: 'Journal of Management Research (JMR)',
    indexing: ['Scopus', 'ABDC – C'],
    publisher: 'Sage Publications',
    note: 'Special issue for selected papers.',
  },
  {
    id: 2,
    name: 'Asia-Pacific Journal of Management Research and Innovation',
    indexing: ['Scopus'],
    publisher: 'Sage Publications',
    note: 'Selected papers after peer review.',
  },
  {
    id: 3,
    name: 'Vision: The Journal of Business Perspective',
    indexing: ['Scopus', 'ABDC – C'],
    publisher: 'Sage Publications',
    note: 'Special issue consideration.',
  },
  {
    id: 4,
    name: 'IIM Kozhikode Society & Management Review',
    indexing: ['Scopus'],
    publisher: 'Sage Publications',
    note: 'Selected research papers.',
  },
  {
    id: 5,
    name: 'Prabandhan: Indian Journal of Management',
    indexing: ['Peer-reviewed'],
    publisher: 'Prabandhan',
    note: 'Selected papers.',
  },
];

export const proceedings = {
  title: 'IC-NBITS 2027 Conference Proceedings',
  isbn: 'ISBN: [To be assigned]',
  publisher: 'SIESCOMS',
  indexed: ['Google Scholar', 'ResearchGate'],
  note:
    'All accepted papers (not selected for journal publication) will be published in the conference proceedings with an ISBN number.',
};

export default { journalPublications, proceedings };

