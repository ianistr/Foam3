
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreFooter from './components/PreFooter';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Snacks from './pages/Snacks';
import Contact from './pages/Contact';

import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/Snacks" element={<Snacks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <PreFooter/>
        
        <CookieBanner/>
      </div>
    </Router>
  );
}

export default App;