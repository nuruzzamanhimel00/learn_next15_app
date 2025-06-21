// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_lib/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header style={{
          color: 'white',
          fontSize: '20px',
          textAlign: 'center',
          backgroundColor: 'red'
        }}>
          <h1>My App</h1>
        </header>
        <Nav />
        <main>{children}</main>
        <footer style={{
          color: 'white',
          fontSize: '20px',
          textAlign: 'center',
          backgroundColor: 'red'
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
