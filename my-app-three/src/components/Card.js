export default function Card({children}){
    const styles = {
        padding:'100px',
        textAlign:'center',
        border: '2px solid #000',
        margin: '10px'
    }
    return (
        <div style={styles}>
            {children}
        </div>
    )
}