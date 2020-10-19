import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function MediaCard(props) {

    console.log(useLocation().pathname)
    const locationPath = useLocation().pathname

    if (locationPath === "/home") {
        return (
            <div className={locationPath}>
                {props.data.media_type==="video"? <div>
                    <h1>Daily image: {props.data.title}</h1>
                    <div><iframe src={props.data.url} alt="" /></div>
                    <div>{props.data.explanation}</div>
                    </div>
                    : 
                    <div>
                    <h1>Daily image :{props.data.title}</h1>
                    <div><img src={props.data.url} alt="" /></div>
                    <div>{props.data.explanation}</div>
                    </div>}
            </div>
        )
    }

    else if (locationPath === "/search") {
        return (
            <div className={locationPath}>
                <div>{props.data.title}</div>
                <img src={props.data.image} alt="" />
                <Button style={{margin:"1rem"}} variant="contained" color="primary" onClick={() => props.addToFavorite(props.data)}><ThumbUpIcon/> </Button>
            </div>
        )
    }

    else if (locationPath === "/favourites") {
       return(
        <div className={locationPath}>
            <div><img src={props.data.image} alt=""/></div>
            <div>Title: {props.data.title}</div> 
            Description: {props.data.description}
       {/* <Button style={{margin:"1rem"}} variant="contained" color="primary" ><ThumbUpIcon/> </Button> */}
       <Button style={{margin:"1rem"}} variant="contained" color="primary" onClick={() => props.removeFromFavorites(props.data)}><ThumbDownIcon/> </Button>
       {/* <button style={{margin:"1rem"}} variant="contained" color="primary" onClick={() => props.removeFromFavorites(props.data)}>unlike </button> */}
        </div>
       )
    }


    // const location = useLocation().pathname
    //const class = location.includes('home') ? 'home' : 'search'

}

    // export default MediaCard;
