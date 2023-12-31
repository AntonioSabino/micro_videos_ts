import InvalidUuidError from '../../errors/invalida-uuid.error'
import { validate as uuidValidate, v4 as uuidv4 } from 'uuid'
import ValueObject from './value-object'

export default class UniqueEntityId extends ValueObject<string> {
  constructor(id?: string) {
    super(id || uuidv4())
    this.validate()
  }

  private validate() {
    const isValid = uuidValidate(this.value)
    if (!isValid) {
      throw new InvalidUuidError('ID is not a valid UUID')
    }
  }
}