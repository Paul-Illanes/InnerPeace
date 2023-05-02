import React from 'react';
import { Link } from 'react-router-dom';
import  "./navbar.css";
import { Button } from '@mui/material';

const navbar = () => {
  return (
    <>
      <nav className=" flex fixed items-center justify-between w-full z-20 shadow-lg shadow-slate-200  pl-8 pr-8 bg-slate-50 " aria-label='Site-nav'>
        <div className="logo ml-8 lg:text-4xl sm:text-2xl font-mono font-bold">
          <h1 >InnerPeace</h1>
        </div>
        <div className=" m-7 flex justify-center flex-wrap item-center">
          <ul className='flex font-semibold text-2xl space-x-7 '>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Chakras">Chakras</Link>
            </li>
            <li>
              <Link to="/Meditation">Meditation</Link>
            </li>
            <li>
              <Link to="/Yoga">Yoga</Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-between pr-8'>
        <li className='flex justify-end items-end'>
            <Link to="/ChatBot"><Button color='secondary' variant='contained' style={{padding: '12px'}}>
           Let's Chat 
        </Button></Link>
            </li>
        </div>
      </nav>
    </>
  )
}

export default navbar;
