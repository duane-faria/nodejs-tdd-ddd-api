export class ServerError extends Error {
  constructor () {
    super('Code error')
    this.name = 'ServerError'
  }
}
