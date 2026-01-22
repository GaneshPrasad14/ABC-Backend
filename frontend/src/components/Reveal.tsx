
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    width?: "fit-content" | "100%";
    threshold?: number;
}

export const Reveal = ({
    children,
    className,
    delay = 0,
    width = "fit-content",
    threshold = 0.5
}: RevealProps) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Only animate once
                    }
                });
            },
            {
                threshold: 0.1, // Trigger as soon as 10% is visible for better mobile feel
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={cn("relative transition-all duration-1000", width, className)} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)', filter: isVisible ? 'blur(0)' : 'blur(4px)' }}>
            {isVisible && (
                <div className={cn("animate-slide-up-fade")} style={{ animationDelay: `${delay}ms` }}>
                    {children}
                </div>
            )}
        </div>
    );
};
