import './App.css';
import Header from './components/Header.jsx';
import {
  BrowserRouter as Router} from "react-router-dom";

import { Footer } from './components/Footer';
import AnimateRoutes from './components/AnimateRoutes';

function App() {

  return (
    
      <div>

        <Router>
          <Header />
          {/* <Headder1 /> */}
          <AnimateRoutes />
          <Footer />
        </Router>
      </div>

   
  );
}

export default App;
