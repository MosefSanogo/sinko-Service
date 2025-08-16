import { useRef } from 'react';
import './App.css'
import NavBar from './component/NavBar/NavBar';
import Card from './component/Card/Card';
import Footer from './component/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Immobilier from './pages/immobilier/Immobilier';
import Nettoyage from './pages/nettoyage/Nettoyage';
import Prestation from './pages/prestation/Prestation';
import Acceuil from './pages/acceuil/Acceuil';

function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projetRef = useRef(null);
  const formationRef = useRef(null);
  const contactRef = useRef(null);

  return (
      <BrowserRouter basename="/sinko-Service">
      
      <NavBar
        refs={{
          home: homeRef,
          skill: skillRef,
          project: projetRef,
          formation: formationRef,
          contact: contactRef
        }}
      />
      <Routes>
        <Route path="/" element={<Acceuil/>} />
        <Route path="/immobilier" element={<Immobilier />} />
        <Route path="/nettoyage" element={<Nettoyage />} />
        <Route path="/prestation" element={<Prestation />} />
      </Routes>
      
      <Footer />
      
      </BrowserRouter>
  )
}

export default App
