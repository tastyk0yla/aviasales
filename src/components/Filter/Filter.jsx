import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classes from './Filter.module.scss'
import * as actions from '../../redux/actions'

const Filter = ({ checkboxes, toggleCheck }) => {
  return (
    <div className={classes.Filter}>
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              name="All"
              onChange={(event) => {
                toggleCheck(event.target.name)
              }}
              checked={checkboxes.All}
            />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>Все</span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="WithoutTransfer"
              onChange={(event) => {
                toggleCheck(event.target.name)
              }}
              checked={checkboxes.WithoutTransfer}
            />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>Без пересадок</span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="OneTransfer"
              onChange={(event) => {
                toggleCheck(event.target.name)
              }}
              checked={checkboxes.OneTransfer}
            />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>1 пересадка</span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="TwoTransfer"
              onChange={(event) => {
                toggleCheck(event.target.name)
              }}
              checked={checkboxes.TwoTransfer}
            />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>2 пересадки</span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="ThreeTransfer"
              onChange={(event) => {
                toggleCheck(event.target.name)
              }}
              checked={checkboxes.ThreeTransfer}
            />
            <span className={classes.checkbox}></span>
            <span className={classes.label}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    checkboxes: state.checkboxes,
  }
}
const mapDispatchToProps = (dispatch) => {
  const { toggleCheck, toggleSort } = bindActionCreators(actions, dispatch)
  return { toggleCheck, toggleSort }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
