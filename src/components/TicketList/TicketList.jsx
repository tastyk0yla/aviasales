import { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Result, Spin } from 'antd'
import classes from './TicketList.module.scss'
import Ticket from '../Ticket'
import * as actions from '../../redux/actions'

const TicketList = (props) => {
  const {
    checkboxes,
    totalTicketsOnPage,
    sortedBy,
    tickets,
    toggleSort,
    getTickets,
    increaseTotalTicketsOnPage,
    isFetching,
  } = props

  useLayoutEffect(() => {
    getTickets('Bunch')
    getTickets('All')
  }, [])

  const filters = Object.entries(checkboxes).reduce((acc, filter) => {
    if (filter[1]) {
      let filterName = ''
      switch (filter[0]) {
        case 'All':
          break
        case 'WithoutTransfer':
          filterName = 0
          break
        case 'OneTransfer':
          filterName = 1
          break
        case 'TwoTransfer':
          filterName = 2
          break
        case 'ThreeTransfer':
          filterName = 3
          break
      }
      if (filterName) acc.push(filterName)
    }
    return acc
  }, [])

  const filtered = checkboxes.All
    ? tickets[sortedBy]
    : tickets[sortedBy]?.reduce((acc, ticket) => {
        const firstFlyStopsAmount = ticket?.segments[0]?.stops.length
        const secondFlyStopsAmount = ticket?.segments[2]?.stops.length
        if (filters.includes(firstFlyStopsAmount)) {
          acc.push(ticket)
          return acc
        }
        if (filters.includes(secondFlyStopsAmount)) {
          acc.push(ticket)
          return acc
        }
        return acc
      }, [])

  const RenderedTickets = filtered?.slice(0, totalTicketsOnPage).map((ticket) => {
    const key = Date.now() * Math.random()
    return <Ticket info={ticket} key={key} />
  })

  const List =
    !isFetching && RenderedTickets?.length === 0 ? (
      <li>
        {' '}
        <Result status="warning" title="Рейсов, подходящих под заданные фильтры, не найдено" />
      </li>
    ) : (
      RenderedTickets
    )
  return (
    <div className={classes.TicketList}>
      <div className={classes.tabs}>
        <input
          type="radio"
          name="tab"
          value="cheapest"
          id="cheapest"
          onChange={(event) => {
            toggleSort(event.target.value)
          }}
          checked={sortedBy === 'cheapest' ? true : false}
        />
        <label htmlFor="cheapest">
          <span>САМЫЙ ДЕШЕВЫЙ</span>
        </label>
        <input
          type="radio"
          name="tab"
          value="fastest"
          id="fastest"
          onChange={(event) => {
            toggleSort(event.target.value)
          }}
          checked={sortedBy === 'fastest' ? true : false}
        />
        <label htmlFor="fastest">
          <span>САМЫЙ БЫСТРЫЙ</span>
        </label>
      </div>
      <ul>
        {isFetching ? (
          <li className={classes.spinner}>
            <Spin />
            <span>Мы ещё не успели загрузить все билеты, дайте нам ещё немного времени</span>
            <Spin />
          </li>
        ) : null}
        {List}
      </ul>
      <button className={classes['btn--more']} onClick={increaseTotalTicketsOnPage}>
        <span>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</span>
      </button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    sortedBy: state.sortedBy,
    checkboxes: state.checkboxes,
    isFetching: state.isFetching,
    totalTicketsOnPage: state.totalTicketsOnPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  const { toggleSort, getTickets, increaseTotalTicketsOnPage } = bindActionCreators(actions, dispatch)
  return { toggleSort, getTickets, increaseTotalTicketsOnPage }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
