export default async function Docs({params}) {
    const { slug } = await params ?? ''
    console.log('slug',slug)
    return (
        <div>
            <h1> Welcome in Docs 
                <ul>
                    { slug.length > 0 && slug.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                 </h1>
        </div>
    );
}