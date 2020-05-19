export default function Character(name, type) {
  const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  if (name.length < 2 || name.length > 10) {
    throw new Error('Значение имени должно быть больше 2 или меньше 10');
  }
  if (!typeArr.includes(type)) {
    throw new Error('Можно использовать только Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

  switch (type) {
    case 'Bowman' || 'Undead':
      this.attack = 25;
      this.defence = 25;
      break;
    case 'Swordsman' || 'Zombie':
      this.attack = 40;
      this.defence = 10;
      break;
    default:
      this.attack = 10;
      this.defence = 40;
      break;
  }
}


// const test = new Character('Царь', 'Swordsman');
// console.log(test);
