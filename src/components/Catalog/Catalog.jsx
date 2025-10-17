import ProductCard from '../ProductCart/ProductCard';
import pathProduct1 from '../../assets/product-1.jpg';
import pathProduct2 from '../../assets/product-2.png';
import pathProduct3 from '../../assets/product-3.png';
import pathProduct4 from '../../assets/product-4.png';
import pathProduct5 from '../../assets/product-5.jpg';
import pathProduct6 from '../../assets/product-6.jpg';
import Menu from '../Menu/Menu'
import './Catalog.css'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';



function Catalog () {

    const { theme} = useContext(ThemeContext)

    return (
        <div>
            
            <Menu/>

            <div className="catalog">

                <h1>Каталог</h1>

            <div className='product-list'>
                <ProductCard id={1} title={"Первый товар"} price={133333} image={pathProduct1}/>
                <ProductCard id={2} title={"Второй товар"} price={250000} image={pathProduct2}/>
                <ProductCard id={3} title={"Третий товар"} price={159999} image={pathProduct3}/>
                <ProductCard id={1} title={"Четвертый товар"} price={69999} image={pathProduct4}/>
                <ProductCard id={2} title={"Пятый товар"} price={58800} image={pathProduct5}/>
                <ProductCard id={3} title={"Шестой товар"} price={10000000} image={pathProduct6}/>
            </div>
            
            </div>

    </div>

    );

}


export default Catalog;