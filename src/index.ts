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