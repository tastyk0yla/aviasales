import classes from './TicketList.module.scss'
import Ticket from '../Ticket'
const TicketList = () => {
  return (
    <div className={classes.TicketList}>
      <div className={classes.tabs}>
        <input type="radio" name="tab" value="cheapest" id="cheapest" defaultChecked />
        <label htmlFor="cheapest">
          <span>САМЫЙ ДЕШЕВЫЙ</span>
        </label>
        <input type="radio" name="tab" value="fastest" id="fastest" />
        <label htmlFor="fastest">
          <span>САМЫЙ БЫСТРЫЙ</span>
        </label>
      </div>
      <ul>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <button>
          <span>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</span>
        </button>
      </ul>
    </div>
  )
}

export default TicketList
