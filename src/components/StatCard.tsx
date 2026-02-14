import { motion, useSpring, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, trendUp, className }: StatCardProps) {
  const spring = useSpring(0, { stiffness: 75, damping: 15 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useMotionValueEvent(spring, 'change', (latest) => {
    setDisplayValue(Math.round(latest));
  });

  return (
    <motion.div
      className={clsx(
        'rounded-3xl p-6 backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="text-3xl font-bold mt-1 text-slate-800 dark:text-slate-100">
            {displayValue}
          </p>
          {trend && (
            <p
              className={clsx(
                'text-sm mt-2',
                trendUp ? 'text-emerald-500' : 'text-rose-500'
              )}
            >
              {trend}
            </p>
          )}
        </div>
        <div className="p-3 rounded-2xl bg-neon-cyan/10 dark:bg-neon-cyan/20">
          <Icon className="w-6 h-6 text-neon-cyan" />
        </div>
      </div>
    </motion.div>
  );
}
