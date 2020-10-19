import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'


export default function Favourites() {
    const [favorites,setFavorites] = useState([])

    const getData = async () =>{
        const getFavorites = await axios.get('http://localhost:4001/images')
        setFavorites(getFavorites.data)
    }

    const removeFromFavorites = async (data) => {
      await axios.delete(`http://localhost:4001/favorites/${data._id}`)
      const indexToDelete = favorites.findIndex(i=>i._id===data._id)
      const updateList = [...favorites]
      updateList.splice(indexToDelete,1)
      setFavorites(updateList)
      alert("Removed from Favorites")
  }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div>
        <h1>Favorites</h1>
        {favorites.map((a) => (
          <div>
            <MediaCard key={a._id} check={favorites} data={a} removeFromFavorites={removeFromFavorites} />
          </div>
        ))}
  
      </div>
    )

}