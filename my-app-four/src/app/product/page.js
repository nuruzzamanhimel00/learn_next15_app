export default async function ProductPage(){
    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <>
        <h1>Product Page</h1>
        </>
    )
}