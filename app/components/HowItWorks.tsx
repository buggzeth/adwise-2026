// app/components/HowItWorks.tsx

import Reveal from "./Reveal";

const steps = [
  {
    num: "1",
    title: "We learn your brand.",
    text: "Our team hops on a call to understand your voice, style, and goals. We audit what you have and build a custom profile just for you.",
    color: "bg-brand-green"
  },
  {
    num: "2",
    title: "We build your engine.",
    text: "We set up a secure, automated system that connects directly to your business. It learns your products and services inside out.",
    color: "bg-brand-teal"
  },
  {
    num: "3",
    title: "You review and publish.",
    text: "Instead of staring at a blank page, you log in to find ready-to-post graphics, emails, and ads. You just approve the best ones.",
    color: "bg-brand-blue"
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto">
        <Reveal delay={0}>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              How it works
            </h2>
          </div>
        </Reveal>

        <div className="space-y-12 relative">
          {/* Subtle background line connecting steps */}
          <div className="absolute left-6 md:left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-brand-green via-brand-teal to-brand-blue opacity-30" />

          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 200}>
              <div className="flex items-start gap-6 md:gap-10 relative z-10 group hover:-translate-y-1 transition-transform duration-300">
                <div className={`font-[family-name:var(--font-accent)] w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full flex items-center justify-center text-background font-bold text-xl md:text-2xl shadow-lg transition-transform duration-300 ${step.color}`}>
                  {step.num}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="font-serif text-2xl text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-muted text-lg leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}