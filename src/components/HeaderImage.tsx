import '../assets/header-image.css';
import { Link, useLocation } from 'wouter';
import routes from './routes.ts';

type Props = {
    imagePath: string,
    title: string
}

const HeaderImage = ({ imagePath, title }: Props) => {
    const [location, ] = useLocation();

    const parts = location.split('/');
    console.log(parts);

    return (
        <div className="hi-container">
            <img 
                className="hi-image hi-image-animation" 
                src={imagePath} 
                loading="eager"
                alt="" />
            <div className="hi-text">
                <div className="hi-title hi-title-animation">
                    {title}                    
                </div>
                <div className="hi-links hi-links-animation mt-4">{location}</div>
                <div className="hi-links hi-links-animation mt-4">
                    <Link href="/">
                        Home
                    </Link> 
                    <span>&nbsp;&gt;&nbsp;</span>
                    <Link href="/services">
                        Usługi
                    </Link> 
                </div>
            </div>    
        </div>
    );
}

export default HeaderImage;