// app/components/Reveal.tsx

"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once it's visible, we don't need to observe anymore (runs once)
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -100px 0px", // Triggers slightly before element enters viewport
                threshold: 0,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal-wrapper ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}