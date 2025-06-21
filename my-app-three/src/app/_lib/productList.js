import Link from "next/link";

export default function ProductList(){
    return (<>
    <ul>
                <li><Link href="/products/1">Product 1</Link></li>
                <li><Link  href="/products/2">Product 2</Link></li>
                <li><Link href="/products/3">Product 3</Link></li>
            </ul>
    </>)
}