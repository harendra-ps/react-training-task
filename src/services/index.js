import axios from 'axios';
// import _ from 'lodash';


export default function fireAjax (method, URL, data) {
    if(method === 'POST') {
        return axios.post( URL, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } 
    else if (method === 'GET') {
        return axios.get( URL, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}