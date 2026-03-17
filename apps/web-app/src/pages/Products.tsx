import { Button } from '@nx-monorepo/ui';

const products = [
  { id: 1, name: 'Wireless Headphones', price: '$79.99', category: 'Electronics' },
  { id: 2, name: 'Running Shoes', price: '$129.99', category: 'Footwear' },
  { id: 3, name: 'Backpack Pro', price: '$59.99', category: 'Accessories' },
  { id: 4, name: 'Smart Watch', price: '$199.99', category: 'Electronics' },
];

export function Products() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>📦 Products</h1>
        <p>Browse our curated selection of products.</p>
      </div>
      <div className="page-content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => alert(`Added ${product.name} to cart`)}
                  >
                    Add to Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
