import axios from 'axios';

const URL_ROOMS = 'http://formation-roomy.inow.fr/api/rooms';

class RoomService {

    getRooms() {
        return axios.get(URL_ROOMS);
    }
}

export default RoomService;