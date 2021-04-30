import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Key= 'AIzaSyB1aCjNpJZixefMiJQo6coG-x6z8wjD9Kg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: Key
    }
})