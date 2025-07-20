import ProductPage from "./product/page.js"
import ProductReviewPage from "./product-review/page.js"
import { Suspense } from 'react'

export default function HomePage(){
  return (
    <>
      Home page <br/>
      <Suspense fallback={<p>Loading Product feed...</p>}>
      <ProductPage /> 
      </Suspense>
      <Suspense fallback={<p>Loading Product Review feed...</p>}>
      <ProductReviewPage />
      </Suspense>
     </>
  )
}