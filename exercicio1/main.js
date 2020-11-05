class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    admin = true;
}


const User1 = new Usuario('usuario@gmail.com', 'teste');
const Adm1 = new Admin('admin@gmail.com', 'teste');



console.log(User1.isAdmin()); //false
console.log(Adm1.isAdmin());  //true
