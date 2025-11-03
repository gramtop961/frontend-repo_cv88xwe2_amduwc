import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function LearningPathForm({ onGenerate }) {
  const [goal, setGoal] = useState('Full-Stack Web Developer');
  const [experience, setExperience] = useState('intermediate');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated generation of next tasks and target progress increment
    const suggestions = generateMockTasks(goal, experience);
    onGenerate({ increment: Math.floor(5 + Math.random() * 15), tasks: suggestions });
  };

  return (
    <section id="planner" className="relative z-10 w-full">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-indigo-400" />
            <h2 className="text-white font-semibold">Personalize your path</h2>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-xs text-white/60 mb-1">Career goal</label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-white/10 text-white px-3 py-2 outline-none focus:ring-2 ring-indigo-500"
                placeholder="e.g., Frontend Engineer, ML Engineer"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-1">Experience level</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-white/10 text-white px-3 py-2 outline-none focus:ring-2 ring-indigo-500"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="md:col-span-3 flex items-center justify-end gap-3 pt-2">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white px-4 py-2 font-medium shadow-lg shadow-indigo-500/20 hover:brightness-110 transition">
                <Sparkles size={16} />
                Generate next steps
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function generateMockTasks(goal, experience) {
  const pool = [
    { title: 'Build REST API with FastAPI', est: '2h' },
    { title: 'Practice TypeScript Generics', est: '1.5h' },
    { title: 'Data Modeling in MongoDB', est: '2h' },
    { title: 'Deploy on Vercel & CI/CD', est: '1h' },
    { title: 'Write Unit Tests with Vitest', est: '1h' },
    { title: 'Implement OAuth2 with JWT', est: '1.5h' },
    { title: 'GraphQL vs REST Deep Dive', est: '2h' },
    { title: 'Responsive UI with Tailwind', est: '1h' },
  ];
  const bias = experience === 'beginner' ? 0 : experience === 'intermediate' ? 1 : 2;
  const shuffled = [...pool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((t, i) => ({
      ...t,
      title: `${t.title} for ${goal.split(' ')[0]}`,
      difficulty: ['Easy', 'Medium', 'Hard'][Math.min(2, (i + bias) % 3)],
    }));
  return shuffled;
}
