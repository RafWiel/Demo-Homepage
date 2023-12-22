import { useLocation } from 'wouter';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const [location, ] = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }
    
    useEffect(() => {
        scrollToTop();

        //repeat on unload
        return () => {   
            scrollToTop();
        };        
    }, [location]);

    return null;
}

export default ScrollToTop;