import { useNavigate } from "react-router-dom";
import './Login.css'

function login () {

    const navigate = useNavigate();
    

    function handleLogin()
    {
        const isAuth = true
        if (isAuth){
            navigate("/menu")
        }    
    }


    return (
        <div className="login-container">
        <h1>Добро пожаловать</h1>

        <form>
            <label>Логин</label>
            <input type="text" placeholder="Введите логин" min={2} />

           <label>Пароль</label>
            <input type="text" placeholder="Введите пароль" min={2}/>

            <button onClick={handleLogin}>Войти</button>

        </form>

        </div>

    );

}

export default login;