import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';

const events = [
  { id: 1, title: 'Hackathon 2025 - Build the Future', date: 'Feb 15, 2025', time: '9:00 AM - 6:00 PM', location: 'Tech Block, Room 301', capacity: 100, registered: 87, status: 'upcoming' as const, category: 'Technology' },
  { id: 2, title: 'Cultural Night Auditions', date: 'Feb 14, 2025', time: '4:00 PM', location: 'Auditorium', capacity: 50, registered: 50, status: 'ongoing' as const, category: 'Cultural' },
  { id: 3, title: 'Sports Meet - Cricket Finals', date: 'Feb 18, 2025', time: '2:00 PM', location: 'College Ground', capacity: 200, registered: 45, status: 'upcoming' as const, category: 'Sports' },
  { id: 4, title: 'Tech Talk: AI in Education', date: 'Feb 12, 2025', time: '3:00 PM', location: 'Seminar Hall', capacity: 80, registered: 80, status: 'completed' as const, category: 'Academic' },
  { id: 5, title: 'Photography Workshop', date: 'Feb 20, 2025', time: '10:00 AM', location: 'Arts Block', capacity: 30, registered: 28, status: 'upcoming' as const, category: 'Creative' },
  { id: 6, title: 'Debate Competition', date: 'Feb 22, 2025', time: '2:00 PM', location: 'Conference Room', capacity: 60, registered: 12, status: 'upcoming' as const, category: 'Academic' },
];

export function Events() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Events</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">Discover and register for upcoming events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <EventCard {...event} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
