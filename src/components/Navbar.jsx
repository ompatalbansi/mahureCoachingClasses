import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Pi, Menu, X, ArrowRight, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Handle scroll detection for styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change asynchronously to avoid synchronous state warning
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Results', path: '/results' },
    { name: 'Resources', path: '/resources' },
    { name: 'Videos', path: '/videos' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md dark:shadow-slate-950/50 border-b border-slate-100 dark:border-slate-800 py-3'
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-100/50 dark:border-slate-900/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div id="navbar_logo" className="w-10 h-10 hover:bg-primary-hover rounded-lg flex items-center justify-center text-dark shadow-md shadow-primary/20 transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-6">
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-xl tracking-tight text-dark dark:text-slate-100 leading-none group-hover:text-secondary transition-colors duration-200">
                MAHURE
              </span>
              <span className="text-[10px] font-bold tracking-widest text-secondary font-mono leading-none mt-1">
                Coaching Classes
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-all duration-250 ${
                    isActive
                      ? 'text-dark dark:text-slate-100 font-bold'
                      : 'text-dark-light dark:text-slate-400 hover:text-dark dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/918007733751"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-bold text-dark dark:text-slate-200 hover:text-secondary dark:hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>+91 80077 33751</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-dark dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-slate-100" /> : <Moon className="w-4.5 h-4.5 text-dark" />}
            </button>

            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-dark font-bold rounded-lg shadow-lg shadow-primary/20 transition-all duration-200 flex items-center space-x-1 text-sm transform hover:-translate-y-0.5"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex lg:hidden items-center space-x-1">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-dark dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-slate-100" /> : <Moon className="w-5 h-5 text-dark" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-dark dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-base font-bold tracking-wide transition-all ${
                      isActive
                        ? 'bg-primary/10 dark:bg-primary/5 text-dark dark:text-primary border-l-4 border-primary'
                        : 'text-dark-light dark:text-slate-400 hover:text-dark dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 px-4 flex flex-col space-y-4">
                <a
                  href="https://wa.me/918007733751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-base font-bold text-dark dark:text-slate-200 hover:text-secondary justify-center py-2"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>+91 80077 33751</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full text-center py-3 bg-primary hover:bg-primary-hover text-dark font-extrabold rounded-lg shadow-lg shadow-primary/20 transition-all text-base block"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
