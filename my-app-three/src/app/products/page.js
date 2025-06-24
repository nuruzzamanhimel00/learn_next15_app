import ProductList from "../_lib/productList.js"
export const metadata = {
  title: 'Welcome to Products',
  description: 'lorem ipsum description',
}
export default function Products() {
    
    return (
        <div>
            <h1> Welcome in Products </h1>
            <ProductList />
        </div>
    );
}