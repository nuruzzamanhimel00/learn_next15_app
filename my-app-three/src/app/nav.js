'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
 

export default function Nav(){
    const pathname = usePathname()

    const links = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/products", label: "Products" },
        { href: "/article/article-name-123?query=params-123", label: "Articles-123" },
        { href: "/article/article-name-4567?query=params-4567", label: "Articles-4567" },
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
                  // Remove query parameters for comparison
                    const pathWithoutQuery = href.split('?')[0];
                    // console.log('pathWithoutQuery',pathWithoutQuery)
                    // Check if the current path matches the href
                    const isActive = pathWithoutQuery === pathname ;
                    
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