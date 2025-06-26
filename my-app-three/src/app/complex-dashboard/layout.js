import styles  from "./style.module.css"
export default function ComplexDashboardLayout({ children, notification, revenue, user }) {

    return <>
    <div>
        {children}
        <div style={
            {
                display: 'flex',
                justifyContent: 'space-around'
            }
        } >
            <div
            className={styles.cart}
            style={
                {
                    backgroundColor: 'red',
                    color: '#fff'
                }
            }
            >{notification}</div>
            <div
            className={styles.cart}
            style={
                {
                    backgroundColor: 'green',
                    color: '#fff'
                }
            }
            >{revenue}</div>
        </div>
        <div >
            <div className={styles.cart}
            style={
                {
                    backgroundColor: 'blue',
                    color: '#fff',
                    margin: '5px auto'
                }
            }>{user}</div>
        </div>
    </div>
    </>
}