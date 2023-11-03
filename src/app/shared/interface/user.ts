export class User {
    public name : string;
    public surname : string;
    public patronymic : string | null = null;
    public photo : string | null = null;
    public faculty : string | null = null;
    public course : number | null = null;
    public group : number | null = null;
    public email : string | null = null;
    public telegram : string | null = null;
    public login : string;
    public is_active : boolean;
    public role : string;

    constructor(name : string, surname : string, login : string, is_active : boolean, role : string) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.is_active = is_active;
        this.role = role;
    }
}