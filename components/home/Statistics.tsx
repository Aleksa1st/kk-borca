export default function Statistics() {
  const stats = [
    {
      number: "160+",
      label: "Dece u klubu",
    },
    {
      number: "8",
      label: "Takmičarskih ekipa",
    },
    {
      number: "5",
      label: "Trenera",
    },
    {
      number: "25",
      label: "Treninga nedeljno",
    },
  ];

  return (
    <section className="bg-blue-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            KK BORČA
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Brojevi koji govore više od reči.
          </h2>

          <p className="mt-6 text-xl leading-8 text-blue-100">
            Gotovo tri decenije posvećenog rada sa decom,
            porodicama i zajednicom.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-3xl bg-white p-10 text-center shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <p className="text-6xl font-black text-blue-700">
                {item.number}
              </p>

              <p className="mt-5 text-lg font-semibold text-slate-700">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}