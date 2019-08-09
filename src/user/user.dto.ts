export class GetNameDTO {
    name: string;
}
// tslint:disable-next-line:max-classes-per-file
export class AuthDTO extends GetNameDTO {
    password: string;
}

// tslint:disable-next-line:max-classes-per-file
export class BaseUserDTO extends AuthDTO {
    email: string;
}
