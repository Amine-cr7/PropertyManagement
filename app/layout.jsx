import { Poppins } from "next/font/google";
import "@/assets/styles/main.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "",
};

export default function MainLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" className={poppins.variable}>
        <body className="font-sans antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
