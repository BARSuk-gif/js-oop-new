
import { Magician } from '../classMagician';

describe('Magician class', () => {
    test('should create Magician with correct stats', () => {
        const magician = new Magician('Маг');
        expect(magician.name).toBe('Маг');
        expect(magician.type).toBe('Magician');
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
    });    
})