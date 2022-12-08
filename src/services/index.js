export default class aviasalesApi {
  _API_BASE = 'https://aviasales-test-api.kata.academy'

  async getSearchId() {
    const PATH = '/search'
    const response = await fetch(`${this._API_BASE}${PATH}`)
    return await response.json()
  }

  getFirstBunchOfTickets = async (searchId) => {
    const PATH = '/tickets'
    let success = false
    while (!success) {
      try {
        let response = await fetch(`${this._API_BASE}${PATH}?searchId=${searchId}`)
        if (response.status > 399) throw new Error(response.status)
        response = await response.json()
        success = true
        return response.tickets
      } catch (error) {
        if (error.message != 500 || error.message !== 'Unexpected end of JSON input') {
          throw new Error(error)
        }
      }
    }
  }
  getAllTickets = async (searchId) => {
    const PATH = '/tickets'
    const tickets = []
    const ticketsCollector = async (tickets) => {
      let response
      try {
        response = await fetch(`${this._API_BASE}${PATH}?searchId=${searchId}`)
        response = await response.json()
        tickets.push(response.tickets)
      } catch (error) {
        if (error.message === 'Unexpected end of JSON input') return ticketsCollector(tickets)
        throw new Error(error)
      }
      if (response.stop) return tickets
      return ticketsCollector(tickets)
    }
    return await ticketsCollector(tickets)
  }
}
