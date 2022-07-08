import CountryItem from '../country-item/country-item.component';
import './country-time.component.css'

const CountryTime = ({ item }) => {
  return (
      <div className="countryTime-container">
        {item.map((city) => (
          <CountryItem key={city.id} cityData={city}/>
        ))}
      </div>
  )
}

export default CountryTime
