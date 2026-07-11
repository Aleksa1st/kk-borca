import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import {
  getAllNewsSlugs,
  getNewsArticleBySlug,
} from "@/lib/news";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: "Vest nije pronađena | KK Borča",
    };
  }

  return {
    title: `${article.title} | KK Borča`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const mdxComponents = useMDXComponents({});

  return (
    <main>
      <section className="bg-blue-950 px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/vesti"
            className="inline-flex font-bold text-yellow-300 transition hover:text-yellow-200"
          >
            ← Nazad na vesti
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
              {article.category}
            </p>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
              {article.displayDate}
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            {article.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <article className="mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-3xl py-12">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
            />

            {article.externalUrl && (
              <div className="mt-12 border-t border-slate-200 pt-8">
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-blue-700 px-8 py-4 font-black text-white transition hover:bg-blue-800"
                >
                  Pročitaj zvanični izvor ↗
                </a>
              </div>
            )}
          </div>
        </article>
      </section>

      <section className="bg-slate-100 px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-blue-950 md:text-4xl">
            Pratite najnovije priče KK Borča
          </h2>

          <Link
            href="/vesti"
            className="mt-8 inline-block rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Pogledaj sve vesti
          </Link>
        </div>
      </section>
    </main>
  );
}