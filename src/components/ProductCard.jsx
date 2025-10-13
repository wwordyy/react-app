import { useState } from "react";

function ProductCard({title, price, image})
{
    const [count, setCount] = useState(0);

    return (
        <div>
            <img src={image} alt="picture" />
            <p>Цена: {price} ₽</p>
            <h2>{title}</h2>

            <button onClick={() => setCount(count+1)}>Добавить в корзину</button>
            <p>Количество: {count}</p>
        </div>

    );

}

export default ProductCard;