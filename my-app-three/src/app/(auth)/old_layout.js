'use client'
import { useState } from "react"
import Link from "next/link";

export default function AuthLayout({ children }) {
    const [input, setInput] = useState("")
    return (
        <div>
            <input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
            <ul style={{
                display: "flex",
                gap: "20px",
                flexDirection: "row",
                listStyle: "none",
            }}>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </ul>
            {children}
        </div>
    );
}