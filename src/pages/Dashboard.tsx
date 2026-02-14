import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, ResponsiveContainer as PieResponsive } from 'recharts';
import { Users, Calendar, Activity, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { GlassCard } from '../components/GlassCard';

const chartData = [
  { name: 'Mon', events: 4, members: 120 },
  { name: 'Tue', events: 3, members: 145 },
  { name: 'Wed', events: 6, members: 180 },
  { name: 'Thu', events: 5, members: 165 },
  { name: 'Fri', events: 8, members: 220 },
  { name: 'Sat', events: 12, members: 280 },
  { name: 'Sun', events: 6, members: 190 },
];

const doughnutData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 25, color: '#a855f7' },
  { name: 'Sports', value: 20, color: '#22c55e' },
  { name: 'Academic', value: 20, color: '#f59e0b' },
];

const recentActivity = [
  { id: 1, action: 'New member joined Tech Society', time: '2 min ago' },
  { id: 2, action: 'Event "Hackathon 2025" created', time: '15 min ago' },
  { id: 3, action: 'Cultural fest registration opened', time: '1 hour ago' },
  { id: 4, action: 'Sports day event updated', time: '2 hours ago' },
];

const upcomingEvents = [
  { id: 1, title: 'Tech Talk: AI in Education', date: 'Feb 15', time: '4:00 PM' },
  { id: 2, title: 'Cultural Night Auditions', date: 'Feb 16', time: '6:00 PM' },
  { id: 3, title: 'Sports Meet', date: 'Feb 18', time: '9:00 AM' },
];

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Dashboard</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">Welcome back! Here's your overview.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Societies" value={24} icon={Users} trend="+3 this month" trendUp />
        <StatCard title="Upcoming Events" value={12} icon={Calendar} trend="5 this week" trendUp />
        <StatCard title="Active Members" value={1847} icon={Activity} trend="+12% from last week" trendUp />
        <StatCard title="Participation Rate" value={78} icon={TrendingUp} trend="+5%" trendUp />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 p-6">
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-6">Activity Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                <XAxis dataKey="name" className="text-xs" stroke="currentColor" />
                <YAxis className="text-xs" stroke="currentColor" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="events"
                  stroke="#00f5ff"
                  strokeWidth={2}
                  dot={{ fill: '#00f5ff', r: 4 }}
                  name="Events"
                />
                <Line
                  type="monotone"
                  dataKey="members"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: '#a855f7', r: 4 }}
                  name="Members"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-6">Society Distribution</h3>
          <div className="h-64">
            <PieResponsive width="100%" height="100%">
              <PieChart>
                <Pie
                  data={doughnutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                >
                  {doughnutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }}
                />
              </PieChart>
            </PieResponsive>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-neon-cyan" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{item.action}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 dark:bg-black/10 border border-white/10 hover:border-neon-cyan/30 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-neon-cyan">{item.date.split(' ')[1]}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">{item.date.split(' ')[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 dark:text-slate-100 truncate">{item.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}
