import Character from '../character';

describe('Character:', () => {
  test('should create new Bowman', () => {
    const unit = new Character('unit', 'Bowman');
    expect(unit).toEqual({
      name: 'unit',
      type: 'Bowman',
      attack: 25,
      defense: 25,
      health: 100,
      level: 1,
    });
  });
  test('should create new Swordsman', () => {
    const unit = new Character('unit', 'Swordsman');
    expect(unit).toEqual({
      name: 'unit',
      type: 'Swordsman',
      attack: 40,
      defense: 10,
      health: 100,
      level: 1,
    });
  });
  test('should create new Magician', () => {
    const unit = new Character('unit', 'Magician');
    expect(unit).toEqual({
      name: 'unit',
      type: 'Magician',
      attack: 10,
      defense: 40,
      health: 100,
      level: 1,
    });
  });
  test('should create new Daemon', () => {
    const unit = new Character('unit', 'Daemon');
    expect(unit).toEqual({
      name: 'unit',
      type: 'Daemon',
      attack: 10,
      defense: 40,
      health: 100,
      level: 1,
    });
  });
  test('should create new Undead', () => {
    const unit = new Character('unit', 'Undead');
    expect(unit).toEqual({
      name: 'unit',
      type: 'Undead',
      attack: 25,
      defense: 25,
      health: 100,
      level: 1,
    });
  });
  test('should create new Zombie', () => {
    const unit = new Character('unit', 'Zombie');
    expect(unit).toEqual({
      name: 'unit',
      type: 'Zombie',
      attack: 40,
      defense: 10,
      health: 100,
      level: 1,
    });
  });
  test('should throw Error on name.length > 11 and name.length < 2', () => {
    expect(() => {
      Character('a', 'Zombie');
    }).toThrow();
  });
  test('should throw Error on name is not a string', () => {
    expect(() => {
      Character(123, 'Zombie');
    }).toThrow();
  });
  test('should throw Error if type is not in list of types', () => {
    function throwError() {
      // eslint-disable-next-line no-unused-vars
      const vaka = new Character('vaka', '123');
    }
    expect(throwError).toThrow();
  });
});
