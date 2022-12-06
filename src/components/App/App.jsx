import classes from './App.module.scss'
import Header from '../Header'
import Filter from '../Filter'
import TicketList from '../TicketList'

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <main>
        <Filter />
        <TicketList />
      </main>
    </div>
  )
}

export default App
