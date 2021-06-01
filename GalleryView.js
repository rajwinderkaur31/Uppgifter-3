import Axios from 'axios'
import { useState } from 'react'
import  { StarWarsAPIService }  from '../../shared/api/service/StarWarsAPIService'

export const GalleryView = () => {
const [data, setData] = useState()

const fetchData = () => {
    Axios.get ('https://swapi.dev/api/pepole/1')
         .then(response => { setData(response) })
         .catch(error => { console.log(error)})
}


    const fetchData2 = async () => {
        try {
             const response = await Axios.get ('https://swapi.dev/api/pepole/1')
             setData(response.data)
        } catch (error) {
            console.log('error occured', error)
        }
    }

    return (
        <div>
            <button onClick={() => fetchData2()}>make api call</button>
            <button onClick={() => console.log(data)}>check my state</button>
            <h1>name: {data?.name}</h1> 
            <h1>hair_color: {data?.hair_color}</h1>
            <h1>gender: {data?.gender}</h1>
            <h1>height: {data?.height} cm</h1>
        </div>
    )
}
