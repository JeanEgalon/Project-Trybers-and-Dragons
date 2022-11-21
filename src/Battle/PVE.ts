import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _people: Fighter;
  private _monsters: SimpleFighter[];

  constructor(people: Fighter, monsters: SimpleFighter[]) {
    super(people);

    this._people = people;
    this._monsters = monsters;
  }

  fight(): number {
    const fpLife = this._people.lifePoints > 0;
    const checkMonstersHealth = this._monsters.some(
      (item) => item.lifePoints > 0,
    );

    if (fpLife && checkMonstersHealth) {
      this._monsters.forEach((monster) => {
        this._people.attack(monster);
        monster.attack(this._people);
      });
    }

    return super.fight();
  }
}