import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { LayoutDashboard, Users, Calendar, Sparkles } from 'lucide-react';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Home' },
  { path: '/societies', icon: Users, label: 'Societies' },
  { path: '/events', icon: Calendar, label: 'Events' },
  { path: '/ai', icon: Sparkles, label: 'AI' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-around py-2 px-4 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-t border-white/20 dark:border-white/10">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            clsx(
              'flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300',
              isActive
                ? 'bg-neon-cyan/20 text-neon-cyan'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            )
          }
        >
          <item.icon className="w-5 h-5" />
          <span className="text-xs font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
