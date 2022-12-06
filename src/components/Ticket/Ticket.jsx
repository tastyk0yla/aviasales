import classes from './Ticket.module.scss'
import S7 from '../../images/S7 Logo.svg'

const Ticket = () => {
  return (
    <li className={classes.Ticket}>
      <div className={classes['Ticket-header']}>
        <span>13 000 Р</span>
        <img src={S7} alt="s7 logo" />
      </div>
      <div className={classes['Ticket-content']}>
        <div className={classes.transfer}>
          <div>
            <span className={classes['transfer-title']}>MOW – HKT</span>
            <span className={classes['transfer-info']}>10:45 – 08:00</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>В пути</span>
            <span className={classes['transfer-info']}>21ч 15м</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>2 пересадки</span>
            <span className={classes['transfer-info']}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes.transfer}>
          <div>
            <span className={classes['transfer-title']}>MOW – HKT</span>
            <span className={classes['transfer-info']}>10:45 – 08:00</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>В пути</span>
            <span className={classes['transfer-info']}>21ч 15м</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>2 пересадки</span>
            <span className={classes['transfer-info']}>HKG, JNB</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
