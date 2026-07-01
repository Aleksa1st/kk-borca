type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {label && (
        <p className="mb-3 font-bold uppercase tracking-wide text-blue-700">
          {label}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}