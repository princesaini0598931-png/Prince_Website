import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, LogOut, Settings } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  sidebarCollapsed: boolean;
  isMobile?: boolean;
}

export function Navbar({ sidebarCollapsed, isMobile = false }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sidebarWidth = isMobile ? 0 : sidebarCollapsed ? 80 : 256;

  return (
    <motion.header
      className="fixed top-0 right-0 z-30 h-16 flex items-center justify-between px-6 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10"
      initial={false}
      animate={{ marginLeft: sidebarWidth }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10">
            <Search className="w-5 h-5 text-slate-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search societies, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder-slate-500 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          className="relative p-2 rounded-2xl hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
        </motion.button>

        <ThemeToggle />

        <div className="relative" ref={profileRef}>
          <motion.button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 p-2 pl-3 rounded-2xl hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="hidden md:block font-medium text-slate-700 dark:text-slate-300 text-sm">
              John Doe
            </span>
          </motion.button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-56 rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark overflow-hidden"
              >
                <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
                  <p className="font-medium text-slate-800 dark:text-slate-100">John Doe</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">john@college.edu</p>
                </div>
                <div className="p-2">
                  <button className="flex items-center gap-2 w-full px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm">
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button className="flex items-center gap-2 w-full px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 text-rose-600 dark:text-rose-400 text-sm">
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
