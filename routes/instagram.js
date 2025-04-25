const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const RAPIDAPI_HOST = 'instagram-scrapper-stble-api.p.rapidapi.com';
const RAPIDAPI_URL = 'https://instagram-scraper-stable-api.p.rapidapi.com/get_account_info.php';

router.get('/username',async (req, res) =>{
    const {username} = req.params;

try{
    const response = await axios.get(RAPID_URL, {
        params:{usename},
        headers:{
            'x-rapidapi-key':process.env.RAPIDAPI_KEY,
            'x-rapidapi-host':RAPIDAPI_HOST,
        
        },
    });
const profileData = response.data;

res.status(200).json(profileData);
} catch(error){
    console.log('RapidAPI Error', error.message);
    res.status(500).json({error: "failed to fetch instagram data"});
}
});

module.exports = router;


