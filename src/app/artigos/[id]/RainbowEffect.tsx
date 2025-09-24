import styles from './details.module.scss';

export default function RainbowEffect() {
    return (
        <>
            {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={styles.rainbow}></div>
            ))}
            <div className={styles.h}></div>
            <div className={styles.v}></div>
        </>
    );
}