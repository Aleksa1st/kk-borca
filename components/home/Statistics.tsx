const stats = [
  {
    number: "30",
    label: "godina tradicije",
  },
  {
    number: "2.500+",
    label: "dece prošlo kroz klub",
  },
  {
    number: "160+",
    label: "aktivnih članova",
  },
  {
    number: "8",
    label: "takmičarskih selekcija",
  },
];

export default function Statistics() {
  return (
    <section className="bg-blue-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Brojevi koji govore
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Tri decenije poverenja.
          </h2>

          <p className="mt-6 text-xl leading-8 text-blue-100">
            KK Borča je kroz godine postao mesto gde deca treniraju, odrastaju i
            nose vrednosti koje ostaju za ceo život.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-4 border-yellow-300 pl-6"
            >
              <p className="text-6xl font-black tracking-tight text-yellow-300">
                {stat.number}
              </p>

              <p className="mt-4 text-lg font-semibold uppercase tracking-wide text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}