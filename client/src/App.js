import './App.css';
import Signup from './components/signup';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path= '/signup' element={<signup/>}></Route>
          </Routes>
      
      </BrowserRouter>

</div>

  );
}

export default App;
