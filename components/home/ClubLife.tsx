const moments = [
  {
    image: "/images/home/branislav.jpg",
    title: "Radost zajedničke pobede",
    text: "Trofeji su važni, ali ono što ostaje su emocije, tim i zajednički put.",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    image: "/images/home/devojcice-nas-ponos.jpg",
    title: "Devojčice – naš ponos",
    text: "Generacije devojčica koje pokazuju da se rad, osmeh i timski duh uvek vide.",
    size: "",
  },
  {
    image: "/images/home/prijateljska-herceg-novi.jpg",
    title: "Prijateljstva na putovanjima",
    text: "Turniri i putovanja stvaraju uspomene koje deca nose mnogo duže od rezultata.",
    size: "",
  },
  {
    image: "/images/home/humanitarian.jpg",
    title: "Zajedno i van terena",
    text: "Učimo decu da budu deo zajednice i da brinu o ljudima oko sebe.",
    size: "",
  },
  {
    image: "/images/home/mini.jpg",
    title: "Prvi košarkaški koraci",
    text: "Najmlađi članovi uče igru kroz radost, pokret i pripadnost timu.",
    size: "",
  },
];

export default function ClubLife() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            ŽIVOT U KLUBU
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Trenuci koji ostaju.
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Svaka fotografija priča priču o prijateljstvu, radu, pobedama i
            odrastanju.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[280px] gap-6 lg:grid-cols-4">
          {moments.map((moment) => (
            <article
              key={moment.title}
              className={`group relative overflow-hidden rounded-3xl shadow-xl ${moment.size}`}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-black">{moment.title}</h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 opacity-0 transition duration-300 group-hover:opacity-100">
                  {moment.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}