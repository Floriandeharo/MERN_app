import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import FormReunion from './FormReunion/FormReunion';
import Perso from './Perso/Perso';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // styles du thème Saga Blue
import 'primereact/resources/primereact.min.css'; // styles de PrimeReact
import 'primeicons/primeicons.css'; // styles des icônes PrimeIcons
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<FormReunion />} />
        <Route path="/Perso" element={<Perso />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
