"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(userAuth) {
        this.userAuth = userAuth;
    }
    get() {
        return "orderId";
    }
    getUserId() {
        return this.userAuth.get();
    }
}
exports.Order = Order;
