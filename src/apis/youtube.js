import axios from 'axios';

const KEY = 'AIzaSyCtNh-b3WTFK4BQOXPwf8mpC4iUK1dOdcE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})