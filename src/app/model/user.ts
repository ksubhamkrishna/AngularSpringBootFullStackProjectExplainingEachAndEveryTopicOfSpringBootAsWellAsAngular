export class User {
    id?:number;
    name: string;
    email: string;

    constructor() {
        this.name = "";
        this.email = "";
    }
}

export interface IUserList{
    id:number,
    name:string,
    email:string
}