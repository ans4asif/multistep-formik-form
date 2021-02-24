import { string } from "yup/lib/locale"

export interface Personal_Info{
    firstName: string,
    lastName: string,
    age:number,
    cnic:number,
    address:string

}
export interface Account_Info{
    username:string,
    password:string,
    email:string,
    re_password:string
}

   
