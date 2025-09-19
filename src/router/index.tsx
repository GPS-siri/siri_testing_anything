import { Routes, Route } from 'react-router-dom';
import FractalTree from '@/pages/FractalTree';
import AboutPage from '@/pages/AboutPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<FractalTree />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default Router;
