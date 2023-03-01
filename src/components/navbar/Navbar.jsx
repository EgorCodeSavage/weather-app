import { useState } from "react"
import { NavLink } from "react-router-dom"

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
                <NavLink to="/weather-app" className="weather_nav_title">
                    <div >WeatherApp</div>
                </NavLink>
                <div className="weather_nav_time">{time}<span> pm</span></div>
            </div>
            <div className="weather_nav_items">
                <NavLink to="/weather-app" className='nav_link'>
                    <div className="is_active">Today</div>
                </NavLink>
                <div className="">16 days Forecast</div>
                <div className="">Monthlu Forecast</div>
            </div>
        </div>
     );
}
 
export default NavBar;