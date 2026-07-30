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

const SITE_URL = "https://kkborca.rs";
const SITE_NAME = "KK Borča";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const ORGANIZATION_LOGO = `${SITE_URL}/logo.png`;

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
      title: "Vest nije pronađena",
      description: "Tražena vest nije pronađena na sajtu KK Borča.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl = `${SITE_URL}/vesti/${slug}`;

  const imageUrl = article.image
    ? new URL(article.image, SITE_URL).toString()
    : DEFAULT_OG_IMAGE;

  return {
    title: article.title,

    description: article.excerpt,

    keywords: [
      "KK Borča",
      "Košarkaški klub Borča",
      "Borča košarka",
      "košarka Beograd",
      "škola košarke",
      article.category,
      article.title,
    ],

    alternates: {
      canonical: articleUrl,
    },

    authors: [
      {
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],

    creator: SITE_NAME,
    publisher: SITE_NAME,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "article",
      locale: "sr_RS",
      url: articleUrl,
      siteName: SITE_NAME,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [SITE_NAME],
      section: article.category,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${article.title} – KK Borča`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
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

  const articleUrl = `${SITE_URL}/vesti/${slug}`;

  const imageUrl = article.image
    ? new URL(article.image, SITE_URL).toString()
    : DEFAULT_OG_IMAGE;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${articleUrl}#article`,

    headline: article.title,
    description: article.excerpt,

    image: [imageUrl],

    datePublished: `${article.date}T12:00:00+02:00`,
    dateModified: `${article.date}T12:00:00+02:00`,

    inLanguage: "sr-Latn-RS",

    articleSection: article.category,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    author: {
      "@type": "SportsOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },

    publisher: {
      "@type": "SportsOrganization",
      name: SITE_NAME,
      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION_LOGO,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Početna",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vesti",
        item: `${SITE_URL}/vesti`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <section className="bg-blue-950 px-6 pb-20 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Putanja stranice">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-bold text-blue-100">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-yellow-300"
                >
                  Početna
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href="/vesti"
                  className="transition hover:text-yellow-300"
                >
                  Vesti
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li
                className="max-w-full truncate text-yellow-300"
                aria-current="page"
              >
                {article.title}
              </li>
            </ol>
          </nav>

          <Link
            href="/vesti"
            className="mt-8 inline-flex font-bold text-yellow-300 transition hover:text-yellow-200"
          >
            ← Nazad na vesti
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
              {article.category}
            </p>

            <time
              dateTime={article.date}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100"
            >
              {article.displayDate}
            </time>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            {article.title}
          </h1>

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
              alt={`${article.title} – KK Borča`}
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

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Pročitajte najnovije vesti o ekipama, utakmicama, treninzima
            i aktivnostima našeg kluba.
          </p>

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