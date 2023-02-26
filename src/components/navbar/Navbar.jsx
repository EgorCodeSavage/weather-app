import logo from "./../../img/weather_logo.png"
import "./style.scss"

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="weather_logo" />
                <div className="weather_nav_title">WeatherApp</div>
                <div className="weather_nav_time">22:46 <span>pm</span></div>
            </div>
            <div className="weather_nav_items">
                <div className="is_active">Today</div>
                <div className="">Tomorrow</div>
                <div className="">Monthlu Forecast</div>
            </div>
        </div>
     );
}
 
export default NavBar;