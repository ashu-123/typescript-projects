import { Person } from './person';

export class Player implements Person {
    name: string = "Ashu";
    // age?: number | undefined;
    formatName = () => "Ashu"
    highScore: number = 43;

}