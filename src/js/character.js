export default function Character(name, type) {
  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if (typeof name === 'string' && name.length > 1 && name.length < 11) {
    this.name = name;
  } else {
    throw new Error('incorrect name');
  }
  if (types.includes(type)) {
    this.type = type;
  } else {
    throw new Error('incorrect type');
  }
  if (type === 'Bowman') {
    this.attack = 25;
    this.defense = 25;
  }
  if (type === 'Swordsman') {
    this.attack = 40;
    this.defense = 10;
  }
  if (type === 'Magician') {
    this.attack = 10;
    this.defense = 40;
  }
  if (type === 'Daemon') {
    this.attack = 10;
    this.defense = 40;
  }
  if (type === 'Undead') {
    this.attack = 25;
    this.defense = 25;
  }
  if (type === 'Zombie') {
    this.attack = 40;
    this.defense = 10;
  }
  this.health = 100;
  this.level = 1;
}
