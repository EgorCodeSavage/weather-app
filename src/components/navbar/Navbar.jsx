import { useState } from "react"

import logo from "./../../img/weather_logo.png"

import "./style.scss"

const NavBar = () => {
    
    const [time, setTime] = useState('')

    setInterval(() => {
        const data = new Date()
        let hours = data.getHours();
        let minutes = data.getMinutes();
        if (minutes < 10) {
            setTime(`${hours}:0${minutes}`)
        } else {
            setTime(`${hours}:${minutes}`)
        }
        
    });
   
    return ( 
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="weather_logo" />
                <div className="weather_nav_title">WeatherApp</div>
                <div className="weather_nav_time">{time}<span> pm</span></div>
            </div>
        </div>
     );
}
 
export default NavBar;