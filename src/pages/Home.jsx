import NavBar from "../components/navbar/Navbar";

const Home = () => {
    return ( 
        <div className="container">
            <NavBar />
            <div className="weather_inner"></div>
            <div className="weather_hours"></div>
        </div>
     );
}
 
export default Home;