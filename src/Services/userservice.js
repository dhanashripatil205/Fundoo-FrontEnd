import axios from 'axios'

export const SignIn = async(obj) => {

    let response = await axios.post('http://localhost:4000/api/v1/users/login',obj)
    return response

}

export const SignUp = async(obj) => {

    let response = await axios.post('http://localhost:4000/api/v1/users',obj)
    return response
}
