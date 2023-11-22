import { log } from './main';


// Esempio: tipizzare un oggetto usando una interface includendo proprietà opzionali
interface User {
    id: number,
    name: string,
    surname: string,
    city?: string
}

let user: User;

user = {id: 1, name: 'Augusto', surname: 'Ruggieri'};

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

const user1 = {id: 1, name: 'Ryu', surname: 'unknown'}
const user2 = {id: 2, name: 'Ken', surname: 'Masters'}
const user3 = {id: 3, name: 'Guile', surname: 'unknown'}

const userList: User[] = [user1, user2, user3]

//si può usare anche la versione alternativa con Array<User>