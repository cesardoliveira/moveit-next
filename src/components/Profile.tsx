import styles from '../styles/components/Profile.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cesardoliveira.png" alt="profile-photo" />
      <div>
        <strong>Cesar Oliveira</strong>
        <p>Level 1</p>
      </div>
    </div>
  )  
}

export default Profile