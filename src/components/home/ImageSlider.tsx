import '../../assets/home/image-slider.css';
import { useState, useEffect, useRef } from 'react';

type Props = {
    images: Array<string>
}

const ImageSlider = ({images}: Props) => {
    const imageIndex = useRef(1);
    const currentImageIndex = useRef(false);
    const slideTimer = useRef(0);    
    
    useEffect(() => {        
        animate(document.querySelector('.is-image') as HTMLImageElement);
        setTimeout(() => { slide() }, 3000);
    
        //remove hidden from bottom image
        setTimeout(() => {
          document.querySelector('.hidden')?.classList.remove('hidden');
        }, 1000);


        return () => {   
            clearTimeout(slideTimer.current);
        };
    }, []);

    function slide() {
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
            if (imageIndex.current > images.length - 1) imageIndex.current = 0
                    
            slides[+!currentImageIndex.current].src = `/src/assets/${images[imageIndex.current]}`;
            //slides[+!currentImageIndex.current].src = new URL(`/src/assets/${images[imageIndex.current]}`, import.meta.url);            
        }, 1000);
            
        slideTimer.current = setTimeout(() => { slide() }, 3000);
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
        //unit test fails with INVALID_URL
        try {
            return `/src/assets/${images[index]}`;
            //return new URL(`/src/assets/${images[index]}`, import.meta.url)
        }
        catch {
            return '';
        }
      }

    //load
    useEffect(() => {
        console.log(images);        
    }, []);

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
            <div className="is-temp-text">
                {getImageUrl(0)}
            </div>            
        </div>    
    );
}

export default ImageSlider;