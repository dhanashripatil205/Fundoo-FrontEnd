import axios from 'axios'
const headerConfig = { headers: { Authorization : "Bearer" + " " + localStorage.getItem('token') } }

export const SignIn = async(obj) => {

    let response = await axios.post('http://localhost:5000/api/v1/users/login',obj)
    
    return response

}

export const SignUp = async(obj) => {

    let response = await axios.post('http://localhost:5000/api/v1/users',obj)
    return response
}

export const createNote = async(obj) => {

    let response = await axios.post('http://localhost:5000/api/v1/notes',obj,headerConfig)
    return response
}

export const getNotes = async(obj) => {

    let response = await axios.get('http://localhost:5000/api/v1/notes',headerConfig)
    return response
}

export const addArchive = async(id) => {

    let response = await axios.put(`http://localhost:5000/api/v1/notes/${id}/addNoteInArchive`, {},headerConfig)
    return response
}

export const removeArchive = async(id) => {

    let response = await axios.put(`http://localhost:5000/api/v1/notes/${id}/removeNoteFromArchive`,{},headerConfig)
    return response
}


export const updateColor = async(id,obj) => {

    let response = await axios.put(`http://localhost:5000/api/v1/notes/${id}/updateColor`,obj,headerConfig)
    return response
}


export const addNoteInTrash = async(id) => {

    let response = await axios.put(`http://localhost:5000/api/v1/notes/${id}/addNoteInTrash`, {},headerConfig)
    return response
}

export const removeNoteFromTrash = async(id) => {

    let response = await axios.put(`http://localhost:5000/api/v1/notes/${id}/removeNoteFromTrash`,{},headerConfig)
    return response
}

export const updateNote = async(obj) => {

    let response = await axios.put(`http://localhost:5000/api/v1/notes/${obj._id}`,obj,headerConfig)
    return response
}