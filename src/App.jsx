import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Resources from './pages/Resources';
import VideoLectures from './pages/VideoLectures';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-dark dark:text-slate-100 transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          
          {/* Main Content layout */}
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/results" element={<Results />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/videos" element={<VideoLectures />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch all redirect to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
