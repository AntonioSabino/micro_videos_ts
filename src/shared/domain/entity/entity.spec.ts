import UniqueEntityId from '../value-objects/unique-entity-id.vo'
import Entity from './entity'
import { validate as uuidValidate } from 'uuid'

class StubEntity extends Entity<{ prop1: string; prop2: number }> {}

describe('Entity', () => {
  it('should set props and id', () => {
    const props = { prop1: 'prop1', prop2: 1 }

    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).toBeDefined()
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it('should accept a valid uuid', () => {
    const props = { prop1: 'prop1', prop2: 1 }

    const id = new UniqueEntityId()

    const entity = new StubEntity(props, id)

    expect(entity.props).toStrictEqual(props)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).toBe(id.value)
  })

  it('should return a json with id and props', () => {
    const props = { prop1: 'prop1', prop2: 1 }

    const entity = new StubEntity(props)

    const json = entity.toJSON()

    expect(json).toStrictEqual({
      id: entity.id,
      ...props
    })
  })
})
