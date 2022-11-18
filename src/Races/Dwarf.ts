import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static dwarfCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Dwarf.dwarfCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfCount;
  }
}