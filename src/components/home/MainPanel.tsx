import '../../assets/home/main-panel.css';

const MainPanel = () => {   
    return (
        <div className="mp-container mp-intersection">
            <div className="mp-left-section">
                <div className="mp-title">Stawiamy na jakość,<br /> profesjonalizm i troskę o klienta</div>
                <div className="mp-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. <b>Ut sed euismod nunc</b>. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. </div>
                <ul className="mp-list">
                    <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                    <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                    <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                </ul>
            </div>
            <div className="mp-right-section">
                <img className="mp-image" src="@/assets/home/images/main_panel_1.jpg" alt=""/>
            </div>
        </div>
    );
}

export default MainPanel;