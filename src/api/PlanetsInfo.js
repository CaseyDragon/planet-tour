import axios from 'axios';

export default axios.create({
    url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', 
    headers: {
        'X-RapidAPI-Key': '2d1bb0d53fmsh47470deb9c91173p143b5bjsn9620ab6bef18',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
});