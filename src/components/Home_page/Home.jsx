// import React, { useEffect, useState } from 'react';
import "./Home.css"
import { useLocation } from 'react-router-dom';
// import ".//category_pg/category_page.css"
import profile from "../Assests/images/profile.png"
function Home() {

  const storedName = localStorage.getItem("Name");
    const storedUserName = localStorage.getItem("UserName");
    const storedEmail = localStorage.getItem("Email");


    const location = useLocation();
  const { selectedCategories } = location.state || {};
    // const storedMobile = localStorage.getItem("Mobile_no") ?? '';
    // const [selectedCategories, setSelectedCategories] = useState([]);

    // useEffect(() => {
    //   // Retrieve selected categories from localStorage
    //   const storedCategories = localStorage.getItem("selectedCategories");
  
    //   // Parse the JSON string back to an array
    //   if (storedCategories) {
    //     const categoriesArray = JSON.parse(storedCategories);
    //     setSelectedCategories(categoriesArray);
    //   }
    // }, []);

  // const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) ?? {});

  //   useEffect(()=>{
  //     const storedUserData = localStorage.getItem('userData');

  //     if (storedUserData) {
  //       setUserData(JSON.parse(storedUserData));
  //     }
  //   }, [])

  return (
    <div className='about_section'>
       <div>
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
  )
}

export default Home