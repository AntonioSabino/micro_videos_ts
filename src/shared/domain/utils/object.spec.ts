import { deepFreeze } from './object'

describe('Object', () => {
  it('should be a immutable object', () => {
    const obj = deepFreeze({
      prop: 'prop_value',
      deep: {
        prop: 'deep_prop_value',
        date: new Date()
      }
    })

    expect(() => {
      (obj as any).prop = 'new_prop_value'
    }).toThrowError(TypeError)

    expect(() => {
      (obj as any).deep.prop = 'new_deep_prop_value'
    }).toThrowError(TypeError)

    expect(obj.deep.date).toBeInstanceOf(Date)
  })
})
