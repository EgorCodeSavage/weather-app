import "./style.scss"

import locationLogo from "./../../img/location.png"
import temperatureLogo from "./../../img/temperature.png"
import weather02 from "./../../img/weather02.png"
import searchLocation from "./../../img/search_location.png"
const WeatherInner = () => {
    return ( 
        <div className="weather_inner_container">
            <input type="text" placeholder="Search location..." />
            <img src={searchLocation} alt="search_location" />
            <div className="weather_inner_info">
                <div className="weather_inner_location">Burdwan<img src={locationLogo} alt="location"/></div>
                <div className="weather_inner_weather">
                    <img src={temperatureLogo} alt="temperature" />
                    <div className="current_temp"><span>27</span>°C</div>
                    <img src={weather02} alt="cloudly" />
                </div>
                <div className="weather_inner_date">Feb 26, Sun</div>
                <div className="weather_inner_stats">
                    <div className="stat01">
                        <div>HUMIDITY</div>
                        <div>99%</div>
                    </div>
                    <div className="stat02">
                        <div>VISIBILITY</div>
                        <div>8km</div>
                    </div>
                    <div className="stat03">
                        <div>AIR PRESSURE</div>
                        <div>1005hPa</div>
                    </div>
                    <div className="stat04">
                        <div>WIND</div>
                        <div>2mph</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WeatherInner;