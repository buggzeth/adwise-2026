// app/components/Navbar.tsx

"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl transition-all duration-500 ${scrolled ? "bg-[#0A0710]/80 border-b border-white/5" : "bg-transparent border-transparent"
        }`}
    >
      <a href="#" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Adwise Media Logo"
          className="h-10 w-auto object-contain transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="font-serif text-2xl text-white">Adwise Media</span>');
          }}
        />
      </a>

      <a
        href="#contact"
        className="font-[family-name:var(--font-accent)] bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-purple-dark hover:shadow-[0_4px_20px_rgba(116,51,148,0.4)] transition-all duration-300"
      >
        Let's Talk
      </a>
    </nav>
  );
}