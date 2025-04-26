
export default function AuthLayout({ children }) {
  return (
  <>
    {children}
    <footer
        style={
          {
            color: 'white',
            fontSize: '20px',
            textAlign: 'center',
            backgroundColor: 'blue',
            height: '100px',
            width: '100%'
          }
        }
        >This is Footer section</footer>
    </>
  );
}
