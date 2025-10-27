import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Header() {
    const [theme, setTheme] = useState("light");
    const navigate = useNavigate();
    useEffect(() => {
        if(theme == "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggle = () => {
        setTheme(theme == "light" ? "dark" : "light");
    };

   

    return (

        <header className = 'header'>
            <div className="header_1">
                <h1>Добро пожаловать в <b>Guess The Country!</b></h1>
                <p>Пожалуйста, выберите режим игры</p>

            <nav className="nav">
                <a href = "/leaderboard" >Leaderboard</a>
                <a href = "/profile">Profile</a>
            
        
        <button onClick = {toggle} className="toggle">
            {theme == "light" ? "Night" : "Light"}
        </button>

        <button onClick = {() => navigate("/profile")} className="toggle_2">
            Profile
        </button>

        <button onClick = {() => navigate("/leaderboard")} className="toggle_3">
            Leaderboard
        </button>
      </nav>
     </div>
    </header>
    );
}

export default Header;