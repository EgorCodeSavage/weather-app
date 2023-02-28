import "./style.scss"

import locationLogo from "./../../img/location.png"
import temperatureLogo from "./../../img/temperature.png"
import weather02 from "./../../img/weather02.png"
import searchLocation from "./../../img/search_location.png"
import { useEffect, useState } from "react"




const WeatherInner = () => {

    const myKey = "a2d6f8dc708abc3fda57ac0c1b199b66";
    const [info, setInfo] = useState([]);


    

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=53.429&lon=14.553&appid=${myKey}&units=metric`).then(res => res.json()).then(json => {
            setInfo(json)
        }).catch(err => {
            console.log(err);
            alert("Ошибка при загрузке данных!")
        })
    }, [])

    return ( 
        <div className="weather_inner_container">
            <div className="weather_inner_search">
                <input type="text" placeholder="Search location..." />
                <img src={searchLocation} alt="search_location" />
            </div>
            <div className="weather_inner_info">
                <div className="weather_inner_location">{info.name}<img src={locationLogo} alt="location"/></div>
                <div className="weather_inner_weather">
                    <img src={temperatureLogo} alt="temperature" />
                    <div className="current_temp"><span>{}</span>°C</div>
                    <img src={weather02} alt="cloudly" />
                </div>
                <div className="weather_inner_date"></div>
                <div className="weather_inner_stats">
                    <div className="stat01">
                        <div className="title">HUMIDITY</div>
                        <div>%</div>
                    </div>
                    <div className="stat02">
                        <div className="title">VISIBILITY</div>
                        <div>km</div>
                    </div>
                    <div className="stat03">
                        <div className="title">AIR PRESSURE</div>
                        <div>1005hPa</div>
                    </div>
                    <div className="stat04">
                        <div className="title">WIND</div>
                        <div>mph</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WeatherInner;