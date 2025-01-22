import React from 'react';
import { Link, Route, Routes } from 'react-router';

function MainNav() {
  return (
    <div>
      <nav className="flex justify-between h-8 bg-green-200 px-4 items-center">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
          {/* <Link to="/recap">Recap</Link> */}
          {/* <Link to="/recap_usestate">Recap useState</Link> */}
          <Link to="/easyzustand">Easy Zustand</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/cart">My Cart</Link>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
