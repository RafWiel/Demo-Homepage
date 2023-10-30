import '../../assets/home/image-slider.css';
import { useEffect, useRef } from 'react';
import moment from 'moment';

type Props = {
    images: Array<string>,
    mobileImages: Array<string>,
}

const ImageSlider = ({images, mobileImages}: Props) => {
    const imageIndex = useRef(1);
    const currentImageIndex = useRef(false);
    const slideTimeout = useRef(0);   
    const isMobile = useRef(window.innerWidth <= 768);
    
    useEffect(() => {        
        animate(document.querySelector('.is-image') as HTMLImageElement);
        slideTimeout.current = setTimeout(() => { slide() }, 3000);
    
        //remove hidden from bottom image
        setTimeout(() => {
          document.querySelector('.hidden')?.classList.remove('hidden');
        }, 1000);

        //switch mobile or desktop images
        window.addEventListener('resize', handleResize);
        
        return () => {   
            clearTimeout(slideTimeout.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleResize() {
        isMobile.current = window.innerWidth <= 768;
    }

    function slide() {
        console.log(moment(new Date()).format('hh:mm:ss'), 'slide');
        const slides:NodeListOf<HTMLImageElement> = document.querySelectorAll('.is-image');
            
        //switch current image
        currentImageIndex.current = !currentImageIndex.current;            
            
        //set z-order
        slides[+!currentImageIndex.current].classList.remove('top');
        slides[+!currentImageIndex.current].classList.add('bottom');
        slides[+currentImageIndex.current].classList.add('top');
        slides[+currentImageIndex.current].classList.remove('bottom');
            
        //start animations
        animate(slides[+currentImageIndex.current]);
    
        //load next image
        setTimeout(() => {
            imageIndex.current++
            if (imageIndex.current > images.length - 1) {
                imageIndex.current = 0
            }

            slides[+!currentImageIndex.current].src = getImageUrl(imageIndex.current); 
            //console.log(isMobile.current, getImageUrl(imageIndex.current));           
        }, 1000);
            
        slideTimeout.current = setTimeout(() => { slide() }, 3000);
    }
    
    function animate(image: HTMLImageElement) {
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
    
    function getImageUrl(index: number) {
        try {
            if (isMobile.current) {
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