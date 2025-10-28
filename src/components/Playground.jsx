import React, { useMemo, useState } from 'react';
import { Bot, Wand2, Copy, Check } from 'lucide-react';

function PreviewCard({ title, subtitle, accent }) {
  return (
    <div className="h-full w-full flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accent} 0%, #ffffff22 100%)` }} />
        <div className="p-6">
          <h4 className="text-lg font-semibold" style={{ color: accent }}>{title}</h4>
          <p className="mt-1 text-white/70">{subtitle}</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Playground() {
  const [prompt, setPrompt] = useState("Create a glowing CTA card with a gradient accent and minimal copy");
  const [accent, setAccent] = useState('#a78bfa');
  const [title, setTitle] = useState('Supercharge your flow');
  const [subtitle, setSubtitle] = useState('Ship beautiful UI with AI-assisted building blocks.');
  const [copied, setCopied] = useState(false);

  const generatedCode = useMemo(() => {
    return `export function CtaCard() {\n  return (\n    <div className=\"rounded-2xl border border-white/10 bg-white/5 overflow-hidden\">\n      <div className=\"h-1 w-full\" style={{ background: 'linear-gradient(90deg, ${accent} 0%, #ffffff22 100%)' }} />\n      <div className=\"p-6\">\n        <h4 className=\"text-lg font-semibold\" style={{ color: '${accent}' }}>${title}</h4>\n        <p className=\"mt-1 text-white/70\">${subtitle}</p>\n        <button className=\"mt-4 inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium\">\n          Get Started\n        </button>\n      </div>\n    </div>\n  )\n}`;
  }, [accent, title, subtitle]);

  function generateFromPrompt() {
    // Lightweight, local mapping from prompt keywords to style changes (mock AI)
    const p = prompt.toLowerCase();
    if (p.includes('neon') || p.includes('glow')) setAccent('#22d3ee');
    if (p.includes('warm') || p.includes('sunset')) setAccent('#fb923c');
    if (p.includes('purple') || p.includes('vibe')) setAccent('#a78bfa');
    if (p.includes('cta')) setTitle('Level up instantly');
    if (p.includes('minimal')) setSubtitle('Keep it clean. Focus on what matters.');
  }

  function copyCode() {
    navigator.clipboard.writeText(generatedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <section id="playground" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Bot size={14} className="text-fuchsia-300" />
            Playground
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold">Describe your vibe. See it come alive.</h2>
          <p className="mt-2 text-white/70">Tweak copy and tokens to refine the generated component. Copy-paste ready.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Controls */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <label className="text-sm font-medium text-white/80">Prompt</label>
            <div className="mt-2 flex items-start gap-2">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-sm outline-none focus:border-white/20"
                placeholder="e.g. playful dashboard card with pastel gradient and rounded corners"
              />
              <button
                onClick={generateFromPrompt}
                className="shrink-0 inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition"
                aria-label="Generate"
              >
                <Wand2 size={16} />
                Generate
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-white/70">Accent</label>
                <input
                  type="color"
                  value={accent}
                  onChange={(e) => setAccent(e.target.value)}
                  className="mt-1 h-10 w-full rounded-md border border-white/10 bg-black/40"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 p-2 text-sm outline-none focus:border-white/20"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Subtitle</label>
                <input
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 p-2 text-sm outline-none focus:border-white/20"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-white/80">Code</label>
              <div className="mt-2 relative">
                <pre className="rounded-lg border border-white/10 bg-black/60 p-4 text-xs leading-relaxed overflow-auto">
{generatedCode}
                </pre>
                <button
                  onClick={copyCode}
                  className="absolute top-2 right-2 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs hover:bg-white/10"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live preview */}
          <div className="rounded-2xl border border-white/10 bg-white/5 min-h-[380px]">
            <PreviewCard title={title} subtitle={subtitle} accent={accent} />
          </div>
        </div>
      </div>
    </section>
  );
}
