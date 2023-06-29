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
    const date = new Date('2021-01-01T00:00:00.000Z')

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
      }
    ]

    arrange.forEach(({ received, expected }) => {
      const vo = new StubValueObject(received)
      expect(vo.toString()).toBe(expected)
    })
  })

  it('should be a immutable object', () => {
    const obj = {
      prop: 'prop_value',
      deep: {
        prop: 'deep_prop_value',
        date: new Date()
      }
    }

    const vo = new StubValueObject(obj)

    expect(() => {
      (vo as any).value.prop = 'new_prop_value'
    }).toThrowError(TypeError)

    expect(() => {
      (vo as any).value.deep.prop = 'new_deep_prop_value'
    }).toThrowError(TypeError)

    expect(vo.value.deep.date).toBeInstanceOf(Date)
  })
})
