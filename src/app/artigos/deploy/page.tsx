import Grid from "@/app/components/Grid";
import { artigosDeploy } from "@/app/types/deployArtigos";
import styles from './explicandodeploy.module.css'


const ExplicandoDeploy = () => {

    return (
        <>
            <div className={styles.sobre}>
                <h1 className={styles.titulo}>Sobre o Deploy</h1>

                <p className={styles.paragrafo}>
                    A página <strong>Deploy</strong> do ArtigosNews é dedicada a trazer tudo que você
                    precisa saber para colocar seus projetos {" "}
                    <span>React</span> e <span>Next.js</span>
                    ou qualquer aplicação web em produção de forma eficiente e segura.
                    Aqui, você encontrará guias passo a passo,
                    checklists e dicas sobre <strong>automação de deploy, CI/CD</strong>, e plataformas como
                    <strong> Netlify </strong>garantindo que seus projetos sejam publicados sem
                    erros e com qualidade profissional.
                </p>

                <p className={styles.paragrafo}>Nosso objetivo é simplificar processos que muitas vezes são complexos e demorados,
                    transformando conceitos avançados em conteúdo prático e direto.
                    Se você quer aprender a subir seus projetos com confiança,
                    monitorar deploys e automatizar tarefas repetitivas,
                    esta página é feita para você. 💻
                </p>



            </div >
            <Grid artigos={artigosDeploy} />
        </>
    )
}

export default ExplicandoDeploy;    