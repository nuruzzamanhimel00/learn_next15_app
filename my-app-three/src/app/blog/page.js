import { Suspense } from 'react'
export default async function Blog() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div>
            {/* <Suspense fallback={<p>Loading feed...</p>}>
                <h1> Welcome in All Blog</h1>
            </Suspense> */}
            <h1> Welcome in All Blog</h1>
        </div>
    );
}