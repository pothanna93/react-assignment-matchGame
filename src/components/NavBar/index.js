import './index.css'

const LOGO =
  'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
const TIME = 'https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png'

const NavBar = props => {
  const {score, time} = props
  return (
    <nav className="navbar-container">
      <img src={LOGO} alt="website logo" className="website-logo" />
      <ul className="score-time-container">
        <li>
          <p className="score-num">Score: {score}</p>
        </li>
        <li className="timer-container">
          <img src={TIME} alt="timer" className="timer-logo" />
          <p className="score-num">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
