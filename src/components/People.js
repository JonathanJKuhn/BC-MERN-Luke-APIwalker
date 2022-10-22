import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function People() {
    const { id } = useParams()
    const [person, setPerson] = useState({})
    useEffect(() => {
        // console.log('inside useEffect')
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{setPerson(response.data)})
    }, [id])


    return (
        <div>
            <h2 className='mb-4 display-3'>{person.name}</h2>
            <p><strong>Height: </strong>{person.height} cm</p>
            <p><strong>Hair Color: </strong>{person.hair_color}</p>
            <p><strong>Eye Color: </strong>{person.eye_color}</p>
            <p><strong>Skin Color: </strong>{person.skin_color}</p>
        </div>
    )
}

export default People