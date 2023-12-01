import { Route, Routes } from 'react-router'
import './App.css'

import Mainpage from './Page/Mainpagee'
import Cartpage from './Page/Cartpagee' 
import { useEffect } from 'react';
import { GetAllproducts } from './Addapi/Apii';
import { AppState } from './ContextApi/Contextapi';

function App() {
  const {setinfo}=AppState();
  useEffect(() => {
    GetAllproducts()
      .then((data) => {
        setinfo(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);
  

  

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Mainpage />} />
        <Route path='/cart/:id' element={<Cartpage  />} />  
      </Routes>
    </div>
  )
}

export default App
