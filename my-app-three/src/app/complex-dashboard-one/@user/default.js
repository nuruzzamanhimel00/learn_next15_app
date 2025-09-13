import Card from "@/components/Card";
import Link from "next/link";

export default function DefaultUser(){
    return (
        <Card>
            <h1>Default User Parallel Routing</h1>
            <Link href='/complex-dashboard-one/user-archive'>Go to User Archive</Link>
        </Card>
    )
}