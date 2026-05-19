// app/components/Differentiator.tsx

import Reveal from "./Reveal";

export default function Differentiator() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface rounded-[3rem] mx-4 md:mx-8 shadow-2xl my-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left — Soft Image Layout */}
        <Reveal delay={0}>
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden group">
            <img
              src="/diff.png"
              alt="Human creativity and design"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-purple mix-blend-overlay opacity-30 transition-opacity duration-500 group-hover:opacity-10" />
          </div>
        </Reveal>

        {/* Right — Text */}
        <div className="flex flex-col justify-center">
          <Reveal delay={200}>
            <span className="font-[family-name:var(--font-accent)] text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4 block">
              The Human Element
            </span>
          </Reveal>

          <Reveal delay={300}>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
              Real artists set the rules. <br />
              <span className="text-text-muted">Tech does the heavy lifting.</span>
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
              AI is only as good as what you feed it. If you feed it generic prompts, you get generic results.
            </p>
            <p className="font-sans text-text-muted text-lg leading-relaxed">
              That’s why we aren't just a tech company. We have real, in-house designers and copywriters who carefully craft the "guardrails" for your brand. They build the aesthetic rules and voice guidelines so that when our system generates content, it looks and sounds exactly like you—every single time.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}