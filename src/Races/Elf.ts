import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static elfCount = 0;

  constructor(_name: string, _dexterity: number, maxLifePoints = 99) {
    super(_name, _dexterity);
    this._maxLifePoints = maxLifePoints;

    Elf.elfCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.elfCount;
  }
}