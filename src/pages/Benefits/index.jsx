import { BenefitCard, HeroBenefit, TableBenefit } from "../../Components";
export default function Benefits() {
  return (
    <>
      <div className="">
        <HeroBenefit />
      </div>
      <section className=" bg-gray-300">
        <BenefitCard />
      </section>

      <div className="flex justify-center  bg-gray-300 pb-5">
        <TableBenefit />
      </div>
    </>
  );
}
