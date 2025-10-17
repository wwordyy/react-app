import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import './ProductCard.css'

function ProductCard({id,title, price, image})
{
    const { addItem } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={image} alt="picture" />
            <p>Цена: {price} ₽</p>
            <h2>{title}</h2>

            <button onClick={() => {addItem({id, title, price}); alert("Товар добавлен")} }>
                Добавить в корзину
                
                </button>

        </div>

    );

}

export default ProductCard;