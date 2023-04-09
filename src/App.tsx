import './styles.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL
import { City } from './types'
import Cities from './components/Cities'
import CityDetails from './components/CityDetails'

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
      <Router>
        <Routes>
          <Route path='/' element={<Cities cities={cities} />} />
          <Route path='/city/:id' element={<CityDetails cities={cities} />} />
          <Route path='*' element={<h1>404 error</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
