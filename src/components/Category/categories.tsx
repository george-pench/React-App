import { useNavigate } from "react-router-dom";
import categoryData from "../../constants/categories";
import styles from "./categories.m.scss";

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/products/${categoryName.toLowerCase()}`);
  };

  return (
    <div className={styles.categoryContainer}>
      {categoryData.map((category) => (
        <div
          key={category.name}
          className={styles.categoryCard}
          tabIndex={0}
          onClick={() => handleCategoryClick(category.name)}
          onKeyDown={(e) => e.key === "Enter" && handleCategoryClick(category.name)}
          role="button"
          aria-label={`Select ${category.name} category`}
        >
          <img className={styles.categoryImage} src={category.imgSrc} alt={category.name} />
          <div className={styles.imageText}>{category.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
