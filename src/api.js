export default class api {
  _API_BASE = 'https://front-test.dev.aviasales.ru'

  getSearchId = async () => {
    const PATH = '/search'
    const response = await fetch(`${this._API_BASE}${PATH}`)
    return await response.json()
  }

  getTickets = async (searchId) => {
    const PATH = '/tickets'
    const response = await fetch(`${this._API_BASE}${PATH}?searchId=${searchId}`)
    return await response.json()
  }
}
