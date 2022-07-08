import '../country-item/country-item.style.css'

const CountryItem = ({ cityData }) => {
  const { city, time } = cityData
  return (
      <div className="countryItem-container">
        <div className="countryItem_body-container">
          <h1>Time in {city}</h1>
          <h2>{time}</h2>
        </div>
      </div>
  )
}

export default CountryItem
