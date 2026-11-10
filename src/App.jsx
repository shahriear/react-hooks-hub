import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Page/Home';
import HookDetails from './Page/HookDetails';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks/:hookName" element={<HookDetails />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
