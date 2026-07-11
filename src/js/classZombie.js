import Character from './basic_class.js';

export class Zombie extends Character {
    constructor (name) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10;
    }
}