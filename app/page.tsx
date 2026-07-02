import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
  

      <section className="flex min-h-screen items-center bg-blue-700 text-white">
        <Container className="text-center">
          <p className="mb-4 text-lg font-semibold text-yellow-300">
            KK Borča • Od 1996. godine
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Više od košarke
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100 md:text-2xl">
            Gradimo mlade igrače, snažan karakter, prijateljstva i zajednicu
            kroz košarku.
          </p>

          <Button>Prijavi se za besplatan trening</Button>
        </Container>
      </section>

      <section className="py-24" id="about">
        <Container>
          <SectionTitle
            label="Zašto KK Borča"
            title="Klub u kome deca rastu"
            description="Od 1996. godine KK Borča pomaže dečacima i devojčicama da se razvijaju kao igrači, učenici, saigrači i odgovorni mladi ljudi."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-xl font-bold text-blue-700">Košarka</h3>
              <p className="mt-3 text-slate-600">
                Kvalitetni treninzi za dečake i devojčice uzrasta od 8 do 17
                godina.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-blue-700">Karakter</h3>
              <p className="mt-3 text-slate-600">
                Učimo decu disciplini, poštovanju, timskom radu i odgovornosti.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-blue-700">Zajednica</h3>
              <p className="mt-3 text-slate-600">
                Deca uče da brinu o saigračima, porodici, školi i lokalnoj
                zajednici.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}