import { notFound } from "next/navigation";
import ProductList from "../../_lib/productList";

export async function generateMetadata({ params }, parent) {
  const {productId}= (await params) ?? ''
  return {
    title: `Product item: ${productId}`,
    description: `this is product item description: ${productId}`,
  }
}

export default async function ProductItem({params}) {
    const { productId } = await params ?? ''
    if(productId > 100){
        notFound()
    }
    return (
        <div>
            <h1> Welcome in Product Item: {productId} </h1>
            <ProductList />
        </div>
    );
}