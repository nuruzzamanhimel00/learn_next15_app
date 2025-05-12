export default async function ProductItem({params}) {
    const { productId } = await params
    return (
        <div>
            <h1> Welcome in Product Item: {productId} </h1>
        </div>
    );
}