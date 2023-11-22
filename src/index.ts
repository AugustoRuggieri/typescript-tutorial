import { log } from './main';


// Esempio: tipizzare un oggetto usando una interface includendo proprietà opzionali
interface User {
    id: number,
    name: string,
    surname: string,
    city?: string
}

let user: User;

user = { id: 1, name: 'Augusto', surname: 'Ruggieri' };

log(`${user.name} ${user.surname}`);



// Esempio: tipizzare un oggetto complesso

interface ComplexUser {
    id: number,
    name: string,
    surname: string,
    /* coords: {
        lat: number,
        lng: number
    } */
    coords: Coordinates
}

interface Coordinates {
    lat: number,
    lng: number
}

const complexUser: ComplexUser = {
    id: 2,
    name: 'Gemma',
    surname: 'Arterton',
    coords: {
        lat: 123,
        lng: 456
    }
}



// Tipizzare un array

const user1 = { id: 1, name: 'Ryu', surname: 'unknown' }
const user2 = { id: 2, name: 'Ken', surname: 'Masters' }
const user3 = { id: 3, name: 'Guile', surname: 'unknown' }

const userList: User[] = [user1, user2, user3]

//si può usare anche la versione alternativa con Array<User>



// Per tipizzare i dati, oltre alla interface, si può usare la class, 
// anche se occupa più memoria rispetto all'interface e in fase di compilazione 
// è più pesante perché dietro le quinte viene convertita in una funzione.

class Product {
    id: number;
    price: number;
    name: string

    constructor(id: number, price: number, name: string) {
        this.id = id,
            this.price = price,
            this.name = name
    }
}

// Utilizzando una classe potremo utilizzare i parametri tipizzati per assegnare dei valori alle proprietà
// per fare questo, però, abbiamo bisogno del costructor

const product1: Product = new Product(1, 500, 'Sony Playstation');
const product2: Product = new Product(2, 450, 'Microsoft Xbox');
const product3: Product = new Product(3, 270, 'Nintendo Switch')

log(product2.name);

// Per snellire il codice possiamo definire la classe anche in questo modo:

/* class Product {
    constructor(private id: number, private price: number, private name: string) {}
} */



// Esempio di tipizzazione di una funzione

// È bene specificare il tipo del valore che viene ritornato dalla funzione, se non ritorna nulla usare void
function multiply(a: number, b: number): number {
    return a * b;
}

function sayHi(name: string): void {
    console.log('Hello ' + name);
}

log(multiply(2, 3));