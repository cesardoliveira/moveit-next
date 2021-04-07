import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/ChallengeBox.module.css'

function ChallengeBox() {
  const { activeChallenge, resetChallenge }  = useContext(ChallengesContext)

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win {activeChallenge.amount} xp</header>

          <main>
            {activeChallenge.type === 'body' 
              ? <img src="/icons/body.svg" /> 
              : <img src="/icons/eye.svg" />
            }
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailureButton}
              onClick={resetChallenge}
            >
              Failure
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Start a cycle to receive challenges to be completed</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
              Complete them and gain experience and level up.
            </p>
        </div>
      )}
    </div>
  )
}

export default ChallengeBox