import React, { useState } from 'react'
import { Button,Input } from '@material-ui/core';

export default function Search(props) {

    const [stars,setStars] = useState('')

    const inputHandlerClick = (e)=>{
        setStars(e.target.value)
    }

    const buttonHandler = ()=>{
        props.searchData(stars)
    }

    return(
        <div id="search-bar">
            <Input type="text" placeholder="What are you looking for?" name="stars" onChange={inputHandlerClick}/>
            <Button onClick={buttonHandler} style={{margin:"1rem"}} variant="contained" color="primary"> Search</Button>
        </div>
    )
}
