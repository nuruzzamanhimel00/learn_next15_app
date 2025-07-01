import Link from "next/link";

export default function InterceptingF4() {
    return (
        <>
        <h1>Intercepting F4 Page</h1>
        <Link href="/f1/f2">Go to F2</Link>
        </>
    )
}