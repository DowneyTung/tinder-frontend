import axios from 'axios';

const instance = axios.create({
 // baseURL: 'http://localhost:8001', //USE this when start node server from local host
 baseURL: 'https://tinder-backend1988.herokuapp.com/', //use this when start the node server from remote heroku
})

export default instance;