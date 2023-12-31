import Entity from '../../../shared/domain/entity/entity'
import UniqueEntityId from '../../../shared/domain/value-objects/unique-entity-id.vo'

export type CategoryProps = {
  name: string
  description?: string
  is_active?: boolean
  created_at?: Date
}

export class Category extends Entity<CategoryProps> {
  constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
    super(props, id)
    this.description = this.props.description
    this.is_active = this.props.is_active
    this.props.created_at = this.props.created_at ?? new Date()
  }

  get name(): string {
    return this.props.name
  }

  get description(): string | undefined {
    return this.props.description
  }

  private set description(value: string) {
    this.props.description = value ?? null
  }

  get is_active(): boolean | undefined {
    return this.props.is_active
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true
  }

  get created_at(): Date | undefined {
    return this.props.created_at
  }

  update(name: string, description: string): void {
    this.props.name = name
    this.props.description = description
  }

  activate(): void {
    this.props.is_active = true
  }

  deactivate(): void {
    this.props.is_active = false
  }
}
