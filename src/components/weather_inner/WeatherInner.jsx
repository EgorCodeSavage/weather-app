import "./style.scss"

import locationLogo from "./../../img/location.png"
import temperatureLogo from "./../../img/temperature.png"
import weather05 from "./../../img/weather05.png"
import weather02 from "./../../img/weather02.png"

import searchLocation from "./../../img/search_location.png"
import { cities } from "../../helpers/countryList"

import { useEffect, useState } from "react"





const WeatherInner = () => {

    const myKey = "a2d6f8dc708abc3fda57ac0c1b199b66";
    const [info, setInfo] = useState([]);
    const [weathers, setWeathers] = useState([]);
    const [main, setMain] = useState([]);
    const [wind, setWind] = useState([]);




    

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?${cities[0].cordinates}&appid=${myKey}&units=metric`).then(res => res.json()).then(json => {
            setInfo(json)
            setWeathers(json.weather)
            setMain(json.main)
            setWind(json.wind)
        }).catch(err => {
            console.log(err);
            alert("Ошибка при загрузке данных!")
        })
    }, [])

    console.log(weathers);



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
                    <div className="current_temp"><span>{Math.round(main.temp)}</span>°C</div>
                    <img src={weather05} alt="" />   {/*    ДОДЕЛАТЬ КАРТИНКУ ПО ПОГОДЕ     */}
                </div>
                <div className="weather_inner_date"></div>
                <div className="weather_inner_stats">
                    <div className="stat01">
                        <div className="title">HUMIDITY</div>
                        <div>{main.humidity}%</div>
                    </div>
                    <div className="stat02">
                        <div className="title">VISIBILITY</div>
                        <div>{info.visibility / 1000}km</div>
                    </div>
                    <div className="stat03">
                        <div className="title">AIR PRESSURE</div>
                        <div>1005hPa</div>
                    </div>
                    <div className="stat04">
                        <div className="title">WIND</div>
                        <div>{wind.speed}mph</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WeatherInner;