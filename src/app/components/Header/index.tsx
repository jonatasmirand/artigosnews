import Link from "next/link";
import styles from './Header.module.css'



const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>

                <h1 className={styles.header_logo}>
                    <Link href='/'>ArtigosNews</Link>
                </h1>

                <nav className={styles.header_nav}>
                    <Link href="/">Inicio</Link>
                    <Link href="/artigos/deploy">Deploy</Link>
                    </nav>
            </div>
        </header>
    );

}

export default Header;