import Card from "@/components/Card";
import Link from "next/link";

export default function UserArchive(){
    return (
        <Card>
            <h1>User User Archive</h1>
            <Link href='/complex-dashboard-one'>Go to Conplex Dashboard</Link>
        </Card>
    )
}