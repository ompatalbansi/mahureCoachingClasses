import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import MathBackground from '../components/MathBackground';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-dark dark:text-slate-100 transition-colors duration-300 min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-8 lg:py-16 lg:rounded-b-4xl rounded-b-2xl bg-primary dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800 overflow-hidden text-left">
        <MathBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest font-extrabold text-secondary"
          >
            GET IN TOUCH
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-dark dark:text-slate-100 tracking-tight mt-2"
          >
            Contact Details
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-dark-light dark:text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            Have queries about batch timings, fees, or want to register? Reach out to us directly or chat with us on WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Main Grid Contact Container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left items-stretch">
          
          {/* Left Column: Quick Details card */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-dark dark:text-slate-100 tracking-tight">Coaching Details</h3>
              <p className="text-xs text-dark-light dark:text-slate-400 mt-1">Visit our physical Coaching office or reach out directly.</p>
              
              <ul className="space-y-5 pt-6 font-semibold text-sm">
                <li className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-dark-light dark:text-slate-100 leading-relaxed">
                   Rani Zhasi Chowk, Yavatmal, MH - 445001
                  </span>
                </li>
                <li className="flex items-center space-x-3.5">
                  <Phone className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <a href="tel:+918007733751" className="text-dark dark:text-slate-200 hover:text-secondary-hover dark:hover:text-secondary-hover transition-colors">
                    +91 80077 33751
                  </a>
                </li>
                <li className="flex items-center space-x-3.5">
                  <Mail className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <a href="https://mai.google.com//u/0/#inbox?compose=DmwnWsmGWPNxckQrrFqZbXtNSNrsQsBXhGsjgwzwbJhmpSXsbZZpzFkjXwGwfQHNgBzKlccLQCVg" className="text-dark dark:text-slate-200 hover:text-secondary-hover dark:hover:text-secondary-hover transition-colors">
                    ntmahure@gmail.com
                  </a>
                </li>
              </ul>
            </div>
 
            {/* WhatsApp direct CTA */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800">
              <a
                href="https://wa.me/918007733751?text=Hi,%20I%20am%20interested%20in%20joining%20Mahure%20Coaching%20Classes.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-lg shadow-lg shadow-emerald-500/10 transition-all text-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat directly on WhatsApp</span>
              </a>
            </div>
          </div>
 
          {/* Right Column: Google Map Container */}
          <div className="bg-slate-100 dark:bg-slate-300 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-100 min-h-[350px] relative shadow-sm">
            <iframe
              title="Mahure Coaching Classes Location Map"
              src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1781346967241!5m2!1sen!2sin!6m8!1m7!1s79zKNYEuJ4cv4o03nfqCug!2m2!1d20.38693926489307!2d78.135845920083!3f143.2796717572308!4f-13.527888004900305!5f0.7820865974627469"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 dark:hue-rotate-180 dark:opacity-100 transition-all duration-300"
              allowFullScreen="true"
              allowTransparency="true"
              allowPointerEvents="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
