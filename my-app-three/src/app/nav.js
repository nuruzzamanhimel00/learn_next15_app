'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
 

export default function Nav(){
    const pathname = usePathname()

    const links = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/products", label: "Products" },
    ];
    //   console.log('pathname',pathname)
    return (
        <>
          <nav>
             <ul
                style={{
                display: "flex",
                gap: "20px",
                flexDirection: "row",
                listStyle: "none",
                }}
            >
                {links.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                    <li key={href}>
                    <Link
                        href={href}
                        style={{
                        color: isActive ? "red" : "black",
                        textDecoration: isActive ? "underline" : "none",
                        }}
                    >
                        {label}
                    </Link>
                    </li>
                );
                })}
            </ul>
        </nav>
        </>
    );
}