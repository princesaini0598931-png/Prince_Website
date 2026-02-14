import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Calendar, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  category: string;
  className?: string;
}

export function EventCard({
  title,
  date,
  time,
  location,
  capacity,
  registered,
  status,
  category,
  className,
}: EventCardProps) {
  const capacityPercent = capacity > 0 ? Math.min((registered / capacity) * 100, 100) : 0;

  const statusStyles = {
    upcoming: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    ongoing: 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30 animate-pulse',
    completed: 'bg-slate-500/20 text-slate-500 dark:text-slate-400 border-slate-500/30',
  };

  return (
    <motion.div
      className={clsx(
        'group rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark hover:shadow-glow-cyan transition-all duration-300',
        className
      )}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <span className="text-xs font-medium text-neon-purple px-2 py-1 rounded-lg bg-neon-purple/20">
              {category}
            </span>
            <h3 className="mt-3 font-bold text-lg text-slate-800 dark:text-slate-100 line-clamp-2">
              {title}
            </h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Calendar className="w-4 h-4 flex-shrink-0 text-neon-cyan" />
                <span>{date} • {time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 text-neon-cyan" />
                <span className="line-clamp-1">{location}</span>
              </div>
            </div>
          </div>
          <motion.span
            className={clsx(
              'flex-shrink-0 px-3 py-1 rounded-xl text-xs font-medium border',
              statusStyles[status]
            )}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </motion.span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Users className="w-4 h-4" />
              {registered} / {capacity} registered
            </span>
            <span className="font-medium text-neon-cyan">{Math.round(capacityPercent)}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${capacityPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
