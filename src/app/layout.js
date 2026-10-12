import "./globals.css";
import { Rubik } from "next/font/google";

import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import "animate.css";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Switcher from "./component/switcher";
import PageLoaderProvider from "./providers/PageLoaderProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

const siteDescription =
  "Senior UI/UX Designer and Frontend Developer with 15+ years of experience designing and building B2B SaaS platforms, dashboards, and enterprise web applications.";

export const metadata = {
  title: {
    default: "Sachin Jadhav | Senior UI/UX Designer & Frontend Developer",
    template: "%s | Sachin Jadhav",
  },
  description: siteDescription,
  keywords: [
    "Sachin Jadhav",
    "UI/UX Designer",
    "Frontend Developer",
    "B2B SaaS Design",
    "Dashboard Design",
    "Figma",
    "Design Systems",
    "React",
    "Pune",
  ],
  authors: [{ name: "Sachin Jadhav" }],
  creator: "Sachin Jadhav",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sachin Jadhav",
    title: "Sachin Jadhav | Senior UI/UX Designer & Frontend Developer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Jadhav | Senior UI/UX Designer & Frontend Developer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="LTR"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`
          ${rubik.variable}
          font-[var(--font-rubik)]
          text-base text-slate-900
          dark:text-white dark:bg-slate-800
        `}
      >
        {/*
          Resolves the saved theme (light / dark) and applies it before anything
          paints, so there is no flash of the wrong theme on load.

          The OS preference is deliberately not consulted: this site has two
          explicit modes and defaults to light.

          Kept inline and tiny because it has to run before first paint. It
          mirrors applyTheme() in providers/ThemeProvider.jsx — keep the two in
          step if the logic ever changes.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var k=localStorage.getItem('theme');var d=k==='dark';var r=document.documentElement;r.classList.toggle('dark',d);r.dataset.theme=d?'dark':'light';r.style.colorScheme=d?'dark':'light';}catch(e){}})();",
          }}
        />

        <ThemeProvider>
          <PageLoaderProvider>
            <Navbar />
            {children}
            <Footer />
            <Switcher />
          </PageLoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
