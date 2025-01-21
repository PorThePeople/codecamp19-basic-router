import React from 'react';
import { Outlet } from 'react-router';
import MainNav from '../components/MainNav';

function Layout() {
  return (
    <div>
      <MainNav />
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
