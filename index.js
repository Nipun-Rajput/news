const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const axios = require('axios')
const port = 3000
const API_KEY = process.env.API_KEY
async function fetchnews() {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-12-13&sortBy=publishedAt&apiKey=${API_KEY}`)
        // console.log(response);
        
        
        let data = await response.data;
        return data
}
app.get('/', async (req, res) => {
    let data = await fetchnews()
    // console.log(data)

  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})