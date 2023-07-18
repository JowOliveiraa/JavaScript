"use strict";
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(this.name);
    }
}
const joaozinho = new User("Joãozinho", "Admin", true);
joaozinho.showUserName();
