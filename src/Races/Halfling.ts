import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static halflingCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 60) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Halfling.halflingCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingCount;
  }
}