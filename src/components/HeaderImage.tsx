import '../assets/header-image.css';
import { Link, useLocation } from 'wouter';
import routes from '../routes.ts';

type Props = {
    imagePath: string,
    title: string
}

const HeaderImage = ({ imagePath, title }: Props) => {
    const [location, ] = useLocation();

    const links = location.split('/').map((item) => {
        item = '/' + item;        
        return item;
    });

    return (
        <div className="hi-container">
            <img 
                className="hi-image hi-image-animation" 
                src={imagePath}                 
                alt="" />
            <div className="hi-text">
                <div className="hi-title hi-title-animation">
                    {title}                    
                </div>
                <div className="hi-links hi-links-animation mt-4">
                    {
                        links && links.map((item, i, {length}) => (
                            <Link key={item} href={item} >
                                {routes.getText(item)}
                                { (i < length - 1) ? ' > ' : '' }                                                                
                            </Link> 
                        ))                    
                    }
                </div>
            </div>    
        </div>
    );
}

export default HeaderImage;