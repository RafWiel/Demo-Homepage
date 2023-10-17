//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';
import './assets/app.css';
import './assets/fonts.css';

import NavBar from './components/NavBar';
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

function App() {  
  return (
    <div className="App">
      <NavBar />       
      <main>
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
    </div>
  )
}

export default App
