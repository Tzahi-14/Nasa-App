import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./hooks/Home"
import Favourites from "./hooks/Favourites"
import Search from "./hooks/Search"
import NavBar from "./hooks/NavBar"

export default function App() {

  useEffect(() => {

  }, [])

  return (
    <Router>
      <div id="nasa-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE7PoJXD1M67LI3xnO_4urMAZSW2E6s9Gjvg&usqp=CAU" height="150" width="150" /></div>
      <NavBar />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/search" render={() => <Search />} />
      <Route exact path="/favourites" render={() => <Favourites />} />

    </Router>
  )

}