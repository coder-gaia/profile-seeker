import styles from './profile.module.css'


const Profile = ({ userName })=>{
    return(
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={ `https://github.com/${userName}.png` }/>
            <h1 className={styles.name}>{ userName }</h1>
        </header>
    )
}
export default Profile