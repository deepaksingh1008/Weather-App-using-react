import React, { useState } from 'react'
import serachIcon from './Assets/search.png'
import cloudIcon from './Assets/cloud.png'
import clear from './Assets/clear.png'
import drizzle from './Assets/drizzle.png'
import humidity from './Assets/humidity.png'
import rain from './Assets/rain.png'
import snow from './Assets/snow.png'
import wind from './Assets/wind.png'

const Weather = () => {
    const [city,setCity] = useState('');
    const [image,setImage] = useState(snow);
    const [temperature,setTemperature]= useState('-2');
    const [air,setAir]=useState('4.3');
    const [Humidity,setHumidity]=useState('12');
    const handleApiCall = async ()=>{
       try{
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=dc19b3ba8814eb283f53de10319094a7`);
        result = await result.json();
        const weather=result.weather[0].main;
        setAir(result.wind.speed);
        setHumidity(result.main.humidity);
        setTemperature(result.main.temp);
       
       if(weather==='Clouds' || weather==='Haze'){
            setImage(cloudIcon);
       }
       else if(weather==='Clear'){
        setImage(clear)
       }
       else if(weather==='Snow'){
        setImage(snow)
       } 
       else if(weather==="Rain" || weather==="Partly clouds") {
        setImage(rain);
       }
       else{
        setImage(drizzle);
       }
      //  console.log(image)
      //  console.log(weather)
      }
      catch(error){
        alert("enter correct city")
      }
    }
  return (
        <div className="card">
          <div className='input'>
              <div>
                  <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='enter city'/>
              </div>
              <div className='search'>
                <img src={serachIcon} alt=""  onClick={handleApiCall}/>
              </div>
          </div>
          <div className='weather-img'>
            <img src={image} alt="" />
          </div>
          <div className='temperature'>
             <p>{temperature}°C </p>
              <p>{city}</p>
          </div>
          <div className='temp'>
            <div className='humidity'>
                <div>
               <img src={humidity} alt="" />
               </div>

               <div className='sp1'>
                <span><b>{Humidity}%</b></span>
                <span>Humidity</span>
               </div>
            </div>
            <div className='wind'>
            <div>
               <img src={wind} alt="" />
               </div>

               <div className='sp2'>
                <span><b>{air}km/hr</b></span>
                <span>Wind</span>
               </div>
                 
            </div>
          </div>
       <p className="card-footer">Created By Deepak Singh</p>
</div>
  
  )
}

export default Weather