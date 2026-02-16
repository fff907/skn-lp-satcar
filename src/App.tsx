import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Request from './pages/Request.tsx';
import Thanks from './pages/Thanks.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}
