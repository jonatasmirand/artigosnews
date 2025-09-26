import styles from './Sobre.module.css'

const Sobre = () => {
    return (
        <div className={styles.sobre}>
            <h1 className={styles.titulo}>Sobre o ArtigosNews</h1>

            <p className={styles.paragrafo}>
                O <strong>ArtigosNews</strong> nasceu da ideia de reunir em um só lugar
                conteúdos sobre <span>desenvolvimento web</span>, com foco em{" "}
                <span>React</span> e <span>Next.js</span>, além de outras tecnologias que
                ajudam a construir interfaces modernas e performáticas.
            </p>


            <p className={styles.paragrafo}>
                Espero que você aproveite o conteúdo e volte sempre para conferir as
                novidades. 🚀
            </p>
        </div >
    )
}

export default Sobre;