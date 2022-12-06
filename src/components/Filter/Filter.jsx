import classes from './Filter.module.scss'

const Filter = () => {
  return (
    <div className={classes.Filter}>
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul>
        <li>
          <label>
            <input type="checkbox" name="all" />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>Все</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="without-transfer" />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>Без пересадок</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="one-transfer" />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>1 пересадка</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="two-transfers" />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>2 пересадки</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="three-transfers" />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Filter
