export default function PhotoFeedLayout({ children, modal }) {
    return (
        <div>
            <h1>Photo Feed</h1>
            {children}
            {modal}
        </div>
    )
}