import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api'; // import fetch function

function ProductsListComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts(); 
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products-list">
        {products.map(p => (
          <p key={p.id}>{p.name}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductsListComponent;