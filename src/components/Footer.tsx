import '../assets/footer.css';
import logo from '/demo-logo.svg';
import { Link } from 'wouter';
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdFax } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";


const Footer = () => {
    return (
        <div className="ft-container ">
            <div className="ft-wrapper">
                <Link href="/">
                    <img                                    
                        className="logo"
                        alt="demo logo"
                        src={logo}
                        width="130"
                        height="30" />        
                </Link>            
                <div className="ft-mid-section">
                    <div className="ft-header">KONTAKT</div>  
                    <div className="ft-contact-container">
                        <ul className="ft-contact">
                            <li>
                                <MdLocationPin className="me-2" color="var(--primary)" size={24}/>                              
                                24-100 Puławy
                            </li>
                            <li className="ml-2" style={{marginLeft: '32px'}}>ul. Piękna 1</li>                        
                        </ul>
                        <ul className="ft-contact">
                            <li>
                                <MdPhone className="me-2" color="var(--primary)" size={24}/>                           
                                <a href="tel: 48%2081%20123%2012%2034">+48 81 123 12 34</a>
                            </li>
                            <li>
                                <MdFax className="me-2" color="var(--primary)" size={24}/>                                
                                <a href="tel: 48%2081%20123%2012%2035">+48 81 123 12 35</a>
                            </li>
                            <li>
                                <MdMail className="me-2" color="var(--primary)" size={24}/>    
                                <a href="mailto: info@demo.com.pl">info@demo.com.pl</a>
                            </li>
                        </ul>
                    </div>
                </div>            
                <Link href="/privacy-policy" className="ft-right-section">
                    <MdChevronRight color="var(--primary)" size={24}/>              
                    Polityka prywatności       
                </Link>                                              
            </div>
        </div>            
    );
}

export default Footer;