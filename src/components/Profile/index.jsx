import styles from './styles.module.css'

export default function Profile(props) {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <img alt="" src={props.avatar} className={styles.imagem}/>
                <h2 className={styles.name}>{props.name}</h2>
                <p className={styles.bio}>{props.bio}</p>
                <p className={styles.contact}>{props.phone}</p>
                <p className={styles.contact}>{props.email}</p>
                <div className={styles.buttonsContainer}>
                    <a href={props.githubUrl} target='_blank' className={styles.button}>GitHub</a>
                    <br />
                    <a href={props.instagramUrl} target='_blank' className={styles.button}>Instagram</a>
                    <br />
                    <a href={props.twitterUrl} target='_blank' className={styles.button}>Twitter</a>
                </div>
            </div>
        </div>
    )
}