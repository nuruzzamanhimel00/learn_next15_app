export default function ComplexPageLayout({ children, message }) {
    return (
        <>
            {/* <h3>Complex Page Layout</h3> */}
            {children}
            <hr></hr>
            {message}
            <hr></hr>
        </>
    );
}