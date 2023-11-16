import { Link } from 'wouter';
import '../../assets/home/bullet-card.css';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';

type Props = {
    image: string,
    title: string,
    text: string,
    route: string
};

const MainCards = ({image, title, text, route}: Props) => { 
    const limitedText = text.length > 500 ? `${text.substring(0, 500)}...` : text;

    const getImageUrl = () => {        
        try {      
            return `/src/assets/home/images/${image}`;
            //return new URL(`/src/assets/home/images/${image}`, import.meta.url)
        }
        catch {
            return '';
        }
    }
    
    return (
        <div className="bc-container">            
            <div className="bc-image-container">
                <img 
                    src={getImageUrl()}
                    className="bc-image"                      
                    alt="" />
            </div>
            <div className="bc-title pt-4">
                {title}
            </div>
            <div className="bc-text px-4 py-4">
                {limitedText}
            </div>
            <div className="bc-link-container">                
                <Link href={route}>
                    <Nav.Link>CZYTAJ DALEJ {'>'}</Nav.Link>
                </Link>
            </div>             
        </div>
    );
}

export default MainCards;