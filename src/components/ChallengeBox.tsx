import { useState } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'

function ChallengeBox() {
  const [hasActiveChallenge] = useState(false)

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>New Challenge</strong>
            <p>Walk for 3 minutes and stretch your legs to stay healthy.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailureButton}
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