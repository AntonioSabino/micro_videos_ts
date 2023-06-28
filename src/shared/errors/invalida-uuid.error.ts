export default class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || "ID is not a valid UUID")
    this.name = 'InvalidUuidError'
  }
}