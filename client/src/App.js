import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <div>

  <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Login/>}></Route>

      </Routes>
  </BrowserRouter>

  
  </div>
    
    
       
     
    
  );
}

export default App;
