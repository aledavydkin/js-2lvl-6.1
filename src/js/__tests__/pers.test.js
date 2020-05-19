import {
  describe, expect,
} from '@jest/globals';
import Character from '../app';

describe('Создание персонажа', () => {
  test('Создание персонажа с правильными данными', () => {
    const test = new Character('Царь', 'Swordsman');
    expect(test).toEqual({
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Царь',
      type: 'Swordsman',
    });
  });
  test('Имя меньше 2', () => {
    expect(() => { Character('Ц', 'Swordsman'); }).toThrowError(new Error('Значение имени должно быть больше 2 или меньше 10'));
  });
  test('Имя больше 10', () => {
    expect(() => { Character('12345678911', 'Swordsman'); }).toThrowError(new Error('Значение имени должно быть больше 2 или меньше 10'));
  });
  test('Передали неправильный тип', () => {
    expect(() => { Character('Царь', 'Swordsman1'); }).toThrowError(new Error('Можно использовать только Bowman, Swordsman, Magician, Daemon, Undead, Zombie'));
  });
});
