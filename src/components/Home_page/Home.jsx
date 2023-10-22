import React, { useEffect, useState } from "react";
import "./Home.css";
import { useLocation } from "react-router-dom";

import profile from "../Assests/images/profile.png";

import presuure_ig from "../Assests/images/presuure.png";
import humidity_ig from "../Assests/images/humidity.png";
import wind_ig from "../Assests/images/wind.png";

function Home() {

  // About Section 
  const storedName = localStorage.getItem("Name");
  const storedUserName = localStorage.getItem("UserName");
  const storedEmail = localStorage.getItem("Email");


  //  Weather Section    
  const location = useLocation();
  const { selectedCategories } = location.state || {};
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();  
  const [weather, setWeather] = useState(false);
  useEffect(() => {
    const apiKey = "987de39fe8924052ada80850232502 ";
    const location = "Delhi";

    const fetchWeather = async () => {
      await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);

  // News Section 

  const [news, setNews] = useState('')
  useEffect(()=>{
    const fetchNews = async()=>{
       await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-09&sortBy=publishedAt&apiKey=4ef9b38002184be3bf2ccb7b066196af")
            .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
    }
    fetchNews();
},[])

  return (
  <div>
          {/*   About Section  */}                 {/*   About Section  */}
      <div className="about_section">
          <div className="profile">
            <img src={profile} alt="profile_photo" className="profile_photo" />
          </div>
          <div className="details">
            <p className="details_name"> {storedName} </p>
            <p className="details_email"> {storedEmail} </p>
            <h1 className="details_uName"> {storedUserName} </h1>
          </div>
          <div className="Catergories_b">
              {selectedCategories && (selectedCategories.length > 0 ) && selectedCategories.map((category, index) => (
               <h3 className="S_Catergories" key={index}>{category}</h3> ))}
          </div>
      </div>

      {/*   Weather Section  */}                 {/*   Weather Section  */}  

              <div className="weather-details">
                    <div className="timezone">
                      <p>{currentDate}</p>
                      <p>{currentTime}</p>
              </div>

             {weather ? (
              <div className="weatherzone">
                {" "}
                <div>
                  <img src={weather.current.condition.icon} alt="logoo" />
                  <p id="p1">{weather.current.condition.text}</p>
                </div>
                <div class="vl"></div>
                <div>
                    <p> <span>{weather.current.temp_c}</span> <sup>&#176;C</sup></p>
                    <p>{" "}<img src={presuure_ig} alt="" />{" "} {weather.current.pressure_mb} mbar pressure</p>
                </div>
                <div class="vl"></div>
                <div>
                  <p><img src={wind_ig} alt="" /> {weather.current.wind_kph}kp/h wind </p>
                  <p> <img src={humidity_ig} alt="" /> {weather.current.humidity}{" "} humidity </p>
                </div>
              </div>
            ) : (<></> )}
          </div>
                <div className="news_section">
                <img src={news.urlToImage} alt="news_ig"/>
                </div>    
        </div>
     
  );
}

export default Home;
