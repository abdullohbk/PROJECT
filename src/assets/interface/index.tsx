import { ReactNode } from "react"

export interface Login{
    username:string,
    password:string|number
}

export interface Register extends Login{
    phone:string
}

export interface Request{
    register:(data:Register) =>unknown,
    login: (data:Login) => unknown
}

export interface propType{
    children: ReactNode 
}