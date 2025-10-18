import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu'
import Login from './components/Auth/Login'
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import { ThemeContext } from './contexts/ThemeContext';
import { useContext, useEffect } from 'react';

function App() {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);


  return (
    
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path="/menu" element = {<Menu/>}/>
          <Route path="/catalog" element = {<Catalog/>}/>
          <Route path="/cart" element = {<Cart/>}/>


        </Routes>

      </BrowserRouter>
    </div>
   
    

  );
}

export default App
