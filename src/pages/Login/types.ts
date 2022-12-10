import { UserProps } from "../../contexts/AuthContext";

export interface IFormLogin extends UserProps {
    
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}