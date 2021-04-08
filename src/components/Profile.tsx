import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cesardoliveira.png" alt="profile-photo" />
      <div>
        <strong>Cesar Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="Icon Level" />
          Level {level}</p>
      </div>
    </div>
  )
}

export default Profile