import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { clsx } from 'clsx';
import { Users, ChevronRight } from 'lucide-react';

interface SocietyCardProps {
  name: string;
  description: string;
  members: number;
  category: string;
  image?: string;
  className?: string;
}

export function SocietyCard({ name, description, members, category, image, className }: SocietyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={clsx(
        'group relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark cursor-pointer',
        className
      )}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="h-32 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <Users className="w-16 h-16 text-white/60" style={{ transform: 'translateZ(40px)' }} />
          )}
        </div>
        <div className="p-6">
          <span className="text-xs font-medium text-neon-cyan px-2 py-1 rounded-lg bg-neon-cyan/20">
            {category}
          </span>
          <h3 className="mt-3 font-bold text-lg text-slate-800 dark:text-slate-100 line-clamp-1">
            {name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {members} members
            </span>
            <motion.div
              className="p-2 rounded-xl bg-neon-cyan/20 text-neon-cyan"
              whileHover={{ x: 4 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
