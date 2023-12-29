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
import routes from './routes.ts';

function App() {  
  return (
    <div className="app">
      <NavBar />      
      {/* <h1>Footer mobile</h1>             */}
      <ScrollToTop />
      <main className="main">
        <Switch>
          <Route path={routes.home}><Home /></Route>          
          <Route path={routes.about}><About /></Route>
          <Route path={routes.contact}><Contact /></Route>
          <Route path={routes.implementations}><Implementations /></Route>
          <Route path={routes.jobs}><Jobs /></Route>
          <Route path={routes.maintenance}><Maintenance /></Route>
          <Route path={routes.privacyPolicy}><PrivacyPolicy /></Route>
          <Route path={routes.services}><Services /></Route>          
          <Route path={routes.software}><Software /></Route>
          <Route path={routes.solutions}><Solutions /></Route>
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
