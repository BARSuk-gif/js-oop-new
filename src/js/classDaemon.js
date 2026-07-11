import Character from './basic_class.js';

export class Daemon extends Character {
    constructor (name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}