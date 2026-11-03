/**
 * App.jsx – Root component. Assembles layout shell around page content.
 */

import { Header }    from './components/layout/Header';
import { Navbar }    from './components/layout/Navbar';
import { Footer }    from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { Home }      from './pages/Home';

export function App() {
  return (
    <>
      {/* Skip-to-content link for keyboard/screen-reader users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />
      <Navbar />
      <Home />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

