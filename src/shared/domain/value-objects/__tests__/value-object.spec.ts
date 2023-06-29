import ValueObject from '../value-object'

class StubValueObject extends ValueObject {}

describe('ValueObject', () => {
  it('should be set value', () => {
    const vo = new StubValueObject('any_value')
    expect(vo.value).toBe('any_value')

    const vo2 = new StubValueObject({
      prop: 'any_value'
    })
    expect(vo2.value).toStrictEqual({
      prop: 'any_value'
    })
  })

  it('should be return string value', () => {
    const date = new Date("2021-01-01T00:00:00.000Z")
    
    const arrange = [
      {
        received: 'any_value',
        expected: 'any_value'
      },
      {
        received: 1,
        expected: '1'
      },
      {
        received: date,
        expected: date.toString()
      },
      {
        received: {
          prop: 'any_value'
        },
        expected: '{"prop":"any_value"}'
      },
      {
        received: true,
        expected: 'true'
      },
      {
        received: false,
        expected: 'false'
      },
      {
        received: null,
        expected: 'null'
      },
      {
        received: undefined,
        expected: 'undefined'
      }
    ]

    arrange.forEach(({ received, expected }) => {
      const vo = new StubValueObject(received)
      expect(vo.toString()).toBe(expected)
    })
  })
})
