'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
 

export default function Nav(){
    const pathname = usePathname()

    const links = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/products", label: "Products" },
        { href: "/product-checkout", label: "Product Checkout" },
        { href: [
            "/login",'/register'
        ], label: "Auth" },
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
                  
                    const pathWithoutQuery = Array.isArray(href) ? href[0].split('?')[0] : href.split('?')[0];
                    const pathnameData = pathname.split('?')[0];
                    const hrefRemake  = Array.isArray(href) ? href[0].split('?')[0] : href;
                    // Check if the current path matches the href
                    console.log('pathname',pathname)
                    const isActive =  Array.isArray(href) ? href.includes(pathnameData) : pathWithoutQuery === pathname;
                    
                    return (
                        <li key={hrefRemake}>
                        <Link
                            href={hrefRemake}
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