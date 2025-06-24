'use client'
 
import { useRouter } from 'next/navigation'

export default function OrderProduct(){
    const router = useRouter();
    const redirectHomePage = () => {
        if(confirm('Are you sure?')){

            router.push('/');
        }
    }
    return (
        <>
        <h1>Order Products</h1>
        <button onClick={redirectHomePage}>Go TO homepage</button>
        </>
    )
}