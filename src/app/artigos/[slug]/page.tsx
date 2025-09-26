import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./details.module.css";
import Link from "next/link";
import { artigosDeploy } from "@/app/types/deployArtigos";
import { artigos } from "@/app/types/artigos";

const AllArtigos = [...artigos, ...artigosDeploy];

type DetailsPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(
    { params }: DetailsPageProps
): Promise<Metadata> {
    const { slug } = await params;
    const details = AllArtigos.find((artigo) => artigo.slug === slug);
    if (!details) return {};
    return {
        title: `${details.title} | ArtigosNews`,
        description: details.summary,
    };
}

export async function generateStaticParams() {
    return AllArtigos.map((artigo) => ({
        slug: artigo.slug,
    }));
}


export default async function DetailsArtigo({ params }: DetailsPageProps) {
    const { slug } = await params;
    const details = AllArtigos.find((artigo) => artigo.slug === slug);
    if (!details) return notFound();

    const { title, summary, content, author, publishedAt, image } = details;

    return (
        
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
        
    );
}