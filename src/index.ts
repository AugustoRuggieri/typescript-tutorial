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
