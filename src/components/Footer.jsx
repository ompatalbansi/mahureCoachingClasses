import { Link } from 'react-router-dom';
import './Navbar.css';
import { Pi, Mail, Phone, MapPin } from 'lucide-react';

// Custom Brand SVG Icons (replacing missing lucide brand exports)
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800 dark:border-slate-900">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div id ="navbar_logo" className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-dark font-bold">
                
              </div>
              <span className="font-sans font-extrabold text-lg text-white tracking-tight">
                Mahure Coaching Classes
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-sans mt-3">
              Dedicated exclusively to Mathematics. Empowering students of Classes 8th to 10th to develop analytical thinking, master concepts, and excel in board exams.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {/* YouTube Icon open in other tab*/}
              <a href="https://youtube.com/@nitinmahure1060?si=oCvSYjltiGM9P86N" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary hover:text-dark flex items-center justify-center text-slate-400 transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              {/* Facebook Icon open in other tab*/}
              <a href="https://www.facebook.com/MahureCoachingClassess/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary hover:text-dark flex items-center justify-center text-slate-400 transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              {/* Instagram Icon open in other tab*/}
              <a href="https://www.instagram.com/nitinmahure78?igsh=MTRzdmZudDdhb3dmeg==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary hover:text-dark flex items-center justify-center text-slate-400 transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              {/* LinkedIn Icon open in other tab*/}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary hover:text-dark flex items-center justify-center text-slate-400 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-4 border-primary pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary transition-colors">Mathematics Courses</Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-primary transition-colors">Toppers & Results</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary transition-colors">Formula Sheets & Notes</Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-primary transition-colors">Video Lectures</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-4 border-primary pl-2">
              Mathematics Programs
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/courses#class-10" className="hover:text-primary transition-colors">Class 10 </Link>
              </li>
              <li>
                <Link to="/courses#class-9" className="hover:text-primary transition-colors">Class 9 </Link>
              </li>
              <li>
                <Link to="/courses#class-9" className="hover:text-primary transition-colors">Class 8 </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-4 border-primary pl-2">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm font-semibold">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-normal">
                Rani Zhasi Chowk, Yavatmal, MH - 445001
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:+918007733751" className="hover:text-primary transition-colors">+91 80077 33751</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmGWPNxckQrrFqZbXtNSNrsQsBXhGsjgwzwbJhmpSXsbZZpzFkjXwGwfQHNgBzKlccLQCVg" target='_blank' rel='noopener noreferrer' className="hover:text-primary transition-colors">ntmahure@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-slate-800 py-6 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} Mahure Coaching Classes. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0 font-semibold">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="https://linkedin.com/in/om-patalbansi" target='_blank' rel='noopener noreferrer' className="hover:text-primary transition-colors">Devloper</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
