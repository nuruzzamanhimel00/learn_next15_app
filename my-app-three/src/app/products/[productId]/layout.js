export default function  ProductsLayout({ children }) {
        const randomBit = Math.floor(Math.random() * 2);

    if(randomBit === 0){
        throw new Error('Random error')
    }
    
    return <>
    {children}
    <h3>Product list is here</h3>
    </>
}