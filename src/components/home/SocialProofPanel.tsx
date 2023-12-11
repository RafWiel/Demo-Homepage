import '../../assets/home/social-proof-panel.css';
import { InView } from 'react-intersection-observer';
import CardSlider, { CardSliderRef } from './CardSlider';
import { useRef } from 'react';

const SocialProofPanel = () => {    
    const cardSliderRef = useRef<CardSliderRef>(null);

    //start child animation on intersection
    const intersect = (inView: boolean) => {
        if (!inView) {
            return;
        }

        cardSliderRef.current?.startAnimation();
    }

    return (
        <InView         
            triggerOnce
            onChange={(inView: boolean) => intersect(inView)}>
            {({ inView, ref }) => (
                <div ref={ref} className="spp-container">            
                    <div className="spp-left-section">
                        <img 
                            className={`spp-image ${inView ? 'spp-image-animation' : ''}`}
                            src="/src/assets/home/images/social_proof.jpg" alt=""/>                    
                    </div>
                    <div className="spp-right-section">
                        <div className="spp-title-container">
                            <div className={`spp-title ${inView ? 'spp-title-animation' : ''}`}>
                                Co mówią o nas klienci?
                            </div>
                        </div>
                        <CardSlider ref={cardSliderRef}/>                
                    </div>
                </div>
            )}
            
        </InView>
    );
}

export default SocialProofPanel;