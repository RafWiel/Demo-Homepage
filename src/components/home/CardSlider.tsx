import '../../assets/home/card-slider.css';
import ClientQuoteCard from './ClientQuoteCard';
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

export type CardSliderRef = {    
    startAnimation: () => void;    
}

const CardSlider = forwardRef<CardSliderRef>((_props, ref) => { 
    const timerRef = useRef(0); 
    const isAnimationRunningRef = useRef(false);
    const currentCardIndexRef = useRef(false);

    useEffect(() => {             
        return () => {   
            clearTimeout(timerRef.current);            
        };
    }, []);

    useImperativeHandle(ref, () => ({
        startAnimation() {
            //run once
            if (isAnimationRunningRef.current) {
                return;
            }

            isAnimationRunningRef.current = true;
    
            //show top card        
            document.querySelector('.hidden-top')?.classList.remove('hidden-top')
    
            //run animation
            animateIn(document.querySelector('.cs-card'));
            setTimeout(() => { slide() }, 7000);
    
            //remove hidden from bottom card
            setTimeout(() => {
                document.querySelector('.hidden')?.classList.remove('hidden')
            }, 7000)
        }
    }));   

    const slide = () => {
        const cards = document.querySelectorAll('.cs-card');
    
        //switch current card        
        const index = currentCardIndexRef.current = !currentCardIndexRef.current;
    
        //set z-order
        cards[+!index].classList.remove('top');
        cards[+!index].classList.add('bottom');
        cards[+index].classList.add('top');
        cards[+index].classList.remove('bottom');
    
        //start animations
        animateOut(cards[+!index]);
        animateIn(cards[+index]);
    
        timerRef.current = setTimeout(() => { slide() }, 7000);
    }

    const animateIn = (card: Element | null) => {
        if (!card) return;
    
        const fadeIn = [
            { opacity: 0 },
            { opacity: 1 },
        ];
    
        const slideLeft = [
            { transform: "translateX(100%)" },
            { transform: "translateX(0)" },
        ];
    
        card.animate(fadeIn, {
            duration: 1000,
            iterations: 1,
            fill: 'forwards'
        });
    
        card.animate(slideLeft, {
            duration: 3000,
            iterations: 1,
            easing: 'ease-out',
        });
    }
    
    const animateOut = (card: Element) => {
        if (!card) return;
    
        const fadeOut = [
            { opacity: 1 },
            { opacity: 0 },
        ];
    
        card.animate(fadeOut, {
            duration: 2000,
            iterations: 1,
            fill: 'forwards'
        });
    }

    return (
        <div className="cs-container">
            <div className="cs-card top hidden-top">
                <ClientQuoteCard />
            </div>
            <div className="cs-card bottom hidden">
                <ClientQuoteCard />
            </div>
        </div>
    );    
});

export default CardSlider;