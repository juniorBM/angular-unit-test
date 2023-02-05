// describe('O artefato que queremos testar', () => {
//   it('Primeiro condição que queremos testar', () => {
//
//   });
//
//   it('Segunda condição que queremos testar', () => {
//
//   });
// });

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    // antes de executar cada it, a variável service vai ser sobrescrita
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name} should generate if when called with prefix`, () => {
    const id = service.generateUniqueWithPrefix('app');
    // expect(id).toContain('app-');
    expect(id.startsWith('app-')).toBeTrue(); // teste mais preciso
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name} should not generate duplicate IDs when called multiple calls`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedId when called`, () => {
    service.generateUniqueWithPrefix('app');
    service.generateUniqueWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name} should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];

    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueWithPrefix(emptyValue))
        .withContext(`Empty value ${emptyValue}`)
        .toThrow();
    });
  });
});
