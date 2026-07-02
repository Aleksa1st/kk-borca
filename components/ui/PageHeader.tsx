type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-blue-700 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-yellow-300">KK Borča</p>
        <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-blue-100">{description}</p>
      </div>
    </section>
  );
}