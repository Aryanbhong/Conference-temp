/**
 * Home.jsx – Single-page home, composing all sections in order.
 */

import { Hero } from '../components/sections/Hero';
import { QuickInfoBar } from '../components/sections/QuickInfoBar';
import { About } from '../components/sections/About';
import { PublicationOpportunities } from '../components/sections/PublicationOpportunities';
import { Pillars } from '../components/sections/Pillars';
import { SubmissionProcess } from '../components/sections/SubmissionProcess';
import { Objectives } from '../components/sections/Objectives';
import { CallForPapers } from '../components/sections/CallForPapers';
import { Awards } from '../components/sections/Awards';
import { Speakers } from '../components/sections/Speakers';
import { Publications } from '../components/sections/Publications';
import { ImportantDates } from '../components/sections/ImportantDates';
import { Guidelines } from '../components/sections/Guidelines';
import { Committee } from '../components/sections/Committee';
import { Registration } from '../components/sections/Registration';
import { Contact } from '../components/sections/Contact';
import ConferencePeople from '../components/sections/Conference';

export function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <QuickInfoBar />
      <ConferencePeople />
      <PublicationOpportunities />
      <About />
      <Pillars />
      <Objectives />
      <SubmissionProcess />
      <CallForPapers />
      <Awards />
      <Speakers />
      <Publications />
      <ImportantDates />
      <Guidelines />
      <Committee />
      <Registration />
      <Contact />
    </main>
  );
}

export default Home;

