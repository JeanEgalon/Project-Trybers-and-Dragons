import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _firstPlayer: Fighter;
  private _secondPlayer: Fighter;
  constructor(firstPlayer: Fighter, secondPlayer: Fighter) {
    super(firstPlayer);
    super.fight();

    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  get firstPlayer(): Fighter {
    return this._firstPlayer;
  }

  get secondPlayer(): Fighter {
    return this._secondPlayer;
  }

  fight(): number {
    while (this.firstPlayerIsAlive() && this.secondPlayerIsAlive()) {
      this.firstPlayer.attack(this.secondPlayer);
      this.secondPlayer.attack(this.firstPlayer);
    }

    return super.fight();
  }

  private firstPlayerIsAlive(): boolean {
    return this.firstPlayer.lifePoints > 0;
  }

  private secondPlayerIsAlive(): boolean {
    return this.secondPlayer.lifePoints > 0;
  }
}