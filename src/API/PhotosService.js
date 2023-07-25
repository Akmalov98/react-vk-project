import axios from "axios"

export default class PhotosService {

    static async getPhotos() {
        const response = await axios.get('http://localhost:3000/photosStore')
        return response
    }

}