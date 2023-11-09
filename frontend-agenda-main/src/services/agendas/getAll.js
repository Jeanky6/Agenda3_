import API_URL from './../../constants/api'

export default function getAllAgendas(){
    return fetch(API_URL.AGENDA_GET).then((response)=> response.json())
}