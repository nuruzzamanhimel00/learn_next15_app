export default function ProductsLayout({ children }) {
    return (
        <>
            <div style={{
                textAlign: 'center',
                backgroundColor: 'green'
            }}>

                <h3>Products Layout Header</h3>
            </div>
            {children}
        </>
    );
}