
import Character from '../basic_class';

describe('Character basic class', () => {
    test('should create character with valid name and type', () => {
        const hero = new Character('Hero', 'Bowman');
        expect(hero.name).toBe('Hero');
        expect(hero.type).toBe('Bowman');
        expect(hero.health).toBe(100);
        expect(hero.level).toBe(1);
    });

    test('should throw error if name is invalid', () => {
        expect(() => new Character('A', 'Bowman')).toThrow('Name must be between 2 and 10 characters');
    });
    
    test('should throw error if type is invalid', () => {
        expect(() => new Character('Hero', 'Invalid')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });

    test('should throw error if name is not a string', () => {
        expect(() => new Character(123, )).toThrow('Name must be a string');
    })
});

describe('Character common methods', () => {
    let hero;

    beforeEach(() => {
        hero = new Character('Hero', 'Bowman');
        hero.attack = 25;
        hero.defence = 25;
    });

    test('levelUp should increase level and stats', () => {
        hero.levelUp();
        expect(hero.level).toBe(2);
        expect(hero.health).toBe(100);
        expect(hero.attack).toBe(30);
        expect(hero.defence).toBe(30);
    });
    
    test('levelUp should throw error if health is 0', () => {
        hero.health = 0;
        expect(() => hero.levelUp()).toThrow('It is not possible to increase the level of the dead')
    })

    test('damage should reduce health with defence', () => {
        hero.damage(30);
        expect(hero.health).toBe(77.5)
    });

    test('damage should not go below 0', () => {
        hero.damage(150);
        expect(hero.health).toBe(0)
    });

    test('damage should work correctly with different defence values', () => {
        hero.defence = 50;
        hero.damage(100);
        expect(hero.health).toBe(50);
    })
});

describe('Character damage method', () => {
    test.each([
        [100, 0, 0],
        [100, 25, 25],
        [100, 50, 50],
        [100, 100, 100]
    ])('should calculate damage correctly with defence %i', (initialHealth, defence, expectedHealth) => {
        const hero = new Character('Hero', 'Bowman');
        hero.health = initialHealth;
        hero.defence = defence;
        hero.damage(100);
        expect(hero.health).toBe(expectedHealth);
    })
})
