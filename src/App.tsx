import { useState, useEffect } from 'react'
import './styles.css'
import axios from 'axios'

type City = {
  name: string
  population: number
  id: number
}

const App = () => {
  const [cities, setCities] = useState(null)
  console.log(cities)
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('https://avancera.app/cities')
        setCities(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCities()
  }, [])

  return (
    <div className='d-flex justify-content-center'>
      <h1>Cities with Typescript</h1>
    </div>
  )
}

export default App
