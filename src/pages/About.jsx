import { motion } from 'framer-motion';
import { Target, Compass, HeartHandshake } from 'lucide-react';
import MathBackground from '../components/MathBackground';

const About = () => {
  const steps = [
    {
      num: '01',
      title: 'Step-by-Step Concept Building',
      desc: 'We start from absolute fundamentals. Visual proofs, real-world examples, and logical derivation ensure that students understand where a formula comes from rather than memorizing it blindly.'
    },
    {
      num: '02',
      title: 'Problem-Solving Approach',
      desc: 'Students solve 100+ graded problems per chapter ranging from basic school questions to advanced application queries, building calculation speed and critical thinking.'
    },
    {
      num: '03',
      title: 'Board Exam Preparation Series',
      desc: 'Meticulous attention to writing steps, drawing neat coordinate geometry graphs, structuring algebraic proofs, and writing answers according to CBSE/ICSE marking schemes.'
    },
    
  ];

  const milestones = [
    { label: 'Founded in', value: '2011' },
    { label: 'Board Toppers Created', value: '150+' },
    {label: 'Teaching Experience', value: '15+Y'},
    { label: 'Average Marks in Boards', value: '88%' }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-dark dark:text-slate-100 transition-colors duration-300">
      
      {/* Page Header */}
      <section className="relative lg:rounded-b-4xl rounded-b-2xl py-8 lg:py-16 bg-primary dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800 overflow-hidden text-left">
        <MathBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest font-extrabold text-secondary"
          >
            WHO WE ARE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-dark dark:text-slate-100 tracking-tight mt-2"
          >
            About Mahure Coaching Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-dark-light dark:text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            Exclusively specializing in Mathematics coaching since 2011. Guided by a core mission to eliminate math fear and inspire student analytical minds.
          </motion.p>
        </div>
      </section>

      {/* Overview - Mission, Vision, Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-left space-y-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/60 rounded-lg flex items-center justify-center text-dark dark:text-slate-200 font-extrabold">
              <Target className="w-6 h-6 text-slate-800 dark:text-slate-100" />
            </div>
            <h3 className="font-extrabold text-xl text-dark dark:text-slate-100">Our Mission</h3>
            <p className="text-sm text-dark-light dark:text-slate-350 leading-relaxed">
              To deliver the highest standard of concept-based Mathematics education. We strive to empower students of all learning levels to analyze, reason, and solve mathematical challenges with absolute confidence.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-left space-y-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/60 rounded-lg flex items-center justify-center text-dark dark:text-slate-200 font-extrabold">
              <Compass className="w-6 h-6 text-slate-800 dark:text-slate-100" />
            </div>
            <h3 className="font-extrabold text-xl text-dark dark:text-slate-100">Our Vision</h3>
            <p className="text-sm text-dark-light dark:text-slate-350 leading-relaxed">
              To be the most trusted academy for mathematics learning in the region. We aim to inspire a lifelong appreciation for mathematics and logic, enabling students to excel in whatever professional stream they choose.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-left space-y-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/60 rounded-lg flex items-center justify-center text-dark dark:text-slate-200 font-extrabold">
              <HeartHandshake className="w-6 h-6 text-slate-800 dark:text-slate-100" />
            </div>
            <h3 className="font-extrabold text-xl text-dark dark:text-slate-100">Teaching Philosophy</h3>
            <p className="text-sm text-dark-light dark:text-slate-350 leading-relaxed">
              Mathematics is not a subject to be memorized; it is a logic system to be explored. We believe every student can master Mathematics if they are guided through structured concepts, practice drills, and regular doubt clearance.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Director Message */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Image Block */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 max-w-md mx-auto">
                <img
                  src=""
                  alt="Director Mr. Mahure"
                  className="rounded-xl w-full h-80 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80';
                  }}
                />
                <div className="mt-4 text-center">
                  <h3 className="font-extrabold text-lg text-dark dark:text-slate-100">Mr. Nitin Mahure</h3>
                  <p className="text-xs text-secondary font-bold tracking-wide uppercase mt-1">
                    Subject Teacher
                  </p>
                </div>
              </div>
            </div>

            {/* Message Block */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-xs uppercase tracking-widest font-extrabold text-secondary">
                TEACHER'S MESSAGE
              </h2>
              <h3 className="text-3xl font-extrabold text-dark dark:text-slate-100 tracking-tight">
                "Mathematics is the key to unlocking critical analytical thinking."
              </h3>
              <div className="text-sm sm:text-base text-dark-light dark:text-slate-350 space-y-4 leading-relaxed">
                <p>
                  Dear Students and Parents,
                </p>
                <p>
                  Over the last 15 years, I have seen students struggle with math not because they lack capability, but because they are introduced to complex equations before understanding the core underlying arithmetic.
                </p>
                <p>
                  At Mahure Coaching Classes, we reject the notion of formulas memorization. We show students how formulas are derived and encourage them to play with graphs, geometry configurations, and algebraic proofs. When a student understands the "why", solving the equation becomes second nature.
                </p>
                <p>
                  Whether your child is in Class 8 building their foundations, or in Class 10 preparation for CBSE Board exams, our curriculum is engineered to nurture mathematical talent step-by-step.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-6">
                <span className="font-serif italic text-lg text-slate-800 dark:text-slate-200 font-extrabold">Nitin Mahure</span>
                <p className="text-xs text-dark-light dark:text-slate-450 mt-1">Founder, Mahure Coaching Classes</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-secondary">
            METHODOLOGY
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-slate-100 tracking-tight">
            How We Teach Mathematics
          </p>
          <p className="text-base sm:text-lg text-dark-light dark:text-slate-350">
            Our approach is refined to convert complex problems into digestible steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-left flex items-start space-x-5 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
            >
              <div className="text-3xl font-extrabold text-secondary font-mono leading-none pt-1 shrink-0">
                {step.num}
              </div>
              <div className="space-y-2">
                <h3 className="font-extrabold text-lg text-dark dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-light dark:text-slate-350 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Milestones / Achievements Section */}
      <section className="py-16 bg-slate-700 dark:bg-slate-800 text-white relative overflow-hidden border-t border-slate-800 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-primary">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400 tracking-wider uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
