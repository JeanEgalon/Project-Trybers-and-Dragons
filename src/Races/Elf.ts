import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static elfCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 99) {
    super(name, dexterity);
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