import { deepFreeze } from "../utils/object"

export default abstract class ValueObject<Value = any> {
  protected readonly _value: Value

  constructor(value: Value) {
    this._value = deepFreeze(value)
  }

  get value(): Value {
    return this._value
  }

  toString = () => {
    if (typeof this._value !== 'object' || this._value instanceof Date) {
      return String(this._value)
    } else {
      return JSON.stringify(this._value)
    }
  }
}
