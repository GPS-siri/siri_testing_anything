import { Routes, Route } from 'react-router-dom';
// import FractalTree from '@/pages/FractalTree';
import Main_Resume from '@/pages/main';
import AboutPage from '@/pages/AboutPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main_Resume />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default Router;
