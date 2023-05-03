import axios from '~/axios'

export function login(username,password){

    return axios.post("/admin/login",{
        username,
        password
    })

}

export function register(fullname,birth,email,password,phone){

    return axios.post("/admin/register",{
        fullname,
        birth,
        email,
        password,
        phone
    })

}