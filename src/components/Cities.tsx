import { useNavigate } from 'react-router-dom'
import { City } from '../types'

type CitiesProps = {
  cities: City[]
}

const Cities = ({ cities }: CitiesProps) => {
  const navigate = useNavigate()

  const showCityDetails = (city: City) => {
    navigate(`/city/${city.name}`)
  }
  return (
    <>
      <h1>Cities with Typescript</h1>
      {cities?.map((city) => (
        <div
          onClick={() => showCityDetails(city)}
          key={city.id}
          className='card p-1 m-1 bg-light w-50 cities-card'
        >
          <div className='card-body d-flex align-items-center flex-column'>
            <h5 className='card-title'>Name: {city.name} </h5>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cities
