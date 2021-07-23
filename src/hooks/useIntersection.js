import { useState, useEffect } from 'react'

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                }
            }, { rootMargin }
        );

        element && observer.observe(element.current);

        return () => observer.disconnect();
    }, [element, rootMargin]);

    return isVisible;
};

export default useIntersection;