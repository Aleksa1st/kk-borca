import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAllNewsArticles,
  getFeaturedArticle,
} from "@/lib/news";

const SITE_URL = "https://kkborca.rs";

export const metadata: Metadata = {
  title: "Vesti – utakmice, rezultati i život kluba",

  description:
    "Pratite najnovije vesti KK Borča: najave i izveštaje sa utakmica, rezultate, turnire, putovanja i aktivnosti svih selekcija kluba.",

  alternates: {
    canonical: `${SITE_URL}/vesti`,
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/vesti`,
    siteName: "KK Borča",
    title: "Vesti KK Borča | Utakmice, rezultati i život kluba",
    description:
      "Pratite najnovije vesti KK Borča: najave i izveštaje sa utakmica, rezultate, turnire, putovanja i aktivnosti svih selekcija kluba.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Najnovije vesti KK Borča",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vesti KK Borča",
    description:
      "Najave utakmica, rezultati, turniri, putovanja i priče iz svih selekcija KK Borča.",
    images: ["/og-image.png"],
  },
};

export default function VestiPage() {
  const articles = getAllNewsArticles();
  const featuredArticle = getFeaturedArticle();

  const remainingArticles = featuredArticle
    ? articles.filter(
        (article) => article.slug !== featuredArticle.slug
      )
    : articles;

  return (
    <main>
      <section className="bg-blue-950 px-6 pb-28 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Vesti
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Priče sa terena i iz života kluba.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Pratite najnovije informacije o ekipama, takmičenjima,
            rezultatima, putovanjima i aktivnostima KK Borča.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {articles.length === 0 ? (
            <div className="rounded-3xl bg-slate-100 p-10 text-center">
              <h2 className="text-3xl font-black text-blue-950">
                Vesti uskoro
              </h2>

              <p className="mt-4 text-lg text-slate-600">
                Trenutno nema objavljenih vesti.
              </p>
            </div>
          ) : (
            <>
              {featuredArticle && (
                <article className="grid overflow-hidden rounded-3xl bg-blue-700 text-white shadow-2xl lg:grid-cols-2">
                  <div className="relative min-h-[380px]">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-4">
                      <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
                        Izdvajamo
                      </p>

                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
                        {featuredArticle.displayDate}
                      </span>
                    </div>

                    <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-blue-100">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <Link
                        href={`/vesti/${featuredArticle.slug}`}
                        className="rounded-full bg-yellow-400 px-7 py-4 text-center font-black text-blue-950 transition hover:bg-yellow-300"
                      >
                        Pročitaj vest
                      </Link>

                      {featuredArticle.externalUrl && (
                        <a
                          href={featuredArticle.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border-2 border-white px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-blue-700"
                        >
                          Zvanični izvor ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )}

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {remainingArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                          {article.category}
                        </p>

                        <p className="text-sm font-semibold text-slate-500">
                          {article.displayDate}
                        </p>
                      </div>

                      <h2 className="mt-4 text-2xl font-black leading-tight text-blue-950">
                        {article.title}
                      </h2>

                      <p className="mt-4 leading-7 text-slate-600">
                        {article.excerpt}
                      </p>

                      <Link
                        href={`/vesti/${article.slug}`}
                        className="mt-6 inline-flex font-black text-blue-700 transition hover:text-blue-900"
                      >
                        Pročitaj vest →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-blue-950">
            Nova sezona, nove priče.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Tokom sezone objavljivaćemo najave utakmica, rezultate,
            izveštaje, fotografije i informacije iz svih selekcija kluba.
          </p>
        </div>
      </section>
    </main>
  );
}