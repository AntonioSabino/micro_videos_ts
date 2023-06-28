import InvalidUuidError from '../errors/invalida-uuid.error'
import UniqueEntityId from './unique-entity-id.vo'
import { validate as uuidValidate } from 'uuid'

function spyValidate() {
  return jest.spyOn(UniqueEntityId.prototype as any, 'validate')
}

describe('UniqueEntityId', () => {
  it('should throw an error if the id is not a valid UUID', () => {
    const validateSpy = spyValidate()
    expect(() => {
      new UniqueEntityId('invalid-uuid')
    }).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should accept a valid UUID', () => {
    const validateSpy = spyValidate()
    const uuid = 'e4537954-33a6-4ad4-90d7-2c6aac5fa775'
    const vo = new UniqueEntityId(uuid)
    expect(vo.id).toBe(uuid)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should generate a new UUID if none is provided', () => {
    const validateSpy = spyValidate()
    const vo = new UniqueEntityId()
    expect(uuidValidate(vo.id)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})
