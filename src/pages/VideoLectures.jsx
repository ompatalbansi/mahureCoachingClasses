import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, Clock, Eye, Video, X } from 'lucide-react';
import MathBackground from '../components/MathBackground';
import { VIDEOS } from '../data/mathData';

const VideoLectures = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null); // stores video object for modal playing

  const categories = [
    'All',
    'Algebra',
    'Geometry',
    'Trigonometry',
    'Coordinate Geometry',
    'Statistics',
    'Board Exam Preparation'
  ];

  // Filtering
  const filteredVideos = VIDEOS.filter((video) => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredVideo = VIDEOS.find(v => v.featured);

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
            MATHEMATICS VIDEO LIBRARY
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-dark dark:text-slate-100 tracking-tight mt-2"
          >
            Video Lectures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-dark-light dark:text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            High-quality conceptual math videos by Mr. Mahure Sir. Watch complex concepts broken down visually with geometry graphs and algebraic step proofs.
          </motion.p>
        </div>
      </section>

      {/* Featured Video Section */}
      {featuredVideo && selectedCategory === 'All' && searchQuery === '' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-2 mb-8">
            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span>Featured Masterclass</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark dark:text-slate-100 tracking-tight">
              Recommended Mathematics Lecture
            </h2>
          </div>
 
          <div 
            onClick={() => setActiveVideo(featuredVideo)}
            className="bg-slate-900 dark:bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 dark:border-slate-800/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 cursor-pointer group hover:border-secondary/40 transition-all text-left"
          >
            {/* Visual Thumbnail */}
            <div className="lg:col-span-7 h-80 sm:h-96 relative bg-slate-950 flex items-center justify-center">
              <img
                src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/hqdefault.jpg`}
                alt={featuredVideo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white font-bold text-xs px-3 py-1 rounded">
                Featured
              </div>
            </div>

            {/* Info details */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6 text-slate-350">
              <div className="space-y-4">
                <span className="bg-secondary/20 text-secondary-hover font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {featuredVideo.category}
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">
                  {featuredVideo.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {featuredVideo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-4 mt-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1"><Clock className="w-4 h-4 text-secondary" /> <span>{featuredVideo.duration} mins</span></span>
                </div>
                <span className="font-bold text-slate-400">Tutor: {featuredVideo.tutor}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Filter & Search Grid */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-t border-b border-slate-200/60 dark:border-slate-800/80 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12">
            
            {/* Categories filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-primary text-dark shadow-md shadow-primary/20'
                      : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-dark-light dark:text-slate-400 hover:text-dark dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
 
            {/* Search inputs */}
            <div className="relative min-w-[280px]">
              <input
                type="text"
                placeholder="Search lectures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-750 focus:border-secondary focus:outline-none pl-10 pr-4 py-2.5 rounded-lg text-xs transition-all text-dark dark:text-slate-100 font-semibold shadow-sm"
              />
              <Search className="w-4.5 h-4.5 text-slate-400 absolute left-3.5 top-3" />
            </div>
 
          </div>

          {/* Videos Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            
              {filteredVideos.map((video) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80';
                      }}
                    />
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                    <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white font-bold text-[10px] px-2.5 py-1 rounded">
                      {video.duration} mins
                    </div>
                  </div>
 
                  <div className="p-5 grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="bg-secondary/15 text-secondary-hover font-extrabold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {video.category}
                      </span>
                      <h4 className="font-extrabold text-sm sm:text-base text-dark dark:text-slate-100 group-hover:text-secondary-hover transition-colors leading-snug">
                        {video.title}
                      </h4>
                      <p className="text-xs text-dark-light dark:text-slate-350 leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                    </div>
 
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center justify-between text-[10px] font-bold text-dark-light dark:text-slate-455">
                      <span>Tutor: {video.tutor}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            
          </div>

          {/* Empty state */}
          {filteredVideos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <Video className="w-12 h-12 text-slate-350 dark:text-slate-650 mx-auto" />
              <h4 className="text-lg font-bold text-dark dark:text-slate-200 mt-4">No lectures found.</h4>
              <p className="text-sm text-dark-light dark:text-slate-450 mt-1">will be upload soon!!</p>
            </motion.div>
          )}

        </div>
      </section>

      {/* Video Modal Player (Light box) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-950/60 hover:bg-slate-950 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close Player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Iframe Responsive Container */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Video metadata under player */}
              <div className="p-6 text-left space-y-2 text-slate-350">
                <div className="flex items-center space-x-2">
                  <span className="bg-secondary/20 text-secondary-hover font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {activeVideo.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold">Duration: {activeVideo.duration} mins</span>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-extrabold tracking-tight">
                  {activeVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                  {activeVideo.description}
                </p>
                <div className="text-[10px] font-bold text-slate-500 pt-2 flex space-x-4">
                  <span>Tutor: {activeVideo.tutor}</span>
                  <span>•</span>
                  <span>Views: {activeVideo.views}</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default VideoLectures;
