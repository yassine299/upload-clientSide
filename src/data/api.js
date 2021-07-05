import axios from "axios"

const apiUrl = "https://uploadfilenodejs.herokuapp.com/api/";

export const singleFileUpload = async (data) => {
    try {
        await axios.post(apiUrl + "singlefile", data)
    }
    catch (err) {
        throw err;
    }
}

//multip files upload
export const multipfileUpload = async (data) => {
    try {
        await axios.post(apiUrl + "multipfiles", data);
    }
    catch (err) {
        throw err
    }
}

export const getsingleFiles = async () => {
    try {
        const { data } = await axios.get(apiUrl + "getSingleFiles");
        return data;
    }
    catch (err) {
        throw err;
    }
}

export const getMultipleFiles = async () => {
    try{
        const {data} = await axios.get(apiUrl + 'getMultipleFiles');
        return data;
    }catch(error){
        throw error;
    }
}