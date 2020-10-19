import React, { useState } from "react"
import SearchBar from "./SearchBar"
import axios from "axios"
import MediaCard from "./MediaCard"

export default function Search() {

    const [starNGalx, setStarNGalx] = useState([])

    const searchData = async (str) => {
        const getSearch = await axios.get(`https://images-api.nasa.gov/search?q=${str}&media_type=image`)
        let arr = []
        let getData = getSearch.data.collection.items
        getData
            .map(a =>
                arr.push({
                    title: a.data[0].title,
                    image: a.links[0].href,
                    description: a.data[0].description
                })
            )
        setStarNGalx(arr)
    }

    const addToFavorite = async (data) =>{
        console.log(data)
        await axios.post('http://localhost:4001/favorites', data)
        alert("Add to Favorites")
    }

    return (
        <div><SearchBar searchData={searchData} />
            {starNGalx.map((star, i) => {
                return <div><MediaCard key={i} data={star} addToFavorite={addToFavorite} /></div>
            }
            )}
        </div>
    )
}