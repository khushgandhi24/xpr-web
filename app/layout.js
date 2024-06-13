import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Xpresion - Efficient Courier & Cargo Management Software | Streamlining your Logistics & Operations",
  description:
    "Discover Xpresion, the ultimate management software for courier, cargo, and logistics companies. Streamline daily operations, simplify billing, and enhance Track-n-Trace functionality. Transform your business today with Xpresion!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
