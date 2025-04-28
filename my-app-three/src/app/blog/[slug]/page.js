

export default async function BlogSlug({params}) {
    const { slug } = await params
    return (
        <div>
            <h1> Welcome in All BlogSlug: {slug} </h1>
        </div>
    );
}