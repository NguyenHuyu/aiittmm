import {fetchUser } from "../utils/fetchData"


const userInfo = fetchUser() 

export const initialState = {
    user :userInfo,
}