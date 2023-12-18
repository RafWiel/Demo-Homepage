import '../assets/footer.css';
import logo from '/demo-logo.svg';

const Footer = () => {
    return (
        <div className="ft-container ">            
            <img
                // onClick={navigate('home')}                
                alt="demo logo"
                className="logo"
                src={logo}
                width="130"
                height="30" />
                <div className="ft-mid-section">
                    <div className="ft-header">KONTAKT</div>
                    <ul className="mt-6">
                        <li>
                            {/* <v-icon icon="mdi-map-marker" color="primary" class="mr-2" /> */}
                            24-100 Puławy
                        </li>
                        <li className="ml-8">ul. Piękna 1</li>
                        <li>
                            {/* <v-icon icon="mdi-phone" color="primary" class="mr-2"/> */}
                            <a href="tel: 48%2081%20123%2012%2034">+48 81 123 12 34</a>
                        </li>
                        <li>
                            {/* <v-icon icon="mdi-fax" color="primary" class="mr-2"/> */}
                            <a href="tel: 48%2081%20123%2012%2035">+48 81 123 12 35</a>
                        </li>
                        <li>
                            {/* <v-icon icon="mdi-email" color="primary" class="mr-2"/> */}
                            <a href="mailto: info@demo.com.pl">info@demo.com.pl</a>
                        </li>
                    </ul>
                </div>
            <div className="ft-right-section">
            {/* <v-icon icon="mdi-chevron-right" color="primary" /> */}
            <a 
                // onClick={navigate('privacyPolicy')} 
                href="javascript: void(0)">Polityka prywatności</a>

            </div>
        </div>
    );
}

export default Footer;