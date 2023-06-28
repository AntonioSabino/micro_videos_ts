import InvalidUuidError from '../errors/invalida-uuid.error'
import { validate as uuidValidate, v4 as uuidv4 } from 'uuid'

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuidv4()
    this.validate()
  }

  private validate() {
    const isValid = uuidValidate(this.id)
    if (!isValid) {
      throw new InvalidUuidError('ID is not a valid UUID')
    }
  }
}
