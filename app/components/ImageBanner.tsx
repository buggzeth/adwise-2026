// app/components/ImageBanner.tsx

import Reveal from "./Reveal";

export default function ImageBanner() {
    return (
        <section className="px-6 md:px-12 py-12">
            <Reveal delay={0}>
                <div className="w-full max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative h-[400px] flex items-center justify-center group">
                    <img
                        src="/banner.png"
                        alt="Collaboration and results"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-purple-dark mix-blend-multiply opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

                    <div className="relative z-10 text-center px-6 max-w-3xl">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-snug">
                            "Finally, a marketing solution that understands our brand without needing a 20-page brief every week."
                        </h2>
                        <p className="font-[family-name:var(--font-accent)] text-brand-green uppercase tracking-widest text-sm font-semibold">
                            — The Future of Your Marketing
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}