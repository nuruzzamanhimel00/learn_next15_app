import Link from "next/link";

export default function InterceptingF2() {
    return (
        <>
        <h1>(,) intersepting F2 Page</h1>
        <Link href="/f1">Go to F1</Link> <br></br>
        <Link href="/f4">Go to F4</Link> <br></br>
        </>
    )
}