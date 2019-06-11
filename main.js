// Challenge 1

class User {

    constructor(email = '', senha = ''){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}
class Admin extends User {
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new User("ciro.chagas@agroamazonia.com","senha123");
const Admin1 = new Admin("ciro.chagas@agroamazonia.com","senha123");

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
