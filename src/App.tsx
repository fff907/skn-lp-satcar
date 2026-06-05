import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Request from './pages/Request';
import Thanks from './pages/Thanks';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}
