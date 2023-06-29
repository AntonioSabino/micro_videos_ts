import UniqueEntityId from '../../../shared/domain/value-objects/unique-entity-id.vo'
import { Category } from './category'

describe('Category', () => {
  it('should create category', () => {
    const created_at = new Date()

    const category = new Category({
      name: 'Category 1',
      description: 'Description Category 1',
      is_active: true,
      created_at
    })

    expect(category.props).toStrictEqual({
      name: 'Category 1',
      description: 'Description Category 1',
      is_active: true,
      created_at
    })

    const category2 = new Category({
      name: 'Category 2',
      description: 'Description Category 2',
      is_active: false
    })

    expect(category2.props).toStrictEqual({
      name: 'Category 2',
      description: 'Description Category 2',
      is_active: false,
      created_at: expect.any(Date)
    })
  })

  it('should create category with default values', () => {
    const category = new Category({
      name: 'Category 1'
    })

    expect(category.props.created_at).toBeInstanceOf(Date)
    expect(category.props).toStrictEqual({
      name: 'Category 1',
      description: null,
      is_active: true,
      created_at: expect.any(Date)
    })
  })

  it('should be create category with id', () => {
    const data = [
      { props: { name: 'Category 1' } },
      { props: { name: 'Category 2' }, id: null },
      { props: { name: 'Category 3' }, id: undefined },
      { props: { name: 'Category 4' }, id: new UniqueEntityId() },
    ]

    data.forEach((item) => {
      const category = new Category(item.props, item.id)
      expect(category.id).toBeInstanceOf(UniqueEntityId)
    })
  })

  it('should be get name', () => {
    const category = new Category({
      name: 'Category 1'
    })

    expect(category.name).toBe('Category 1')
  })

  it('should be get description', () => {
    const category = new Category({
      name: 'Category 1',
      description: 'Description Category 1'
    })

    expect(category.description).toBe('Description Category 1')

    const category2 = new Category({
      name: 'Category 2'
    })

    expect(category2.description).toBeNull()
  })

  it('should be get is_active', () => {
    const category = new Category({
      name: 'Category 1',
      is_active: true
    })

    expect(category.is_active).toBeTruthy()

    const category2 = new Category({
      name: 'Category 2'
    })

    expect(category2.is_active).toBeTruthy()
  })

  it('should be get created_at', () => {
    const created_at = new Date()

    const category = new Category({
      name: 'Category 1',
      created_at
    })

    expect(category.created_at).toBe(created_at)

    const category2 = new Category({
      name: 'Category 2'
    })

    expect(category2.created_at).toBeInstanceOf(Date)
  })
})
