const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config(); // Load .env file
const domain = process.env.MOVIE_API_DOMAIN
const token = process.env.API_TOKEN
const api_key = process.env.API_KEY

const app = express()
app.use(cors());
app.get('/', (req, res)=>{
    res.send({
        "message": "This is the base route"
    })
})


app.get('/movies', async (req, res)=>{
    console.log('server was hit')
    const title = req.query.title;
    const options = {
        method: 'GET',
        url: `${domain}/search/movie?query=${title}&api_key=${api_key}&&include_adult=false&language=en-US&region=US&page=1`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      try {
        const response = await axios.request(options);
        //only show 10
        const movies = response.data.results.slice(0, 10).map(movie => ({
            movie_id: movie.id,
            title: movie.title,
            poster_image_url: `https://image.tmdb.org/t/p/w500${movie.poster_image_url}`,
            popularity_summary: `${movie.popularity} out of ${movie.vote_count}`
          }));

        res.status(200).json(movies);
      } catch (error) {
       console.log(error)
       res.status(500).send("Error fetching movies") 
      }
})

app.listen(process.env.PORT, ()=>{
    console.log("server running")
})
