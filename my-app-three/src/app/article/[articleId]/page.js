export default function ArticleItems({ params, searchParams }) {
  const articleId = params.articleId;
  const query = searchParams?.query || '';

  return (
    <div>
      <h1>Welcome to Article Items: {articleId}</h1>
      <p>Query Params: {query}</p>
    </div>
  );
}
