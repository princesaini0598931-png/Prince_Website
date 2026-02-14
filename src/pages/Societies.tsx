import { motion } from 'framer-motion';
import { SocietyCard } from '../components/SocietyCard';

const societies = [
  { id: 1, name: 'Tech Society', description: 'Building the future with code. Workshops, hackathons, and tech talks for aspiring developers.', members: 324, category: 'Technology' },
  { id: 2, name: 'Cultural Club', description: 'Celebrate diversity through dance, music, drama, and art. Annual cultural fest and regional showcases.', members: 456, category: 'Cultural' },
  { id: 3, name: 'Sports Association', description: 'From cricket to football, badminton to chess. Intra and inter-college competitions.', members: 289, category: 'Sports' },
  { id: 4, name: 'Literary Society', description: 'Poetry slams, debate clubs, creative writing. Where words come alive.', members: 167, category: 'Academic' },
  { id: 5, name: 'Photography Club', description: 'Capture moments, tell stories. Workshops, photowalks, and exhibitions.', members: 198, category: 'Creative' },
  { id: 6, name: 'Music Band', description: 'Rock, classical, fusion. Jam sessions and live performances.', members: 89, category: 'Cultural' },
];

export function Societies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Societies</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">Explore and join college societies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {societies.map((society, i) => (
          <motion.div
            key={society.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <SocietyCard
              name={society.name}
              description={society.description}
              members={society.members}
              category={society.category}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
