import { useParams } from 'react-router-dom'
import Cities from './Cities'

const CityDetails = ({ cities }: React.ComponentProps<typeof Cities>) => {
  const { name } = useParams<{ name: string }>()

  return (
    <div>
      <h1>City Details</h1>
    </div>
  )
}

export default CityDetails
