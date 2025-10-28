import React from 'react';
import { Code2, Zap, Puzzle, Bot } from 'lucide-react';

const features = [
  {
    icon: <Bot className="text-fuchsia-300" size={20} />,
    title: 'Vibe-aware generation',
    desc: 'Describe your vibe (minimal, playful, neobrutalist) and get components styled to match.',
  },
  {
    icon: <Code2 className="text-violet-300" size={20} />,
    title: 'Clean React & Tailwind',
    desc: 'Readable, production-ready code with sensible props and accessibility built-in.',
  },
  {
    icon: <Puzzle className="text-sky-300" size={20} />,
    title: 'Composable primitives',
    desc: 'Use shadcn/Radix patterns for consistent, flexible UI building blocks.',
  },
  {
    icon: <Zap className="text-orange-300" size={20} />,
    title: 'Instant preview',
    desc: 'See the UI update live as you refine prompts or tweak style tokens.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Everything you need to ship vibes</h2>
          <p className="mt-2 text-white/70">Opinionated defaults, flexible design tokens, and a playful workflow.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition">
              <div className="h-8 w-8 rounded-md bg-white/5 flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
