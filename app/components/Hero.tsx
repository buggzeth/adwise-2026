// app/components/Hero.tsx 

import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-32 pb-20 overflow-hidden text-center">
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">

        <Reveal delay={200}>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-text-primary leading-[1.1] mb-6">
            Marketing is exhausting. <br />
            <span className="text-gradient">Let&apos;s put it on autopilot.</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="font-sans text-text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto">
            We combine real human creativity with smart automation to build a marketing system that runs itself. No more micromanaging agencies, and no more robotic AI content.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <a
            href="#contact"
            className="font-[family-name:var(--font-accent)] inline-block w-full sm:w-auto bg-gradient-to-r from-brand-purple to-brand-blue text-white px-8 py-3.5 rounded-full text-base font-medium hover:shadow-[0_0_30px_rgba(74,98,166,0.4)] transition-all duration-300"
          >
            See How We Do It
          </a>
        </Reveal>
      </div>

      {/* Hero Image Placeholder */}
      <Reveal delay={600} className="w-full max-w-5xl mt-16 rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-video relative group">
        <img
          src="/hero.png"
          alt="Creative team working"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </Reveal>
    </section>
  );
}