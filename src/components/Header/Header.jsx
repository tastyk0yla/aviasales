import classes from './Header.module.scss'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={logo} alt="Aviasales logo" />
    </div>
  )
}

export default Header
