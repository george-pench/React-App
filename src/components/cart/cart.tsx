import Page from "@/elements/page/page";
import style from "./cart.m.scss";

export default function Cart() {
  return (
    <Page title="Cart">
      <div className={style.cartPageContainer} />
    </Page>
  );
}
