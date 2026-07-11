export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string');
        }
        if (name.length < 2 || name.length > 10) {
            throw new Error('Name must be between 2 and 10 characters');
        }

        const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!allowedTypes.includes(type)) {
            throw new Error(`Type must be one of: ${allowedTypes.join(', ')}`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        /*
        switch(type) {
            case 'Bowman':
                this.attack = 25;
                this. defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            default:
                this.attack = 0;
                this.defence = 0;
        } */
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack += 0.2 * this.attack;
            this.defence += 0.2 * this.defence;
            this.health = 100;
        } else {
            throw new Error('It is not possible to increase the level of the dead');
        }       
    };

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }   
    }
}