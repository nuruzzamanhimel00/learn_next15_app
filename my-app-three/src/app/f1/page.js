import Link from "next/link";

export default function F1() {
    return (
        <>
        <h1>F1 Page</h1>
        <Link href="/f1/f2">Go to F2</Link> <br></br>
        <Link href="/f3">Go to F3</Link><br></br>
        <Link href="/f5">Go to F5</Link><br></br>
        <Link href="/f1/f1-route">Go to F1 Route</Link><br></br>
        </>
    )
}