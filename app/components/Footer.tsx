// app/components/Footer.tsx

"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <footer id="contact" className="relative mt-20 pt-24 pb-8 overflow-hidden bg-surface rounded-t-[3rem] mx-4 md:mx-8 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-brand-green via-brand-teal to-brand-purple opacity-20 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center px-6 mb-24 relative z-10">
        <Reveal delay={0}>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mb-8 leading-tight">
            Ready to do less work <br />
            <span className="text-gradient">and get better results?</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-sans text-text-muted text-lg mb-12 max-w-xl mx-auto">
            Drop your email below and let's talk about building your brand's custom engine.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto relative"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              required
              className="font-sans w-full sm:w-2/3 bg-background border border-white/10 rounded-full text-white px-6 py-4 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple transition-all duration-300 shadow-inner"
            />
            <button
              type="submit"
              className="font-[family-name:var(--font-accent)] w-full sm:w-1/3 bg-brand-purple text-white px-6 py-4 rounded-full font-medium hover:bg-brand-purple-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </button>

            {/* Simple CSS fade in for success message */}
            <span
              className={`absolute -bottom-8 left-0 w-full text-center text-sm text-brand-green transition-opacity duration-500 ${submitted ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              ✓ We'll be in touch shortly.
            </span>
          </form>
        </Reveal>
      </div>

      <div className="border-t border-white/5 px-6 md:px-12 pt-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted font-sans">
          <span>© {new Date().getFullYear()} Adwise Media. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}