// app/components/Problem.tsx

import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface rounded-[3rem] mx-4 md:mx-8 shadow-2xl my-12 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <Reveal delay={0}>
          <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
            You&apos;re caught between <br className="md:hidden" />
            <span className="text-brand-purple">two bad options.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto">
            Creating content shouldn't be this hard. Right now, most businesses are forced to choose between quality and scale.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        <Reveal delay={300} className="h-full">
          <div className="bg-background h-full rounded-3xl p-8 md:p-10 border border-white/5 shadow-lg relative overflow-hidden group hover:border-brand-purple/50 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="font-serif text-2xl mb-4 text-white">1. The Expensive Agency</h3>
            <p className="font-sans text-text-muted leading-relaxed">
              They do good work, but they move too slow. You spend hours writing briefs, sitting in meetings, and waiting weeks for a handful of assets. It's bloated, and you pay for their overhead.
            </p>
          </div>
        </Reveal>

        <Reveal delay={450} className="h-full">
          <div className="bg-background h-full rounded-3xl p-8 md:p-10 border border-white/5 shadow-lg relative overflow-hidden group hover:border-brand-teal/50 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-teal opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="font-serif text-2xl mb-4 text-white">2. The "Do-It-Yourself" AI</h3>
            <p className="font-sans text-text-muted leading-relaxed">
              You try using standard AI tools to save money. The result? Generic, robotic posts that sound nothing like your brand, and images that look instantly recognizable as fake.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}