import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css"
import { useLocation } from 'react-router-dom';

import profile from "../Assests/images/profile.png"


function Home() {

  const storedName = localStorage.getItem("Name");
    const storedUserName = localStorage.getItem("UserName");
    const storedEmail = localStorage.getItem("Email");


    const location = useLocation();
  const { selectedCategories } = location.state || {};

  const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

  const [weatherData, setWeatherData] = useState(null);
 // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiKey = 'a50e85abc8654079ba762953231910 ';
    const location = 'Pune,Maharashtra,India';
   
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
      .then(response => {
        setWeatherData(response.data);
        // setLoading(true);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        // setLoading(true);
      });
  }, []);



  return (
  <div>
      <div className='about_section'>
        <div className="profile">
          <img src= {profile}  alt="profile_photo" className="profile_photo" />
        </div>
        <div className='details'>
          <p className="details_name"> {storedName} </p>
          <p className="details_email"> {storedEmail} </p>
          <h1 className="details_uName"> {storedUserName} </h1>
        </div>
        <div className="Catergories_b"> 
                {selectedCategories && selectedCategories.length > 0 && selectedCategories.map((category, index) => (
            <h3 className="S_Catergories" key={index}>{category}</h3>))}

        </div>
       </div>


  <div>
  <div>
  <div className="weather-details">
             <div className='timezone'>
             <p>{currentDate}</p>
             <p>{currentTime}</p>
             </div>
             {/* {loading  &&  <p>Loading...</p>}      */}
         <div className='weatherzone'>
    <p> {weatherData.current.condition.text}</p>
          <p>{weatherData.current.temp_c}°C</p>
        <p>{weatherData.current.wind_kph} km/h</p>
    <p>{weatherData.current.humidity}%</p>
        </div>
     
    </div>             



      
   
    </div>
    </div>





  </div>
  
  )
}

export default Home