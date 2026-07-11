
import { Swordsman } from '../classSwordsman';

describe('Swordsman class', () => {
    test('should create Swordsman with correct stats', () => {
        const swordsman = new Swordsman('Воин');
        expect(swordsman.name).toBe('Воин');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
    });    
})