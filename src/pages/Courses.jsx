import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import MathBackground from '../components/MathBackground';
import { COURSES } from '../data/mathData';

const Courses = () => {
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Handle URL hashes for direct scrolling (e.g., #class-12)

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  const filters = [];

  const filteredCourses = selectedFilter === 'All' 
    ? COURSES 
    : COURSES.filter(course => course.level === selectedFilter);

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
            OUR ACADEMIC PROGRAMS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-dark dark:text-slate-100 tracking-tight mt-2"
          >
            Mathematics Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-dark-light dark:text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            Tailored math programs from Class 8th to 10th. Structured to build core skills, clarify concepts, and prepare for board exams and competitive entries.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-primary text-dark shadow-md shadow-primary/20 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-dark-light dark:text-slate-400 hover:text-dark dark:hover:text-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-12 space-y-12">
          <AnimatePresence mode="wait">
          <motion.div 
            layout
            className="grid grid-cols-1 gap-10"
          >
            {filteredCourses.map((course) => (
              <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  key={course.id}
                  id={course.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg dark:shadow-none border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 overflow-hidden text-left p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch transition-all relative group"
                >
                  
                  {/* Left Column: Title & Info */}
                  <div className="lg:w-1/3 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Level and Exam Badges */}
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-secondary/15 text-secondary-hover font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                          {course.level}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-extrabold text-dark dark:text-slate-100 tracking-tight leading-tight group-hover:text-secondary-hover transition-colors">
                        {course.title}
                      </h2>
                      <p className="text-sm font-bold text-slate-500 dark:text-slate-450 font-serif italic">
                        {course.subtitle}
                      </p>
                      <p className="text-sm text-dark-light dark:text-slate-300 leading-relaxed">
                        {course.description}
                      </p>
                    </div>
 
                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center space-x-2 text-xs font-bold text-dark-light dark:text-slate-400">
                        <Calendar className="w-4.5 h-4.5 text-secondary shrink-0" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-dark-light dark:text-slate-400">
                        <Award className="w-4.5 h-4.5 text-secondary shrink-0" />
                        <span>Exams: {course.exams}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-dark-light dark:text-slate-400">
                        {/* mode */}
                        <span>Mode: Offline</span>
                      </div>
                    </div>
                  </div>
 
                  {/* Middle Column: Topics Covered */}
                  <div className="lg:w-1/3 bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/80 flex flex-col">
                    <h3 className="font-extrabold text-sm text-dark dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-secondary shrink-0" />
                      <span>Syllabus Highlights</span>
                    </h3>
                    <ul className="space-y-2.5 text-xs font-semibold text-dark-light dark:text-slate-350 grow">
                      {course.topics.map((topic, index) => (
                        <li key={index} className="flex items-start space-x-2.5">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5" />
                          <span className="leading-normal">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
 
                  {/* Right Column: Outcomes & CTA */}
                  <div className="lg:w-1/3 p-2 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-extrabold text-sm text-dark dark:text-slate-200 uppercase tracking-wider flex items-center space-x-2">
                        <GraduationCap className="w-4.5 h-4.5 text-secondary shrink-0" />
                        <span>Key Outcomes</span>
                      </h3>
                      <ul className="space-y-3 text-xs font-semibold text-dark-light dark:text-slate-350">
                        {course.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-normal">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
 
                    <div className="pt-4">
                      <Link
                        to={`/contact?course=${course.id}`}
                        className="w-full text-center py-3 bg-primary hover:bg-primary-hover text-dark font-extrabold rounded-lg shadow-lg shadow-primary/10 transition-all text-sm flex items-center justify-center space-x-1"
                      >
                        <span>Enroll in {course.title.split(' ')[0]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
};

export default Courses;
