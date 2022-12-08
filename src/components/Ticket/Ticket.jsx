import classes from './Ticket.module.scss'

const Ticket = ({ info }) => {
  const getTicketInfo = (infoObject) => {
    const roubles = Math.floor(infoObject.price / 1000)
    const thousands = infoObject.price % 1000
    const segments = [...infoObject.segments]
    const [firstFly, secondFly] = segments.reduce((acc, segment) => {
      const stops = segment.stops.join(', ')
      let stopsAmount = 'Без пересадок'
      if (segment.stops.length > 0) {
        stopsAmount = segment.stops.length === 1 ? '1 пересадка' : `${segment.stops.length} пересадки`
      }
      let departureHours = new Date(segment.date).getHours()
      let departureMinutes = new Date(segment.date).getMinutes()
      const durationInHours = Math.floor(segment.duration / 60)
      const durationInMinutes = segment.duration - durationInHours * 60

      let arrivalHours = departureHours + durationInHours
      let arrivalMinutes = departureMinutes + durationInMinutes

      if (arrivalMinutes > 59) {
        arrivalMinutes -= 60
        arrivalHours++
      }
      if (arrivalHours > 23) arrivalHours -= 24

      if (String(departureHours).length < 2) departureHours = `0${departureHours}`
      if (String(departureMinutes).length < 2) departureMinutes = `0${departureMinutes}`
      if (String(arrivalHours).length < 2) arrivalHours = `0${arrivalHours}`
      if (String(arrivalMinutes).length < 2) arrivalMinutes = `0${arrivalMinutes}`

      acc.push({
        stops,
        fromTo: `${segment.origin} - ${segment.destination}`,
        fromToTime: `${departureHours}:${departureMinutes} - ${arrivalHours}:${arrivalMinutes}`,
        inAir: `${durationInHours}ч ${durationInMinutes}м`,
        stopsAmount,
      })
      return acc
    }, [])
    return { price: `${roubles} ${thousands} Р`, carrier: infoObject.carrier, firstFly, secondFly }
  }

  const { price, carrier, firstFly, secondFly } = getTicketInfo(info)

  const logo = `//pics.avs.io/99/36/${carrier}.png`
  return (
    <li className={classes.Ticket}>
      <div className={classes['Ticket-header']}>
        <span>{price}</span>
        <img src={logo} alt="Airline logo" />
      </div>
      <div className={classes['Ticket-content']}>
        <div className={classes.transfer}>
          <div>
            <span className={classes['transfer-title']}>{firstFly.fromTo}</span>
            <span className={classes['transfer-info']}>{firstFly.fromToTime}</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>В пути</span>
            <span className={classes['transfer-info']}>{firstFly.inAir}</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>{firstFly.stopsAmount}</span>
            <span className={classes['transfer-info']}>{firstFly.stops}</span>
          </div>
        </div>
        <div className={classes.transfer}>
          <div>
            <span className={classes['transfer-title']}>{secondFly.fromTo}</span>
            <span className={classes['transfer-info']}>{secondFly.fromToTime}</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>В пути</span>
            <span className={classes['transfer-info']}>{secondFly.inAir}</span>
          </div>
          <div>
            <span className={classes['transfer-title']}>{secondFly.stopsAmount}</span>
            <span className={classes['transfer-info']}>{secondFly.stops}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
