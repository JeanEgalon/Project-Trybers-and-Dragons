import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Dwarf.addDwarf();
  }

  private static addDwarf() {
    this._dwarfCount += 1;
  }

  static get dwarfs() {
    return this._dwarfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfs;
  }
}