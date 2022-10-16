import {useEffect} from 'react';
import './App.css';
import "animate.css/animate.min.css";
import AOS from 'aos';
import FirstWarOfIndependence from './components/FirstWarOfIndependence';
import SecondComponent from './components/SecondComponent';
function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div>
      Timeline of Indian Independence Movement
      <FirstWarOfIndependence />
      <SecondComponent />
    </div>
  );
}

export default App;
