const mongoose = require("mongoose")

const Schema = mongoose.Schema
const favoritesSchema = new Schema({
    title:String,
    image:String,
    description: String,
    inFavorite : Boolean
})

const Favorites = mongoose.model("Favorites", favoritesSchema)

module.exports = Favorites 