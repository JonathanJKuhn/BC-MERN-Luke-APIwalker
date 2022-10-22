import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planets = () => {
    const { id } = useParams()
    const [planet, setPlanet] = useState({})
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{setPlanet(response.data)})
    }, [id])

    return (
        <div>
            <h2 className='mb-4 display-3'>{planet.name}</h2>
            <p><strong>climate: </strong>{planet.climate}</p>
            <p><strong>Terrain: </strong>{planet.terrain}</p>
            <p><strong>Surface Water: </strong>{planet.surface_water}</p>
            <p><strong>Population: </strong>{planet.population}</p>
        </div>
    )
}

export default Planets