// app/components/Solution.tsx

import Reveal from "./Reveal";

export default function Solution() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <Reveal delay={0}>
          <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
            The sweet spot: <br />
            <span className="text-gradient">Your brand&apos;s DNA, automated.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto mb-20 leading-relaxed">
            We don't just type prompts into software. We build a dedicated, automated content machine that learns your specific business, talks exactly like you, and designs in your visual style.
          </p>
        </Reveal>

        {/* Soft, flowing visualizer built with pure CSS flex/grid */}
        <Reveal delay={300}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative w-full max-w-4xl mx-auto">

            {/* Node 1 */}
            <div className="bg-surface border border-white/5 rounded-[2rem] p-8 w-full md:w-1/3 z-10 shadow-xl">
              <h4 className="font-[family-name:var(--font-accent)] text-brand-green font-medium mb-2 text-lg">You Tell Us</h4>
              <p className="font-sans text-sm text-text-muted">Your goals, daily updates, or rough ideas.</p>
            </div>

            {/* Flowing Connector */}
            <div className="w-1 h-12 md:w-16 md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-brand-green to-brand-teal rounded-full animate-gradient-flow" />

            {/* Node 2 - The Core */}
            <div className="bg-gradient-to-br from-surface to-[#1A1225] border border-brand-purple/30 rounded-[2.5rem] p-8 w-full md:w-1/3 z-10 shadow-[0_0_40px_rgba(116,51,148,0.2)] hover:shadow-[0_0_60px_rgba(116,51,148,0.3)] transition-all duration-300">
              <h4 className="font-[family-name:var(--font-accent)] text-white font-medium text-xl mb-2">The Adwise Engine</h4>
              <p className="font-sans text-sm text-text-muted">Guided by our human artists, run by our tech.</p>
            </div>

            {/* Flowing Connector */}
            <div className="w-1 h-12 md:w-16 md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-brand-purple to-brand-blue rounded-full animate-gradient-flow" />

            {/* Node 3 */}
            <div className="bg-surface border border-white/5 rounded-[2rem] p-8 w-full md:w-1/3 z-10 shadow-xl">
              <h4 className="font-[family-name:var(--font-accent)] text-brand-blue font-medium mb-2 text-lg">You Approve</h4>
              <p className="font-sans text-sm text-text-muted">Perfectly formatted ads, emails, and social posts.</p>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}