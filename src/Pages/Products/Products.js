import { useQuery } from "@tanstack/react-query";
import Spinner from "../compoent/spinner/Spinner";
import ProductsView from "./Components/ProductsView";

const Products = () => {
  // const [products, setProducts] = useState([]);

  const {
    data: products = [],
    refetch,
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allProducts");
      const data = await res.json();
      return data;
    },
  });
  if (productsLoading) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        {products.map((product) => (
          <ProductsView key={product._id} product={product}></ProductsView>
        ))}
      </div>
    </div>
  );
};

export default Products;
