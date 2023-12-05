import '../../assets/home/social-proof-panel.css';
import { useInView } from 'react-intersection-observer';

const SocialProofPanel = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div ref={ref}  className="spp-container">            
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
                {/* <card-slider ref="cardSlider" class="spp-card-slider"/> */}
            </div>
        </div>
    );
}

export default SocialProofPanel;