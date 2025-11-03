import React from 'react';
import { Rocket, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/50 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center">
            <Rocket className="text-white" size={18} />
          </div>
          <span className="text-white font-semibold tracking-tight">PathForge</span>
        </div>
        <nav className="flex items-center gap-3 text-sm text-white/70">
          <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
          <a href="#planner" className="hover:text-white transition-colors">Planner</a>
          <a href="#account" className="hover:text-white transition-colors flex items-center gap-1"><User size={16} /> Account</a>
        </nav>
      </div>
    </header>
  );
}
