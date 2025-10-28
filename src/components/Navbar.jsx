import React from 'react';
import { Rocket, Bot, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-orange-400" />
            <span className="font-semibold tracking-tight">VibeCode AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#playground" className="hover:text-white transition">Playground</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#playground"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              <Rocket size={16} />
              Launch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm hover:bg-white/5 transition"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
