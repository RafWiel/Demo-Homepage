import '../assets/header-image.css';

type Props = {
    imagePath: string,
    title: string
}

const HeaderImage = ({ imagePath, title }: Props) => {
    return (
        <div className="hi-container">
            <img 
                className="hi-image hi-image-animation" 
                src={imagePath} 
                alt="" />
            <div className="hi-title hi-text-animation">
                {title}
            </div>
        </div>
    );
}

export default HeaderImage;