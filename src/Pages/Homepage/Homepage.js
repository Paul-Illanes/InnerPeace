import React from 'react';
import Front from '../../components/FrontPage/Front';
import Features from '../../components/Features/Features';
import heromedi from "../../animation/heromedi.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import "./Homepage.css"
import Chakras from '../../animation/chakra.json';


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
         <h1>Meditation</h1>
          has been practiced for thousands of years. Meditation originally was
          meant to help deepen understanding of the sacred and mystical forces
          of life. These days, meditation is commonly used for relaxation and 
         stress relief
         <Link to="/Meditation"><button className="getthereBtn">
          Get there
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
         are thought to be spinning disks of energy that should stay “open” and aligned for optimal emotional and physical well-being.Yoga is one of the most basic ways to balance each chakra because it creates alignment in the physical body. Balancing and stabilizing your physical body through asana (yoga posture) practice also rebalances your subtle body.
         <br/>
         <Link to="/Chakras"><button className="getthereBtn">
          Get there
        </button></Link>
        <br/>
        <br/>
        </div>
        
      </div>

    </div>
   
  )
}

export default Homepage
