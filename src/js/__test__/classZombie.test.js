
import { Zombie } from '../classZombie';

describe('Zombie class', () => {
    test('should create Zombie with correct stats', () => {
        const zombie = new Zombie('Зомби');
        expect(zombie.name).toBe('Зомби');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
    });    
})