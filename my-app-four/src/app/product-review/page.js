export default async function ProductReviewPage(){
    await new Promise(resolve => setTimeout(resolve, 7000));
    return (
        <>
        <h1>Product Review Page</h1>
        </>
    )
}