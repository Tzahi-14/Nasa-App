import React, { useEffect, useState } from 'react'

export default function Search(props) {

    const [stars,setStars] = useState('')

    const inputHandlerClick = (e)=>{
        setStars(e.target.value)
    }

    const buttonHandler = ()=>{
        props.searchData(stars)
    }

    return(
        <div>
            <input type="text" placeholder="What you looking for?" name="stars" onChange={inputHandlerClick}/>
            <button onClick={buttonHandler}> Search</button>
        </div>
    )
}
