import axios from "axios"
import { dialogStore } from "../store"

export default class DialogService {

    static async getDialogs() {
        const response = await axios.get('http://localhost:3000/dialogsStore')
        return response
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost:3000/dialogsStore`)
        return response
    }

}