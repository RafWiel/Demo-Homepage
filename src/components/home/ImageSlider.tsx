import '../../assets/home/image-slider.css';
import { useEffect, useRef } from 'react';

type Props = {
    images: Array<string>,
    mobileImages: Array<string>,
}

const ImageSlider = ({images, mobileImages}: Props) => {
    const imageIndexRef = useRef(1);
    const currentImageIndexRef = useRef(false);
    const timerRef = useRef(0);   
    const isMobileRef = useRef(window.innerWidth <= 768);
    
    useEffect(() => {        
        animate(document.querySelector('.is-image') as HTMLImageElement);
        timerRef.current = setTimeout(() => { slide() }, 3000);
    
        //remove hidden from bottom image
        setTimeout(() => {
          document.querySelector('.hidden')?.classList.remove('hidden');
        }, 1000);

        //switch mobile or desktop images
        window.addEventListener('resize', handleResize);
        
        return () => {   
            clearTimeout(timerRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        isMobileRef.current = window.innerWidth <= 768;
    }

    const slide = () => {
        //console.log(moment(new Date()).format('hh:mm:ss'), 'slide');
        const slides:NodeListOf<HTMLImageElement> = document.querySelectorAll('.is-image');
            
        //switch current image
        const index = currentImageIndexRef.current = !currentImageIndexRef.current;            
            
        //set z-order
        slides[+!index].classList.remove('top');
        slides[+!index].classList.add('bottom');
        slides[+index].classList.add('top');
        slides[+index].classList.remove('bottom');
            
        //start animations
        animate(slides[+index]);
    
        //load next image
        setTimeout(() => {
            imageIndexRef.current++
            if (imageIndexRef.current > images.length - 1) {
                imageIndexRef.current = 0
            }

            slides[+!index].src = getImageUrl(imageIndexRef.current); 
            //console.log(isMobileRef.current, getImageUrl(imageIndex.current));           
        }, 1000);
            
        timerRef.current = setTimeout(() => { slide() }, 3000);
    }
    
    const animate = (image: HTMLImageElement) => {
        if (!image) return;

        const fadeIn = [
            { opacity: 0 },
            { opacity: 1 },
        ]

        const zoomIn = [
            { transform: "scale(1)" },
            { transform: "scale(1.15)" },
        ]

        image.animate(fadeIn, {
            duration: 500,
            iterations: 1,
        })

        image.animate(zoomIn, {
            duration: 15000,
            iterations: 1,
        })
    }
    
    const getImageUrl = (index: number) => {
        try {
            if (isMobileRef.current) {
                return `/src/assets/${mobileImages[index]}`; 
            }

            return `/src/assets/${images[index]}`;
            //return new URL(`/src/assets/${images[index]}`, import.meta.url)
        }
        catch {
            return '';
        }
    }

    return (        
        <div className="is-container">
            <img 
                src={getImageUrl(0)}                                
                className="is-image top"  
                alt="" />
            <img 
                src={getImageUrl(1)}
                className="is-image bottom hidden"  
                alt="" />            
        </div>    
    );
}

export default ImageSlider;