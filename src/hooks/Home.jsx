import React, { useEffect, useState } from 'react'
import NavBar from "./NavBar"
import axios from 'axios'
import MeidaCard from './MediaCard'

export default function Home() {

    const [dailyImg,setDailyImg] = useState({})

    useEffect(()=>{
        (async()=>{
            const dailyImg = await axios.get("https://api.nasa.gov/planetary/apod?api_key=1RqD2xxzUznX1WlwlrfNAsgQ87QybcJ6m0KGMXaU")
            // console.log(dailyImg.data.hdurl)
            // console.log(dailyImg.data.title)
            // console.log(dailyImg.data.explanation)
            setDailyImg(dailyImg.data)
        }) ()
    },[])

    return(
        <div><MeidaCard data={dailyImg}/></div>
    )

}