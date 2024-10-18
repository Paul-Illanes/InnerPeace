import React from 'react';
import { Link } from 'react-router-dom';
import  "./navbar.css";
import { Button } from '@mui/material';

const navbar = () => {
  return (
    <>
      <nav className=" flex fixed items-center justify-between w-full z-20 shadow-lg shadow-slate-200  pl-8 pr-8 bg-slate-50 " aria-label='Site-nav'>
        <div className="logo ml-8 lg:text-4xl sm:text-2xl font-mono font-bold">
          <Link to="/">
          <h1 >InnerPeace</h1>
          </Link>
        </div>
        <div className=" m-7 flex justify-center flex-wrap item-center">
          <ul className='flex font-semibold text-2xl space-x-7 '>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Chakras">Chakras</Link>
            </li>
            <li>
              <Link to="/Meditation">Meditacion</Link>
            </li>
            <li>
              <Link to="/Yoga">Yoga</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default navbar;
