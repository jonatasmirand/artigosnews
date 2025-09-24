import { Artigo } from "@/app/types/type";
import Card from "../Card";
import styles from './Grid.module.css'

type Props = {
    artigos: Artigo[];
}

const Grid = ({ artigos }: Props) => {
    return (
        <section className={styles.grid}>
            {artigos.map(artigo => <Card key={artigo.title} artigo={artigo} />)}
        </section>
    )
}

export default Grid;