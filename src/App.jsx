// /**
//  * App.jsx – Root component. Assembles layout shell around page content.
//  */

// import { Header }    from './components/layout/Header';
// import { Navbar }    from './components/layout/Navbar';
// import { Footer }    from './components/layout/Footer';
// import { BackToTop } from './components/layout/BackToTop';
// import { Home }      from './pages/Home';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';

// export function App() {
//   return (
//     <>
//       {/* Skip-to-content link for keyboard/screen-reader users */}
//       <a href="#main-content" className="skip-link">
//         Skip to main content
//       </a>

//       <Header />
//       <Navbar />
//       <Home />
//       <Footer />
//       <BackToTop />
//     </>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { Home } from './pages/Home';
import { BankDetails } from './components/sections/BankDetails';
import { UploadPaymentProof } from './pages/UploadProof';

export function App() {
  return (
    <BrowserRouter>

      {/* Skip-to-content link for keyboard/screen-reader users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Persistent Layout Elements */}
      <Header />
      <Navbar />

      {/* Main Dynamic View Area */}
      <main id="main-content">
        <Routes>
          {/* Main Landing / Conference Home Page */}
          <Route path="/" element={<Home />} />

          {/* Dedicated Bank Account Details Page */}
          <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/upload-payment-proof" element={<UploadPaymentProof />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;