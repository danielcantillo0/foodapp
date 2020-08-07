import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer flVEV7Jv7B7pxkEGa9E7cPl7JRNKe9NrV1VddagTBD6Vd5hfBC9tLJKSh2GLbHsk5VM1YmqCbqL6gaQ0eudTnjTm6mXSCiIQ0vAKBldsmtDzbwXFsr3LqG4M2TJrXnYx'
    }
});