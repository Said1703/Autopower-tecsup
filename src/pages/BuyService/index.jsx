import { Layout } from "../../Components";
import {
  ContainerForm,
  ContainerBill,
  PaymentConfirmation,
} from "../../Components";
export default function BuyService() {
  return (
    <>
      <main className="bg-white-skyblue">
        <ContainerForm />
        <ContainerBill />
        <PaymentConfirmation />
      </main>
    </>
  );
}
