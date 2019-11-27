import BaseService from './BaseService';

const URL_ROOMS = 'http://formation-roomy.inow.fr/api/rooms';

class RoomService extends BaseService {

    getRooms() {
        return this.get(URL_ROOMS);
    }

    getRoomById(id) {
        return this.get(`${URL_ROOMS}/${id}`);
    }
}

export default RoomService;