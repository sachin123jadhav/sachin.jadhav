import "./globals.css";
import { Rubik } from "next/font/google";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import "animate.css";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Switcher from "./component/switcher";
import PageLoaderProvider from "./providers/PageLoaderProvider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik", // ✅ FIXED
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR" className="light scroll-smooth">
      <body
        className={`
          ${rubik.variable}
          font-rubik
          text-base text-slate-900
          dark:text-white dark:bg-slate-900
        `}
      >
        <PageLoaderProvider>
          <Navbar />
          {children}
          <Footer />
          <Switcher />
        </PageLoaderProvider>
      </body>
    </html>
  );
}
