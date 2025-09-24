import { Artigo } from "@/app/types/type";
import styles from './Card.module.css'
import Link from "next/link";
import {  Fjalla_One } from "next/font/google"


const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"], variable: "--font-fjalla" });

type Props = {
    artigo: Artigo
}

const Card = ({ artigo }: Props) => {
    const {id, title, author, publishedAt, summary, content, image } = artigo;

    return (
        <Link href={`/artigos/${id}`} className={styles.cardLink}>
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage}/>
            <h2 className={`${styles.title} ${fjallaOne.variable}`}>{title}</h2>    
            <h3 className={styles.author}>{author}</h3>
            <p className={styles.date}>
                📅 {new Date(publishedAt).toLocaleDateString("pt-BR")}
            </p>
            <h4 className={styles.summary}>{summary}</h4>
            <p className={styles.content}>{content}</p>
        </div>
        </Link>
    );
};

export default Card;