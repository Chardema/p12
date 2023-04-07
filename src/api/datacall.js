import axios from "axios";

const API_FILES = "./../api/data.js";

export async function getTodos() {
    try {
        const { data } = await axios.get(`${API_URL}todos`);
        return data;

    } catch (error) {
        console.log(error);
    }
}