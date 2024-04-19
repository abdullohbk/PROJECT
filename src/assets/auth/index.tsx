import  {request} from "../config"
import {Request} from "../interface"

export const auth:Request={
    register: (data) => request.post("/auth/register", data),
    login: (data) => request.post("/signup", data)
}