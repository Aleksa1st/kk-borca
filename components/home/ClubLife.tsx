export default function ClubLife() {
  const photos = [
    {
      image: "/images/home/prijateljska-herceg-novi.jpg",
      title: "Prijateljstva za ceo život",
    },
    {
      image: "/images/home/devojcice-nas-ponos.jpg",
      title: "Devojčice – naš ponos",
    },
    {
      image: "/images/home/humanitarian.jpg",
      title: "Zajedno i van terena",
    },
    {
      image: "/images/home/mini.jpg",
      title: "Prvi košarkaški koraci",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            ŽIVOT U KLUBU
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Svaki trening je nova uspomena.
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Košarka je razlog zbog kojeg se okupljamo. Prijateljstva su razlog
            zbog kojeg ostajemo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-blue-950">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}