import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';



export const metadata = {
  title: "Vocabulary App",
  description: "Start",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
