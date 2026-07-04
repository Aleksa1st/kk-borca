const values = [
  {
    title: "Košarka",
    text: "Deca uče osnove igre, razvijaju veštine i stiču sportske navike kroz redovan rad.",
    image: "/images/home/mini.jpg",
  },
  {
    title: "Karakter",
    text: "Na treningu se uče disciplina, poštovanje, odgovornost i odnos prema saigračima.",
    image: "/images/home/karakter.jpg",
  },
  {
    title: "Zajednica",
    text: "KK Borča neguje osećaj pripadnosti, solidarnosti i brige za lokalnu zajednicu.",
    image: "/images/home/humanitarian.jpg",
  },
  {
    title: "Prijateljstvo",
    text: "Putovanja, utakmice i treninzi stvaraju uspomene i prijateljstva koja traju.",
    image: "/images/home/prijateljska-herceg-novi.jpg",
  },
];

export default function MoreThanBasketball() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Više od košarke
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Deca ne rastu samo na terenu.
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            U KK Borča sport je samo početak. Kroz treninge, utakmice,
            druženja i zajedničke akcije deca uče vrednosti koje nose kroz ceo
            život.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl bg-slate-50 shadow-lg"
            >
              <div
                className="h-72 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
              />

              <div className="p-8">
                <h3 className="text-2xl font-black text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}