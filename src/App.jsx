import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Platforms from './pages/Platforms';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="industries" element={<Industries />} />
          <Route path="projects" element={<Projects />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
