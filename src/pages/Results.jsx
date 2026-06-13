import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, Filter } from 'lucide-react';
import MathBackground from '../components/MathBackground';
import { TOPPERS } from '../data/mathData';

const Results = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');

  const years = ['All', '2025', '2024', '2023'];
  const classes = ['All', 'Class 10', 'Class 9'];

  // Apply filters
  const filteredToppers = TOPPERS.filter((topper) => {
    const matchesYear = selectedYear === 'All' || topper.year.toString() === selectedYear;
    const matchesClass = selectedClass === 'All' || topper.class === selectedClass;
    return matchesYear && matchesClass;
  });

  // Success statistics data
  const stats = [
    {
      title: 'Centum Scores (100/100 Math)',
      value: '150+',
      desc: 'Students who scored a perfect 100 in Board examinations since 2011.',
      percentage: 100
    },
    {
      title: 'Board Exam Average',
      value: '88.4%',
      desc: 'Average score of our academy students in board math exams.',
      percentage: 88.4
    },
    {
      title: 'JEE Main Selections',
      value: '280+',
      desc: 'Students qualifying engineering entrances with high math percentiles.',
      percentage: 78
    },
    {
      title: 'Pass Percentage',
      value: '100%',
      desc: 'Consistency of results maintained over the last 15 academic years.',
      percentage: 100
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-dark dark:text-slate-100 transition-colors duration-300 min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-8 lg:py-16 lg:rounded-b-4xl rounded-b-2xl bg-primary dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden text-left">
        <MathBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest font-extrabold text-secondary"
          >
            OUR HALL OF FAME
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-dark dark:text-slate-100 tracking-tight mt-2"
          >
            Student Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-dark-light dark:text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            Celebrating the milestones of our dedicated students who mastered the beauty of numbers and scored outstanding marks in their exams.
          </motion.p>
        </div>
      </section>

      {/* Success Statistics Dashboard */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-2 mb-10">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-secondary">
            PERFORMANCE METRICS
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-dark dark:text-slate-100 tracking-tight">
            Academic Performance Dashboard
          </h3>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200/80 dark:border-slate-800 text-left flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-dark-light dark:text-slate-400 tracking-wide uppercase">{stat.title}</span>
                  <Trophy className="w-5 h-5 text-secondary shrink-0" />
                </div>
                <div className="text-4xl font-black text-dark dark:text-slate-100 pt-1">{stat.value}</div>
                <p className="text-xs text-dark-light dark:text-slate-350 leading-relaxed">{stat.desc}</p>
              </div>
              
              {/* Custom CSS Progress Bar */}
              <div className="mt-6">
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-850 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filters & Toppers Listing */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-t border-b border-slate-200/60 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filters control */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 text-left">
            <div>
              <h3 className="text-2xl font-extrabold text-dark dark:text-slate-100 tracking-tight">Toppers Showcase</h3>
              <p className="text-sm text-dark-light dark:text-slate-350 mt-1">Filter achievements by academic year or student class level.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2.5 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <Filter className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-extrabold text-dark dark:text-slate-200 uppercase tracking-wider">Filters:</span>
              </div>
              
              {/* Year Filter */}
              <div className="flex items-center bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <span className="text-xs font-bold text-dark-light dark:text-slate-400 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 px-3 py-2">Year</span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-2 text-xs font-bold text-dark dark:text-slate-200 bg-white dark:bg-slate-900 focus:outline-none cursor-pointer"
                >
                  {years.map(y => (
                    <option key={y} value={y}>{y === 'All' ? 'All Years' : y}</option>
                  ))}
                </select>
              </div>
 
              {/* Class Filter */}
              <div className="flex items-center bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <span className="text-xs font-bold text-dark-light dark:text-slate-400 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 px-3 py-2">Class</span>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-3 py-2 text-xs font-bold text-dark dark:text-slate-200 bg-white dark:bg-slate-900 focus:outline-none cursor-pointer"
                >
                  {classes.map(c => (
                    <option key={c} value={c}>{c === 'All' ? 'All Classes' : c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Grid display */}
          <div className="relative mt-24 pt-16 pb-12 rounded-3xl overflow-hidden bg-slate-100/50 dark:bg-slate-900/20 px-6 sm:px-8 border border-slate-200/50 dark:border-slate-800/30">
            {/* Blue Banner strip */}
            <div className="absolute top-0 left-0 right-0 h-44 dark:bg-slate-800 bg-primary dark:bg-slate-850" >
              <MathBackground/>
            </div>
            
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-28 relative z-10"
            >
              
                {filteredToppers.map((topper) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={topper.id}
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
                        <h4 className="font-extrabold text-[17px] text-slate-800 dark:text-slate-100 group-hover:text-secondary dark:group-hover:text-primary transition-colors duration-300 leading-snug">
                          {topper.name}
                        </h4>
                      </div>

                      {/* Gold Medal Icon representing placement brand logo */}
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
 
          {/* Empty state */}
          {filteredToppers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <Users className="w-12 h-12 text-slate-350 dark:text-slate-650 mx-auto" />
              <h4 className="text-lg font-bold text-dark dark:text-slate-200 mt-4">No results match your filter.</h4>
              <p className="text-sm text-dark-light dark:text-slate-400 mt-1">Try selecting a different Year or Class category.</p>
            </motion.div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Results;
