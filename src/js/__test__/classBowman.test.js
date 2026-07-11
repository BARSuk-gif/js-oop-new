
import { Bowman } from '../classBowman';

describe('Bowman class', () => {
    test('should create Bowman with correct stats', () => {
        const bowman = new Bowman('Лучник');
        expect(bowman.name).toBe('Лучник');
        expect(bowman.type).toBe('Bowman');
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25);
        expect(bowman.health).toBe(100);
        expect(bowman.level).toBe(1);
    });    
})