import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'; 
import BookList from '../components/BookList/BookList'; 

const Home = () => {
  return (
    <main>
      <Header />
      <BookList />
      <Outlet /> 
    </main>
  );
}

export default Home;
