import { City } from '../types'

type CitiesProps = {
  data: City[]
}

const Cities = ({ data }: CitiesProps) => {
  return (
    <>
      {data?.map((city) => (
        <div key={city.id} className='card p-1 m-1 bg-light'>
          <div className='card-body'>
            <h5 className='card-title'>Name: {city.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              Population {city.population}
            </h6>
            <p className='card-text'>{city.id}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cities
