import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
import ScrollToTop from './Components/ScrollToTop';
import UseState from './Components/Hooks/UseState/UseState';
import About from './Components/About/About';
import Guide from './Components/Guide/Guide';
import UseEffect from './Components/Hooks/UseEffect/UseEffect';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks/usestate" element={<UseState />} />
        <Route path="/hooks/useeffect" element={<UseEffect />} />

        <Route path="/about" element={<About />} />
        <Route path="/guide" element={<Guide />} />

        {/* <Route path="/hooks/:hookName" element={<HookDetails />} /> */}
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
