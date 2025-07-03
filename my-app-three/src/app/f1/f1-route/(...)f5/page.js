import Link from "next/link";

export default function InteerceptingF5() {
    return (
        <>
        <h1>(...) intercepting route F5 Page</h1>
        <Link href="/f1">Go to F1</Link>
        <Link href="/f5">Go to F5</Link>
        </>
    )
}