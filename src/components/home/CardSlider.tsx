import '../../assets/home/card-slider.css';
import ClientQuoteCard from './ClientQuoteCard';

const CardSlider = () => {
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
}

export default CardSlider;