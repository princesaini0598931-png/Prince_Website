import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-3xl flex items-center justify-center overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:shadow-glow-cyan transition-shadow duration-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun - visible in light mode, sets when switching to dark */}
        <motion.div
          className="absolute"
          initial={false}
          animate={
            theme === 'light'
              ? { rotate: 0, y: 0, opacity: 1 }
              : { rotate: 90, y: 30, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Sun className="w-6 h-6 text-amber-500" />
        </motion.div>

        {/* Moon - visible in dark mode, rises when switching from light */}
        <motion.div
          className="absolute"
          initial={false}
          animate={
            theme === 'dark'
              ? { rotate: 0, y: 0, opacity: 1 }
              : { rotate: -90, y: -30, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Moon className="w-6 h-6 text-slate-300" />
        </motion.div>
      </div>
    </motion.button>
  );
}
