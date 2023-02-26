import NavBar from "../components/navbar/Navbar";
import WeatherInner from "../components/weather_inner/WeatherInner";

const Home = () => {
    return ( 
        <div className="container">
            <NavBar />
            <WeatherInner />
            <div className="weather_hours"></div>
        </div>
     );
}
 
export default Home;