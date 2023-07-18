class User {
    name
    role
    isApproved

    constructor(name:string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(): void {
        console.log(this.name)
    }
}

const joaozinho = new User("Joãozinho", "Admin", true)

joaozinho.showUserName()