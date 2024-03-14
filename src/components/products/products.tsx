import useLoadingGamesCatalog from "@/hooks/useLoadingGamesCatalog";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import CatalogSearch from "./catalogSearch/catalogSearch";
import GamesCatalog from "./gamesCatalog/gamesCatalog";
import Loading from "../loading/loading";

import styles from "./products.m.scss";

export default function Products() {
  const { games, isLoading, handleSearchInputChange } = useLoadingGamesCatalog();

  return (
    <Page title="Products">
      <div className={styles.productsContainer}>
        <div className={styles.filtersContainer} />

        <div className={styles.searchCatalogContainer}>
          <CatalogSearch handleInputChange={handleSearchInputChange} />
          <SectionWrapper heading="Products">{isLoading ? <Loading /> : <GamesCatalog games={games} />}</SectionWrapper>
        </div>
      </div>
    </Page>
  );
}
