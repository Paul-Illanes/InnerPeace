import React from 'react';
import Front from '../../components/FrontPage/Front';
import Features from '../../components/Features/Features';
import heromedi from "../../animation/heromedi.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import "./Homepage.css"
import Chakras from '../../animation/chakra.json';
import Chatbot from '../../components/Chatbot/Chatbot';


const Homepage = () => {
  return (
    <div className=''>
    <div>
      <Front/>
    </div>
    <br/>
    <br/>
    <Features/>
    <br/>
    <br/>
    <div className=" second">
        <div className="medi_animaiton">
          <Lottie animationData={heromedi} style={{ size: 1000 }} />
        </div>
        <div className="text ml-8">
         <h1>Meditacion</h1>
        <p>Se practica desde hace miles de años. Originalmente, la meditación
        ayudar a profundizar en la comprensión de las fuerzas sagradas y místicas
        de la vida. Hoy en día, la meditación se utiliza para relajarse y aliviar el estrés</p>
        <br/>
         <Link to="/Meditation"><button className="getthereBtn">
          Ir ahi
        </button></Link>
        
        </div>
      </div>
   
      <div className="third ">
        <br/>
        <br/>
        <div className="medi_animaiton">
          <Lottie animationData={Chakras} style={{ size: 1000 }} />
        </div>
        <div className="text ml-5 ">
         <h1>Chakras</h1>
         Se cree que los chakras son discos giratorios de energía que deben permanecer "abiertos" y alineados para un bienestar emocional y físico óptimo. El yoga es una de las formas más básicas de equilibrar cada chakra porque crea alineación en el cuerpo físico. Equilibrar y estabilizar el cuerpo físico mediante la práctica de asanas (posturas de yoga) también reequilibra el cuerpo sutil.
         <br/>
         <Link to="/Chakras"><button className="getthereBtn">
          Ir ahi
        </button></Link>
        <br/>
        <br/>
        </div>
        
      </div>
      <div >
        <Chatbot />
      </div>
    

    </div>
   
  )
}

export default Homepage
