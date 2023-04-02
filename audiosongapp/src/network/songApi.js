import axios from 'axios'

const getSong = () => {
    return axios.get('http://localhost:5000/asw/v1/')
}


export default getSong