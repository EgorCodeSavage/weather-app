import "./style.scss"

import locationLogo from "./../../img/location.png"
import temperatureLogo from "./../../img/temperature.png"
import weather05 from "./../../img/weather05.png"
import weather02 from "./../../img/weather02.png"

import { cities } from "../../helpers/countryList"

import { useEffect, useState } from "react"

const WeatherInner = () => {

    const myKey = "a2d6f8dc708abc3fda57ac0c1b199b66";
    const [info, setInfo] = useState([]);
    const [weathers, setWeathers] = useState([]);
    const [main, setMain] = useState([]);
    const [wind, setWind] = useState([]);

    const [currentValue, setCurrentValue] = useState('');
    const [cordinate, setCordinate] = useState('');

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?${cordinate === '' ? "lat=53.429&lon=14.553" : cordinate}&appid=${myKey}&units=metric`).then(res => res.json()).then(json => {
            setInfo(json)
            setWeathers(json.weather[0].main)
            setMain(json.main)
            setWind(json.wind)
        }).catch(err => {
            console.log(err);
            alert("Ошибка при загрузке данных!")
        })
    }, [cordinate])

    const weatherIcon = () => {
        if (weathers === "Clear") {
            return weather05
        } else if (weathers === "Clouds") {
            return weather02
        }
    }
    
    const getCurrentValue = (event) => {
        setCurrentValue(event.target.value)
    }

    const onClickValue = () => {
        cities.forEach(obj => {
            currentValue.toLocaleLowerCase() === obj.city.toLocaleLowerCase() && (
                setCordinate(obj.cordinates)
            )
        });
    }
    return ( 
        <div className="weather_inner_container">
            <div className="weather_inner_search">
                <input value={currentValue} onChange={getCurrentValue} type="text" placeholder="Search location..." />
                <button onClick={onClickValue} className="search_button">Search</button>
            </div>
            <div className="weather_inner_info">
                <div className="weather_inner_location">{info.name}<img src={locationLogo} alt="location"/></div>
                <div className="weather_inner_weather">
                    <img src={temperatureLogo} alt="temperature" />
                    <div className="current_temp"><span>{Math.round(main.temp)}</span>°C</div>
                    <img src={weatherIcon()} alt="" />
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
                        <div>{wind.speed}m/s</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WeatherInner;