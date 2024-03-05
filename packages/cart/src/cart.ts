import { UserAuth } from "user-auth";

export class Cart {
    constructor(private userAuth: UserAuth) {}

    get(): string {
        return "cartId"
    }

    getUserId(): string {
        return this.userAuth.get();
    }
}