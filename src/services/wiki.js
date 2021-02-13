import axios from 'axios';


const WikiSearch = axios.create({
    baseURL: "https://en.wikipedia.org/w/api.php",
    params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
    }
});

export default WikiSearch;