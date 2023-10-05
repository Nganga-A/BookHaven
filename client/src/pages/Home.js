import React from 'react';
// import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'; // Adjust the path as needed



const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home