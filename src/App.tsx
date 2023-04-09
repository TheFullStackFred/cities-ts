import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL
import { City } from './types'
import Cities from './components/Cities'

const App = () => {
  const [cities, setCities] = useState<City[]>([])

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get<City[]>(API_URL)
        const data = response.data
        setCities(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCities()
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h1>Cities with Typescript</h1>
      <Cities data={cities} />
    </div>
  )
}

export default App
