import type { MDXComponents } from "mdx/types";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-10 text-4xl font-black tracking-tight text-blue-950 md:text-5xl">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-10 text-3xl font-black tracking-tight text-blue-950">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-8 text-2xl font-black text-blue-950">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mt-5 text-lg leading-8 text-slate-700">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
        {children}
      </ol>
    ),

    a: ({ href, children }) => (
      <a
        href={href}
        className="font-bold text-blue-700 underline decoration-yellow-400 decoration-2 underline-offset-4 transition hover:text-blue-900"
      >
        {children}
      </a>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-yellow-400 bg-blue-50 px-6 py-5 text-xl font-semibold italic leading-8 text-blue-950">
        {children}
      </blockquote>
    ),

    strong: ({ children }) => (
      <strong className="font-black text-blue-950">{children}</strong>
    ),

    ...components,
  };
}