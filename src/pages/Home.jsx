import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Award, BookOpen, 
  HelpCircle, ClipboardList, BookMarked, UserCheck, Star, ShieldCheck
} from 'lucide-react';
import MathBackground from '../components/MathBackground';
import { TOPPERS, TESTIMONIALS } from '../data/mathData';
import '../components/Navbar.css';

const Home = () => {
  // Stats data
  const stats = [
    { value: '5,000+', label: 'Students Taught', suffix: '' },
    { value: '150+', label: '95+/100 Scores', suffix: '' },
    { value: '15+', label: 'Years Experience', suffix: '' },
    { value: '100%', label: 'Success Rate', suffix: '' }
  ];

  // Features list
  const features = [
    {
      icon: BookOpen,
      title: 'Concept-Based Learning',
      desc: 'No rote memorization. We explain the "why" and "how" behind every formula.'
    },
    {
      icon: UserCheck,
      title: 'Expert Math Faculty',
      desc: 'Learn from Mr. Mahure himself, bringing 15+ years of math teaching experience.'
    },
    {
      icon: ClipboardList,
      title: 'Regular Practice Tests',
      desc: 'Weekly topic-wise tests and monthly board pattern examinations.'
    },
    {
      icon: HelpCircle,
      title: 'Doubt Solving Sessions',
      desc: 'Daily dedicated hours to clear individual doubts and calculation bottlenecks.'
    },
    {
      icon: BookMarked,
      title: 'Formula Revision Programs',
      desc: 'Custom formula booklets and regular recall drills to commit rules to memory.'
    },
    {
      icon: ShieldCheck,
      title: 'Personalized Attention',
      desc: 'Small batch sizes to monitor progress and support weaker topics.'
    }
  ];

  return (
    <div className="relative bg-white/10 dark:bg-slate-900 overflow-hidden text-dark dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-100 dark:border-slate-900 flex items-center min-h-[80vh]">
        <MathBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-secondary/15 border border-secondary/30 px-3.5 py-1.5 rounded-full text-secondary-hover font-bold lg:text-xs text-[9px] uppercase tracking-wider "
              >
                <Award className="w-4 h-4 text-secondary-hover" />
                <span>EXCLUSIVELY MATHEMATICS | CLASS 8TH to 10TH</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark dark:text-slate-100 leading-tight tracking-tight"
              >
                Master Concepts. <br/>
                <span className=" text-secondary">Conquer Formulas.</span> <br />
                Excel in Exams.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm md:text-base lg:text-lg text-dark-light dark:text-slate-350 max-w-xl leading-relaxed"
              >
                Build an unbreakable foundation in Mathematics. At Mahure Coaching Classes, we transform math from a source of anxiety into a language of confidence, guiding you to score great marks with conceptual clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-dark font-extrabold rounded-lg shadow-lg shadow-primary/20 transition-all text-base flex items-center space-x-2 transform hover:-translate-y-0.5"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-3.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-dark dark:text-slate-200 font-bold rounded-lg transition-all text-base border border-slate-200 dark:border-slate-800 hover:-translate-y-0.5"
                >
                  Explore Courses
                </Link>

              </motion.div>
            </div>

            {/* Hero Right Visual: Math Grid Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-[420px] lg:max-w-none bg-white dark:bg-slate-700 p-6 md:p-8 rounded-2xl shadow-xl dark:shadow-none border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md top-5">
                
                {/* Visual mathematical curve sketch with indicators */}
                
                <div id="" className="bg-secondary/20 dark:bg-dark text-slate-350 rounded-xl font-mono lg:text-xs lg:h-[500px] lg:w-[410px] md:h-[400px] md:w-[350px] h-[300px] w-[330px] sm:text-sm space-y-4 shadow-inner border border-slate-500">
                  <img src="../../msir.png" alt="math" className="w-full h-full object-cover" />
                </div>

                {/* Floating geometry badges */}
                <div className="absolute -top-4 -left-4 bg-primary text-dark p-3.5 rounded-xl shadow-lg border border-primary-hover flex flex-col items-center">
                  <span className="text-sm md:text-xl font-extrabold leading-none">100%</span>
                  <span className="text-[4px] md:text-[9px] font-bold tracking-wider uppercase mt-1">Conceptual</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-800 text-white p-3 px-4 rounded-xl shadow-lg border border-slate-700 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs font-semibold">One to One Doubt Resolving</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Statistics Section */}
      <section className="bg-slate-100 dark:bg-slate-900/40 py-12 md:py-16 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
                  <span className="text-secondary">{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-dark-light dark:text-slate-450 tracking-wide mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Learn With Us Section */}
      <section className="py-20 md:py-28 border-b border-slate-100 dark:border-slate-900 relative">
        <div className="absolute inset-0 bg-slate-50/30 opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-secondary">
              OUR METHODOLOGY
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-slate-100 tracking-tight">
              Why Parents Trust Mahure Coaching Classes
            </p>
            <p className="text-base sm:text-lg text-dark-light dark:text-slate-350">
              We specialize exclusively in Mathematics, ensuring all resources, teaching tricks, and attention are tailored to this vital analytical subject.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md dark:shadow-none border border-slate-200 dark:border-slate-800 flex flex-col text-left transition-all hover:border-secondary/40 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary-hover mb-5">
                    <Icon className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <h3 className="font-extrabold text-lg text-dark dark:text-slate-100 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-light dark:text-slate-350 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Featured Results Section */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-3 text-left max-w-xl">
              <h2 className="text-xs uppercase tracking-widest font-extrabold text-secondary">
                ACADEMIC EXCELLENCE
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-slate-100 tracking-tight">
                Meet Our Board Toppers
              </p>
              <p className="text-sm sm:text-base text-dark-light dark:text-slate-350">
                Year after year, our students break records and score 95+/100 marks.
              </p>
            </div>
            <Link
              to="/results"
              className="inline-flex items-center space-x-1.5 text-sm font-extrabold text-secondary hover:text-secondary-hover mt-4 md:mt-0 group border-b-2 border-transparent hover:border-secondary transition-all"
            >
              <span>View All Results</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Cards Grid with Blue Banner */}
          <div className="relative mt-24 pt-16 pb-12 rounded-3xl overflow-hidden bg-slate-100/50 dark:bg-slate-900/20 px-6 sm:px-8 border border-slate-200/50 dark:border-slate-800/30">
            {/* Blue Banner strip */}
            <div className="absolute top-0 left-0 rounded-t-4xl sm:rounded-t-2xl right-0 h-44 dark:bg-slate-800 bg-primary dark:bg-slate-850" >
              <MathBackground/>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-28 relative z-10">
              {TOPPERS.slice(0, 3).map((topper, idx) => (
                <motion.div
                  key={topper.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:shadow-2xl transition-all duration-300 flex flex-col pt-24 pb-8 px-5 group relative text-center"
                >
                  {/* Overlapping profile image */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[130px] h-[155px] rounded-[20px] border-[3.5px] border-white dark:border-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.12)] overflow-hidden bg-slate-100 dark:bg-slate-950 shrink-0">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                  </div>
                  
                  <div className="space-y-4 grow flex flex-col justify-between items-center pt-2">
                    <div className="space-y-1 text-center w-full">
                      <h3 className="font-extrabold text-[17px] text-slate-800 dark:text-slate-100 group-hover:text-secondary dark:group-hover:text-primary transition-colors duration-300 leading-snug">
                        {topper.name}
                      </h3>
                    </div>

                    {/* Gold Medal Icon */}
                    <div className="flex justify-center items-center h-12 w-full transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-10 h-10 drop-shadow-[0_2px_5px_rgba(234,179,8,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" fill="#FEF08A" stroke="#EAB308" strokeWidth="2" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
                        <circle cx="12" cy="8" r="2" fill="#EAB308" />
                      </svg>
                    </div>

                    <div className="space-y-0.5 text-center w-full">
                      <div className="text-sm font-black text-slate-800 dark:text-slate-200 tracking-wide">
                        {topper.score}
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed max-w-[90%] mx-auto">
                        {topper.achievement} 
                      </div>
                    </div>

                    <div className="w-full pt-2">
                      <span className="inline-block bg-blue-50 dark:bg-blue-950/45 text-secondary dark:text-blue-300 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4.5 py-1.5 rounded-full border border-blue-100/60 dark:border-blue-900/40 shadow-sm transition-colors duration-300 group-hover:bg-blue-100/60 dark:group-hover:bg-blue-900/60">
                        {topper.class} • {topper.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-20 md:py-28 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            
            <p className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-slate-100 tracking-tight">
              What Students & Parents Say
            </p>
            <p className="text-base sm:text-lg text-dark-light dark:text-slate-350">
              Real feedback from the people who have experienced our teaching methodology and achieved success.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md dark:shadow-none border border-slate-200 dark:border-slate-800 text-left flex flex-col justify-between relative"
              >
                {/* Quotes visual mark */}
                <div className="absolute top-6 right-8 text-6xl text-slate-100 dark:text-slate-800 font-serif leading-none select-none">
                  “
                </div>
                <div className="space-y-4 relative z-10">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-dark-light dark:text-slate-300 leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>
                <div className="flex items-center space-x-3 border-t border-slate-100 dark:border-slate-800 pt-4 mt-5">
                  <div className="w-10 h-10 bg-secondary/15 rounded-full flex items-center justify-center text-secondary-hover font-bold text-sm">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-dark dark:text-slate-100">{item.name}</h4>
                    <p className="text-[11px] text-dark-light dark:text-slate-400 font-bold mt-0.5">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Admission Banner (CTA) */}
      <section className="relative py-20 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden border-t border-slate-800 dark:border-slate-900">
        {/* Math Elements in dark banner background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-amber-50 opacity-20 dark:opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary text-dark font-extrabold text-xs tracking-widest px-4 py-1.5 rounded-full uppercase"
          >
            Admissions Open for Session 2026 - 2027
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Secure Your Seat for Conceptual Success
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Batch sizes are strictly capped to ensure personalized attention and daily doubt clearance. Contact us today for more Information!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-dark font-extrabold rounded-lg shadow-lg shadow-primary/25 transition-all text-base"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/918007733751"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-lg shadow-lg shadow-emerald-500/20 transition-all text-base flex items-center space-x-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
