import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);

    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    while (this.playerIsAlive() && this.someMonstersIsAlive()) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
    }

    return super.fight();
  }

  private playerIsAlive(): boolean {
    return this._player.lifePoints > 0;
  }

  private someMonstersIsAlive(): boolean {
    return this._monsters.some(
      (item) => item.lifePoints > 0,
    );
  }
}