import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/LevelUpModal.module.css'

function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.containerLevelUpModel}>
        <header>{level}</header>
        <strong>Congratulations!</strong>
        <p>You archived a new level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal