import { useParams } from 'react-router-dom'
import Cities from './Cities'

const CityDetails = ({ cities }: React.ComponentProps<typeof Cities>) => {
  const { name } = useParams<{ name: string }>()

  const city = cities?.find((city) => city.name === name)
  return (
    <>
      <h1>City Details</h1>
      <div className='card p-1 m-1 bg-light w-70'>
        <div className='card-body d-flex align-items-center flex-column'>
          <h5 className='card-title'>Name: {city?.name} </h5>
          <h5 className='card-title'>Population: {city?.population} </h5>
          <h5 className='card-title'>Id: {city?.id} </h5>
        </div>
      </div>
    </>
  )
}

export default CityDetails
