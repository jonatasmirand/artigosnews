import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./details.module.scss";
import { artigos } from "@/app/types/artigos";
import { artigosDeploy } from "@/app/types/deployArtigos";
import Link from "next/link";
import RainbowEffect from "./RainbowEffect";

const allArtigos = [...artigos, ...artigosDeploy];

const getArtigoDetails = async (id: string) => {
    return allArtigos.find((artigo) => artigo.id.toString() === id);
};

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const { id } = params;
    const details = await getArtigoDetails(id);

    if (!details) return {};

    return {
        title: `${details.title} | ArtigosNews`,
        description: details.summary,
    };
}

export default async function DetalheArtigo({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params; 
    const details = await getArtigoDetails(id);

    if (!details) return notFound();

    const { title, author, publishedAt, summary, content, image } = details;

    return (
        <>
            <RainbowEffect />
            <div className={styles.card}>
                <img src={image} alt={title} className={styles.cardImage} />
                <h2 className={styles.title}>{title}</h2>

                <h4 className={styles.summary}>{summary}</h4>
                <p className={styles.content}>{content}</p>

                <section className={styles.public}>
                    <h3 className={styles.author}>{author}</h3>
                    <p className={styles.date}>
                        📅 {new Date(publishedAt).toLocaleDateString("pt-BR")}
                    </p>
                </section>

                <Link href="/" className={styles.backButton}>
                    ⬅ Voltar para lista
                </Link>
            </div>
        </>
    );
}