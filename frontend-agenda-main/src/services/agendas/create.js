import API_URL from './../../constants/api'

export default function createArea(area){
    return fetch(API_URL.AGENDA_POST,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(area)
    })
    .then(response => response.json())
}