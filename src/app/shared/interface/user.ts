export interface User {
    readonly name: string;
    readonly surname: string;
    readonly patronymic?: string;
    readonly photo?: string;
    readonly faculty?: string;
    readonly course?: number;
    readonly group?: number;
    readonly email?: string;
    readonly telegram?: string;
    readonly login: string;
    readonly is_active: boolean;
    readonly role: string;
}

