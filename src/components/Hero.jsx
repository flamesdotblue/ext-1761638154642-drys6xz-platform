import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background aesthetic gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles size={14} className="text-fuchsia-300" />
              AI-powered UI building, in your vibe
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight">
              Build interfaces at the speed of thought
            </h1>
            <p className="mt-4 text-white/70 max-w-xl mx-auto lg:mx-0">
              Like Bolt, Lovable, and V0 — but with your style. Describe the vibe, get production-grade components and live previews instantly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#playground" className="inline-flex justify-center items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
                Start vibing
              </a>
              <a href="#features" className="inline-flex justify-center items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm hover:bg-white/5 transition">
                Explore features
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            {/* Spline animation: AI voice agent aura animation */}
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
