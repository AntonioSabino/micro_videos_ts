export default abstract class ValueObject<Value = any> {
  protected _value: Value

  constructor(value: Value) {
    this._value = value
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
