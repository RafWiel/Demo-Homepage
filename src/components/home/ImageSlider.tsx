import '../../assets/home/image-slider.css';
import { useEffect } from 'react';

type Props = {
    images: Array<string>
}

const ImageSlider = ({images}: Props) => {

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
        </div>
    );
}

export default ImageSlider;