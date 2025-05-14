import { Suspense } from 'react'
export default async function Blog() {
    
    return (
        <div>
            <Suspense fallback={<p>Loading feed...</p>}>
                <h1> Welcome in All Blog</h1>
            </Suspense>
        
        </div>
    );
}