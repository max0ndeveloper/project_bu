import CountryTime from '../../country-page/country-time/country-time.component';
import { useState, useEffect } from 'react';
import WeatherPage from '../../weather-page/weather.component'

const MainPage = () => {
  const [rostovState, setRostovState] = useState()
  const [sacState, setSacState] = useState()


  useEffect(() => {
    setInterval(() => {
      let moment = require('moment-timezone');
      let sacTime = moment().tz("America/Los_Angeles").format('h:mm:ss a');
      let rostovTime = moment.tz("Europe/Moscow").format('h:mm:ss a')

      setRostovState(rostovTime)
      setSacState(sacTime)
    }, 1000)
  })



  const country = [
    {
      id: 1,
      city: 'Rostov-on-Don',
      time: rostovState
    },
    {
      id: 2,
      city: 'Sacramento',
      time: sacState
    }
  ]

  return (
      <div>
        <CountryTime item={country}/>
        <WeatherPage/>
      </div>

  )
}

export default MainPage
