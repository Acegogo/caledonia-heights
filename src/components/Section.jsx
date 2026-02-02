import { useEffect, useRef, useState } from 'react';
import './Section.css';

const Section = ({
    children,
    className = '',
    background = 'white', // 'white', 'light', 'dark', 'primary'
    id = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% visible

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const bgClass = `section-bg-${background}`;

    return (
        <section
            id={id}
            className={`section ${bgClass} fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
            ref={domRef}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
