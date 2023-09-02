import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Home() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get("https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images");
    const cityList = response.data._embedded["ua:item"].slice(0, 20);
    setCities(cityList)
  }

  console.log(cities)

  const renderedCity = cities.map((city) => {
    return (
      <div key={city.ua_id} className='tour-item'>
        <h4 className='text-center'>{city.name}</h4>
        <img src={city._embedded["ua:images"].photos[0].image.mobile} style={{ width: "100%" }} alt='tour' />
        <h6 className='description text-center'>{city.full_name} / {city.continent}</h6>
      </div>
    )
  })


  return (
    <div>
      <h2 className='text-center p-5'>TOUR PLACES</h2>
      <div className='d-flex flex-wrap gap-5 justify-content-center'>
        {renderedCity}
      </div>
    </div>
  )
}

export default Home