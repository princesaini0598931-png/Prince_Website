import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, Send } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export function AI() {
  const [input, setInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-24 md:pb-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">AI Recommendations</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">Get personalized society and event suggestions</p>
      </div>

      <GlassCard className="relative overflow-hidden p-8 md:p-12">
        <motion.div
          className="absolute top-6 right-6"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Sparkles className="w-12 h-12 text-neon-cyan drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
        </motion.div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Discover Your Perfect Societies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Our AI analyzes your interests, skills, and schedule to recommend societies and events tailored just for you. 
            Simply tell us what you're passionate about!
          </p>
          <div className="flex flex-wrap gap-3">
            {['Technology', 'Creative Arts', 'Sports', 'Cultural', 'Academic'].map((tag, i) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-2xl bg-neon-cyan/10 dark:bg-neon-cyan/20 border border-neon-cyan/30 text-neon-cyan text-sm font-medium hover:bg-neon-cyan/20 transition-colors"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </GlassCard>

      <div className="fixed bottom-24 md:bottom-8 right-8 z-50">
        <motion.button
          onClick={() => setChatOpen(!chatOpen)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shadow-glow-cyan"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-8 h-8 text-white" />
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-neon-cyan"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark"
          >
            <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neon-cyan" />
              <span className="font-bold text-slate-800 dark:text-slate-100">AI Assistant</span>
            </div>
            <div className="h-64 p-4 overflow-y-auto">
              <div className="flex gap-3 mb-4">
                <div className="px-4 py-2 rounded-2xl rounded-tl-none bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm max-w-[80%]">
                  Hi! I can help you find societies and events matching your interests. What are you passionate about?
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your interests..."
                  className="flex-1 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-neon-cyan text-sm"
                />
                <motion.button
                  className="p-2 rounded-2xl bg-neon-cyan text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.div>
  );
}
