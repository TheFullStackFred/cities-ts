/* <h6 className='card-subtitle mb-2 text-muted'>
Population {city.population}
</h6>
<p className='card-text'>{city.id}</p> */
import { useParams } from 'react-router-dom'
import Cities from './Cities'

const CityDetails = ({ cities }: React.ComponentProps<typeof Cities>) => {
  const { id } = useParams()
  return <div>CityDetails</div>
}

export default CityDetails
