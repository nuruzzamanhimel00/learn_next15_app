
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <header style={
          {
            color: 'white',
            fontSize: '20px',
            textAlign: 'center',
            backgroundColor: 'red',
            height: '100px',
            width: '100%'
          }
        }>
          This is header seection Auth
        </header>
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
      </body>
    </html>
  );
}
