
import { Daemon } from '../classDaemon';

describe('Daemon class', () => {
    test('should create Daemon with correct stats', () => {
        const daemon = new Daemon('Димон');
        expect(daemon.name).toBe('Димон');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
    });    
})