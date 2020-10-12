import React, { useState } from "react"
import SearchBar from "./SearchBar"
import axios from "axios"
import MediaCard from "./MediaCard"

export default function Search() {

    const [starNGalx, setStarNGalx] = useState([])

    const searchData = async (str) => {
        const getSearch = await axios.get(`https://images-api.nasa.gov/search?q=${str}`)
        console.log(getSearch.data.collection.items[0])
        let arr = []
        let getData = getSearch.data.collection.items
        getData
        .filter(i => i.data[0].media_type === "image")
        .map(a =>
            arr.push({
                title: a.data[0].title,
                image: a.links[0].href,
            })
        )
        setStarNGalx(arr)
    }

    return (
        <div><SearchBar searchData={searchData} />

            {starNGalx.map((star, i) => {
                return <div><MediaCard key={i} data={star} /></div>
            }
            )}

        </div>

    )
}