import {
  ButtonPrimary,
  ButtonSecundary,
  ContainerPriceBasic,
  ContainerPriceGold,
  ContainerPricePlatinum,
  Footer,
  Layout,
  Hero,
  ProgressBar,
} from "../../Components";
export default function Home() {
  return (
    <>
      <main className="bg-white-skyblue">
        <Layout />

        <Hero />

        <section className="mt-6 md:mt-24 w-[70%] m-auto">
          <h2 className="text-lg lg:text-4xl text-center my-3 font-bold tracking-wider">
            Conoce nuestros planes de seguro vehicular
          </h2>
          <div className="md:flex mt-8 md:mt-16 gap-12 ">
            <ContainerPriceBasic />
            <ContainerPriceGold />
            <ContainerPricePlatinum />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
