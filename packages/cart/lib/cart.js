"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor(userAuth) {
        this.userAuth = userAuth;
    }
    get() {
        return "cartId";
    }
    getUserId() {
        return this.userAuth.get();
    }
}
exports.Cart = Cart;
