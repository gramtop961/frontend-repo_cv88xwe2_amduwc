import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

export default function RealTimeProgressDashboard({ currentProgress = 42, nextTasks = [] }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, currentProgress));
  const dash = (clamped / 100) * circumference;

  return (
    <section id="dashboard" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-center">
          <div className="relative w-40 h-40">
            <svg className="w-40 h-40 -rotate-90" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r={radius} stroke="rgb(255 255 255 / 0.08)" strokeWidth="12" fill="none" />
              <motion.circle
                cx="70"
                cy="70"
                r={radius}
                stroke="url(#grad)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={{ strokeDasharray: `${dash} ${circumference - dash}` }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              />
              <defs>
                <linearGradient id="grad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{clamped}%</div>
                <div className="text-xs text-white/60">Overall Progress</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Up next</h3>
            <span className="text-xs text-white/50">Top 3 recommendations</span>
          </div>
          <ul className="space-y-2">
            <AnimatePresence initial={false}>
              {nextTasks.slice(0, 3).map((task, idx) => (
                <motion.li
                  key={task.title + idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3 hover:bg-black/50 hover:border-white/20 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-indigo-500/20 grid place-items-center">
                      <Clock className="text-indigo-300" size={18} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{task.title}</div>
                      <div className="text-xs text-white/50">Est. {task.est} • {task.difficulty || 'Medium'}</div>
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 inline-flex items-center gap-1 text-xs text-white/80 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md transition">
                    <CheckCircle2 size={14} /> Mark done
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
}
