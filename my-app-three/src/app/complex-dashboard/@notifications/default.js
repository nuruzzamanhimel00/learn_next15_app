import Card from "@/components/Card";
import Link from "next/link";

export default function DefaultNotifications(){
    return (
        <Card>
            <h1>Defalt notification Parallel Routing</h1>
            <Link href='/complex-dashboard/toster-notificaton'>Go Toster Notificaiton</Link>
        </Card>
    )
}