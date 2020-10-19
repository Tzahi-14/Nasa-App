const express = require('express')
const router = express.Router()
const axios = require('axios')
const Favorites = require("../model/Favorites")

// router.get("/search/:searchBar", async function (req, res) {
//     const searchBar = req.params.searchBar
//     const getData = await axios.get(`https://images-api.nasa.gov/search?q=${searchBar}&media_type=image`)
//     const data = getData.data.collection.items.map(item =>
//         ({
//             title: item.data[0].title,
//             image: item.links[0].href,
//         })
//     )
//     res.send(data)
// })

// // router.get('/home', async function(req,res){
// //     const getDailyImg = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=1RqD2xxzUznX1WlwlrfNAsgQ87QybcJ6m0KGMXaU`)
// //     const filterImg = {
// //         hdurl: getDailyImg.data.hdurl,
// //         title: getDailyImg.data.title,
// //         explanation:getDailyImg.data.explanation
// //     }
// //     res.send(filterImg)
// // })
router.get('/images', async function(req,res){
    const getFavorites = await Favorites.find({})
    res.send(getFavorites)
})


router.post('/favorites',async function(req,res){
    const data = req.body
    const addToFavorites = new Favorites(data) 
    await addToFavorites.save()
    res.send(addToFavorites)
})

router.delete('/favorites/:id', async function(req,res){
    const idToDelete = req.params.id  
    const deleteFromFavorite = await Favorites.findOneAndDelete({_id:idToDelete })
    res.send(deleteFromFavorite)
})

module.exports = router
