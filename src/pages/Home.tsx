import MainImage from "../components/home/MainImage";
import MainCards from "../components/home/MainCards";
import MainPanel from "../components/home/MainPanel";
import ExperienceBanner from "../components/home/ExperienceBanner";
import SocialProofPanel from "../components/home/SocialProofPanel";

const Home = () => {
    return (
        <>  
            <MainImage />
            <MainCards />            
            <MainPanel />
            <ExperienceBanner />
            <SocialProofPanel />
        </>
    );
}

export default Home;