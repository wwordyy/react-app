import { useContext } from "react";
import './Cart.css'
import { CartContext } from "../../contexts/CartContext";
import Menu from '../Menu/Menu'


function Cart() {

    const { items, removeItem } = useContext(CartContext)

     const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <Menu/>
            <div className="cart">
                
                <h2>Корзина</h2>

                {items.length === 0 && <p>Корзина пуста</p>}
                
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.title} - {item.price} ₽

                            <button onClick={() => removeItem(item.id)}>Удалить</button>
                        </li>

                    ))}

                </ul>

                   {items.length > 0 && (
                    <h3>Общая сумма: {totalPrice} ₽</h3>
                )}


            </div>
        </div>

    );

}

export default Cart;