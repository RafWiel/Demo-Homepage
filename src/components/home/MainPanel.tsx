import '../../assets/home/main-panel.css';
import { useInView } from 'react-intersection-observer';

const MainPanel = () => {   
    const { ref, inView } = useInView({
        triggerOnce: true
      });

    return (
        <div ref={ref} className="mp-container">            
            <div className="mp-left-section">
                <div className={`mp-title ${inView ? 'mp-title-animation' : ''}`}>
                    Stawiamy na jakość,<br /> profesjonalizm i troskę o klienta
                </div> 
                <div className="mp-text-container">
                    <div className={`mp-text ${inView ? 'mp-text-animation' : ''}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. <b>Ut sed euismod nunc</b>. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet.
                    </div>                            
                    <ul className={`mp-list ${inView ? 'mp-list-animation' : ''}`}>
                        <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                        <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                        <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                    </ul>
                </div>
            </div>
            <div className="mp-right-section">
                <img 
                    className={`mp-image ${inView ? 'mp-image-animation' : ''}`}
                    src="/src/assets/home/images/main_panel_1.jpg" 
                    alt=""/>
            </div>
        </div>
    );
}

export default MainPanel;