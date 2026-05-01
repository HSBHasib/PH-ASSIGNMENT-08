import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import Footer from "@/components/HomePage/Footer/Footer";
import { ToastContainer } from "react-toastify";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: "Tiles Gellary is one the best bangladesh tiles brand",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.className} h-full antialiased`}
    >
      <body className="max-w-300 mx-auto min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />

        <ToastContainer />
      </body>
    </html>
  );
}
