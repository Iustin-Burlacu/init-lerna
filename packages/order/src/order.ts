import { UserAuth } from "user-auth";

export class Order {

    constructor(private userAuth: UserAuth) {}

    get(): string {
        return "orderId"
    }

    getUserId(): string {
        return this.userAuth.get();
    }
}