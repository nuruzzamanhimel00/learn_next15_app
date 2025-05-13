'use client'
 
import { useSearchParams } from 'next/navigation'
export default function ArticleItems({params}) {
  const searchParams = useSearchParams()
  const articleId = params.articleId ;
 
  const query = searchParams.get('query')
  return (
    <div>
      <h1>Welcome to Article Items: {articleId}</h1>
      <p>Query Params: {query}</p>
    </div>
  );
}
