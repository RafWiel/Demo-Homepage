import Button from 'react-bootstrap/Button';
import '../../assets/home/main-image.css';
import ImageSlider from './ImageSlider';
import { Link } from 'wouter';

const MainImage = () => {      
    return (
        <div className="mi-container">  
            <div className="mi-image-slider-container">
                <ImageSlider 
                    images={[
                        'home/images/main_image_1.jpg',
                        'home/images/main_image_2.jpg',
                        'home/images/main_image_3.jpg',
                        'home/images/main_image_4.jpg',
                        'home/images/main_image_5.jpg',
                        'home/images/main_image_6.jpg'
                    ]}
                    mobileImages={[
                        'home/images/main_image_xs_1.jpg',
                        'home/images/main_image_xs_2.jpg',
                        'home/images/main_image_xs_3.jpg',
                        'home/images/main_image_xs_4.jpg',
                        'home/images/main_image_xs_5.jpg',
                        'home/images/main_image_xs_6.jpg'
                    ]}
                />   
            </div>                
            <div className="mi-text-1">
                Nowoczesne systemy<br />i kompleksowe usługi
            </div>            
            <div className="mi-text-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. 
            </div>
            <div className="mi-button">
                <Link href="/solutions">                                    
                    <Button
                        variant="primary"                            
                        type="button"
                        size="lg"
                        className="px-4">
                        ROZWIĄZANIA
                    </Button> 
                </Link>
            </div>
            
        </div>
    );
}

export default MainImage;