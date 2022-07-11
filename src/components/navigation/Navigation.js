import React from 'react'
import {Link  } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="">
      <div className='flex justify-between px-52 py-10'>
        <div>
          <p className="capitalize font-black text-xl text-blue-800">Mito blog</p>
        </div>
        <div className='text-xl font-semibold'>
          <Link to="/" className='pr-10'>Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <hr className='border-2'/>
    </div>
  );
}
