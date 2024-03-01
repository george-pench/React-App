import { useParams } from "react-router-dom";

export default function Products() {
  const { category } = useParams<{ category: string }>();

  return (
    <div>
      <h1>Products Page</h1>
      <p>Category: {category}</p>
    </div>
  );
}
