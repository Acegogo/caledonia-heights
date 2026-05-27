import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import RootLayout from './layouts/RootLayout';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Platforms = lazy(() => import('./pages/Platforms'));
const MajiSmart = lazy(() => import('./pages/MajiSmart'));
const SmartWater = lazy(() => import('./pages/SmartWater'));
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div style={{ minHeight: '60vh', background: '#040E1C' }} aria-hidden="true" />
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="platforms" element={<Platforms />} />
            <Route path="majismart" element={<MajiSmart />} />
            <Route path="smart-water" element={<SmartWater />} />
            <Route path="ai-solutions" element={<AiSolutions />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
