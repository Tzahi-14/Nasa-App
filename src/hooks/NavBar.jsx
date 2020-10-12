import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default function NavBar(){

    return(
        <div>
            <Link to="/home" id="home">Home </Link>
            <Link to="/search" id="search">Search </Link>
            <Link to="/favourites" id="home">Favourites </Link>
        </div>
    )

}