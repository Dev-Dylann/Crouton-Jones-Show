import { useState, useEffect } from 'react'
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button onClick={scrollToTop} className={`p-4 rounded-full bg-primaryBtn shadow-lg shadow-textColor/50 fixed bottom-5 right-5 transition-all z-[99] ${isVisible ? 'opacity-1' : 'opacity-0'} md:bottom-8 md:right-8`}>
            <ChevronDoubleUpIcon className="h-6 w-6" />
        </button>
    )
}

export default ToTop