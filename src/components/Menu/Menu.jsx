import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import './Menu.css'


function Menu()
{
    const  { toggleTheme } = useContext(ThemeContext);

    return (
        <div className="Menu">
            <nav>
                <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Меню</NavLink>
                <NavLink to="/catalog" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Каталог</NavLink>
                <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Корзина</NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Авторизация</NavLink>

                <button onClick={toggleTheme}>Переключить тему</button>
            </nav>
        </div>
    );


}

export default Menu;