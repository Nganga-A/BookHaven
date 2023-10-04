import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';

function App() {
  return (

    <div>

  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/Signup' element={<Signup/>}></Route>
      </Routes>
  </BrowserRouter>

  
  </div>
    
    
       
     
    
  );
}

export default App;
