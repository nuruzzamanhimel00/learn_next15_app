export default async function ProductReviewItem({params}) {
    const { productId, reviewId } = await params
    return (
        <div>
            <h1> Welcome in Product Item: {productId} and review id {reviewId}</h1>
        </div>
    );
}