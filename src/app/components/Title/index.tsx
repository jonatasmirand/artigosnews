import styles from './Title.module.css'
import Link from 'next/link';



type Props = {
    title: string
}


const Title = ({ title }: Props) => {
    return (
        <Link href='/' className={styles.link}>
            <div>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </Link>
    )

}

export default Title;