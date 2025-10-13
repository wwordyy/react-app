import './components/ProductCard'
import './App.css'
import ProductCard from './components/ProductCard';
import pathProduct1 from './assets/product-1.png';
import pathProduct2 from './assets/product-2.png';
import pathProduct3 from './assets/product-3.png';

function App() {
  return (
    <div>
    <ProductCard title={"Первый товар"} price={245} image={pathProduct1}/>
    <ProductCard title={"Второй товар"} price={333} image={pathProduct2}/>
     <ProductCard title={"Третий товар"} price={777} image={pathProduct3}/>
    
    </div>
    

  );
}

export default App
