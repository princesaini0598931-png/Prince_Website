import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/societies', icon: Users, label: 'Societies' },
  { path: '/events', icon: Calendar, label: 'Events' },
  { path: '/ai', icon: Sparkles, label: 'AI Recommendations' },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobile?: boolean;
}

export function Sidebar({ isCollapsed, onToggle, isMobile = false }: SidebarProps) {
  if (isMobile) return null;

  return (
    <motion.aside
      className="fixed left-0 top-0 z-40 h-screen flex flex-col backdrop-blur-xl bg-white/10 dark:bg-black/10 border-r border-white/20 dark:border-white/10"
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-8 min-h-[56px]">
          <AnimatePresence mode="wait">
            {!isCollapsed ? (
              <motion.div
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 overflow-hidden"
              >
                <div className="p-2 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-lg text-slate-800 dark:text-slate-100 truncate">
                  SocietyHub
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="logo-collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center w-full"
              >
                <div className="p-2 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300',
                  isActive
                    ? 'bg-neon-cyan/20 dark:bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan'
                    : 'hover:bg-white/20 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <AnimatePresence mode="wait">
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-medium truncate"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </nav>

        <button
          onClick={onToggle}
          className="flex items-center justify-center gap-2 p-3 rounded-2xl hover:bg-white/20 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors mt-4"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Collapse</span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
