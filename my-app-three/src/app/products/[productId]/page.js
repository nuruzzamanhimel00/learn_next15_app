import { notFound } from "next/navigation";

export default async function ProductItem({params}) {
    const { productId } = await params ?? ''
    if(productId > 100){
        notFound()
    }
    return (
        <div>
            <h1> Welcome in Product Item: {productId} </h1>
        </div>
    );
}