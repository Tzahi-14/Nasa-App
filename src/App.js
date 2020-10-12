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

      <NavBar />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/search" render={() => <Search />} />
      <Route exact path="/favourites" render={() => <Favourites />} />

    </Router>
  )

}



