import axios from 'axios';

class BaseService {

    get(url) {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    post(url, obj) {
        return axios.post(url, obj).then(this.promiseResolve).catch(this.promiseReject);
    }

    put(url, obj) {
        return axios.put(url, obj).then(this.promiseResolve).catch(this.promiseReject);
    }

    delete(url) {
        return axios.delete(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    promiseResolve(resp) {
        if (resp.data === null) {
            return Promise.reject(`La demande n'est pas trouvable`);
        }
        return Promise.resolve(resp.data);
    }

    promiseReject(err) {
        console.warn(err.message);
        return Promise.reject(err.message);
    }
}


export default BaseService;