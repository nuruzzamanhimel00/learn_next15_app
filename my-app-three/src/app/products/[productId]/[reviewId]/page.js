import { redirect } from 'next/navigation'

export default async function ProductReviewItem({params}) {
    // const randomBit = Math.floor(Math.random() * 2);

    // if(randomBit === 0){
    //     throw new Error('Random error')
    // }
    const { productId, reviewId } = await params
    if(reviewId > 100){
        redirect('/')
    }
    return (
        <div>
            <h1> Welcome in Product Item: {productId} and review id {reviewId}</h1>
        </div>
    );
}