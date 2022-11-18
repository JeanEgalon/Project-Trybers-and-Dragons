import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static orcCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 74) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Orc.orcCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.orcCount;
  }
}