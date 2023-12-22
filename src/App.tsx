//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';
import './assets/app.css';
import './assets/fonts.css';

import NavBar from './components/NavBar.tsx';
import { Route, Switch} from 'wouter';
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import Implementations from './pages/Implementations.tsx';
import Jobs from './pages/Jobs.tsx';
import Maintenance from './pages/Maintenance.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import Services from './pages/Services.tsx';
import Software from './pages/Software.tsx';
import Solutions from './pages/Solutions.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {  
  return (
    <div className="app">
      <NavBar />      
      {/* <h1>Footer mobile</h1>             */}
      <ScrollToTop />
      <main className="main">
        <Switch>
          <Route path="/"><Home /></Route>          
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/implementations"><Implementations /></Route>
          <Route path="/jobs"><Jobs /></Route>
          <Route path="/maintenance"><Maintenance /></Route>
          <Route path="/privacy-policy"><PrivacyPolicy /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/software"><Software /></Route>
          <Route path="/solutions"><Solutions /></Route>
          <Route>404, Not Found!</Route>
        </Switch>
        {/* <MessageModal message={message} close={closeMessage} />
        {isLoadingIcon && <LoadingIcon />} */}
      </main>
      <Footer />
      
    </div>
  )
}

export default App
