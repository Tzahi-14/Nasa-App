import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from './Home'

export default function MediaCard(props) {

    console.log(useLocation().pathname)
    const locationPath = useLocation().pathname

    if (locationPath === "/home") {
        return (
            <div className={locationPath}>
                <div>Daily image title: {props.data.title}</div>
                <div><img src={props.data.hdurl} alt="" /></div>
                <div>{props.data.explanation}</div>
            </div>
        )
    }

    else if(locationPath=== "/search"){
        return (
            <div className={locationPath}>
                <div>{props.data.title}</div>
                <img src={props.data.image} alt="" />
                <button >Like</button>
            </div>
        )
    }

    else if(locationPath=== "/favourites"){

    }


    // const location = useLocation().pathname
    //const class = location.includes('home') ? 'home' : 'search'
   
}
