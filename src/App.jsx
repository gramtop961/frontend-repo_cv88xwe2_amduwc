import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import BackgroundScene from './components/BackgroundScene';
import LearningPathForm from './components/LearningPathForm';
import RealTimeProgressDashboard from './components/RealTimeProgressDashboard';

export default function App() {
  const [progress, setProgress] = useState(32);
  const [nextTasks, setNextTasks] = useState([
    { title: 'Set up project scaffolding', est: '30m', difficulty: 'Easy' },
    { title: 'Learn Tailwind utility patterns', est: '1h', difficulty: 'Medium' },
    { title: 'Create FastAPI endpoint', est: '1.5h', difficulty: 'Medium' },
  ]);

  // Simulate a real-time feel by gently animating progress
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 96 ? 96 : p + Math.random() * 1.2));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Stable tasks reference for child props
  const tasks = useMemo(() => nextTasks, [nextTasks]);

  const handleGenerate = ({ increment, tasks }) => {
    setProgress((p) => Math.min(100, Math.round(p + increment)));
    setNextTasks(tasks);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundScene />
      <div className="relative z-10">
        <Header />
        <main className="space-y-8 py-8">
          <Hero />
          <RealTimeProgressDashboard currentProgress={Math.round(progress)} nextTasks={tasks} />
          <LearningPathForm onGenerate={handleGenerate} />
          <Footer />
        </main>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Personalized Learning Path Generator</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Generate a learning journey tailored to your goals. Track your progress in real-time and focus on the next best step.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 pt-4 pb-10 text-center text-xs text-white/50">
      Built for modern developers • Dark-mode native • Real-time ready
    </footer>
  );
}
