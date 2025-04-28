import { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata({ params }) {
    // Read route params
    const { slug } = params;

    // Simulate an asynchronous operation (e.g., fetching data)
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // Return metadata
    return {
        title: `Blog SLUG: ${slug}`,
    };
}

// Default layout for the blog
export default function BlogLayout({ children }) {
    return (
        <>
            <h3>Blog SLUG Layout</h3>
            {children}
        </>
    );
}