import { UserAuth } from "user-auth";
export declare class Cart {
    private userAuth;
    constructor(userAuth: UserAuth);
    get(): string;
    getUserId(): string;
}
