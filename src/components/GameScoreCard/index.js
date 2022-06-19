import './index.css'

const GameScoreCard = props => {
  const {score, onClickPlay} = props

  const onClickPlayAgain = () => {
    onClickPlay()
  }

  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="your-score">{score}</p>
      <div className="play-again-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <button type="button" className="play-btn" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default GameScoreCard
