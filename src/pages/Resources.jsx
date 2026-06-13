import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, FileText, CheckCircle, Loader2 } from 'lucide-react';
import MathBackground from '../components/MathBackground';
import { RESOURCES } from '../data/mathData';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [downloadProgress, setDownloadProgress] = useState({});

  // Categories list derived from mock data + 'All'
  const categories = [
    'All',
    'Formula Sheets',
    'Notes',
    'Practice Worksheets',
    'Question Banks',
    'Previous Year Papers',
    'Chapter-wise Assignments',
    'Quick Revision PDFs'
  ];

  // Filtering logic
  const filteredResources = RESOURCES.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subcat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.classes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Mock download progress triggers
  const handleDownload = (id, filepath) => {
    if (downloadProgress[id]) return; // already downloading or downloaded
    
    // Set downloading state
    setDownloadProgress(prev => ({ ...prev, [id]: { status: 'loading', percent: 0 } }));
    
    // Animate progress
    let percent = 0;
    const interval = setInterval(() => {
      percent += 20;
      setDownloadProgress(prev => ({
        ...prev,
        [id]: { status: 'loading', percent }
      }));

      const fileDownload = async (filepath) => {
        const response = await fetch(filepath);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filepath.split('/').pop();
        link.click();
        URL.revokeObjectURL(url);
      };
      
      if (percent >= 100) {
        clearInterval(interval);
        setDownloadProgress(prev => ({
          ...prev,
          [id]: { status: 'completed' }
        }));
        fileDownload(filepath);
      }
    }, 150);
  };

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
            MATHEMATICS LEARNING CENTER
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-dark dark:text-slate-100 tracking-tight mt-2"
          >
            Study Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-dark-light dark:text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            Free downloadable formula booklets, chapter assignments, and Previous Years Board Question Papers, Notes created by Mr. Mahure Sir.
          </motion.p>
        </div>
      </section>

      {/* Main Interactive Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Search & Categories (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8 text-left">
            
            {/* Search Bar */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-dark dark:text-slate-350 uppercase tracking-wider block">
                Search Resources
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g., Trigonometry, Class 10..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 focus:border-secondary focus:outline-none pl-11 pr-4 py-3 rounded-lg text-sm transition-all text-dark dark:text-slate-150 font-semibold shadow-sm"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>
 
            {/* Categories list */}
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-dark dark:text-slate-350 uppercase tracking-wider block">
                Category Filter
              </span>
              <div className="flex flex-col space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-xs font-extrabold tracking-wide transition-all cursor-pointer flex justify-between items-center ${
                      selectedCategory === cat
                        ? 'bg-primary/20 dark:bg-primary/10 text-dark dark:text-slate-100 border-l-4 border-primary pl-3.5'
                        : 'text-dark-light dark:text-slate-400 hover:text-dark dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && (
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Cards Grid list (lg:col-span-8) */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Active filters summary */}
            <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-dark-light dark:text-slate-400 font-semibold">
                Showing <strong className="text-dark dark:text-slate-200 font-bold">{filteredResources.length}</strong> materials
              </span>
              <span className="text-slate-400 dark:text-slate-500">
                Filter: <strong className="text-secondary font-bold uppercase">{selectedCategory}</strong>
              </span>
            </div>

            {/* Resource Cards */}
            <motion.div 
              layout ="position"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              
                {filteredResources.map((res) => {
                  const state = downloadProgress[res.id] || { status: 'idle' };
                  
                  return (
                    <div
                      key={res.id}
                      className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-md p-6 flex flex-col justify-between space-y-5 hover:border-slate-350 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-none transition-all"
                    >
                      <div className="space-y-3">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-slate-100 dark:bg-slate-950 text-dark-light dark:text-slate-400 font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                            {res.category.split(' ')[0]}
                          </span>
                          <span className="bg-secondary/15 text-secondary-hover font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                            {res.subcat}
                          </span>
                        </div>
 
                        {/* Title */}
                        <h4 className="font-extrabold text-base text-dark dark:text-slate-100 leading-snug group-hover:text-secondary transition-colors">
                          {res.title}
                        </h4>
 
                        {/* Sub details */}
                        <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-dark-light dark:text-slate-450">
                          <span>Classes: <strong>{res.classes.join(', ')}</strong></span>
                          <span>•</span>
                          <span>Size: <strong>{res.size}</strong></span>
                        </div>
                      </div>
 
                      {/* Download Action Wrapper */}
                      <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between">
 
                        <button
                          onClick={() => handleDownload(res.id, res.fileName)}
                          disabled={state.status !== 'idle'}
                          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer select-none ${
                            state.status === 'idle'
                              ? 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                              : state.status === 'loading'
                              ? 'bg-slate-100 dark:bg-slate-950 text-dark-light dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                              : 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/55'
                          }`}
                        >
                          {state.status === 'idle' && (
                            <>
                              <Download className="w-3.5 h-3.5" />
                              <span>Download</span>
                            </>
                          )}
                          {state.status === 'loading' && (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-secondary shrink-0" />
                              <span>{state.percent}%</span>
                            </>
                          )}
                          {state.status === 'completed' && (
                            <>
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>Downloaded</span>
                            </>
                          )}
                        </button>
                      </div>
 
                    </div>
                  );
                })}
              
            </motion.div>
 
            {/* Empty state */}
            {filteredResources.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center bg-slate-50 dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl"
              >
                <FileText className="w-12 h-12 text-slate-350 dark:text-slate-650 mx-auto" />
                <h4 className="text-lg font-bold text-dark dark:text-slate-200 mt-4">No materials found.</h4>
                <p className="text-sm text-dark-light dark:text-slate-450 mt-1">Try resetting search query or category filters.</p>
              </motion.div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Resources;
