import { UserAuth } from "user-auth";
export declare class Order {
    private userAuth;
    constructor(userAuth: UserAuth);
    get(): string;
    getUserId(): string;
}
