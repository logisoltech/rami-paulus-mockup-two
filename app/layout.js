import { Montserrat, Playfair_Display } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "We Clean ABA | Environmental Infrastructure for Growing Clinics",
  description:
    "We help ABA operators create calmer, more consistent clinic environments so staff stay regulated, parents stay confident, and leadership stays focused on growth.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className={`${montserrat.className} min-h-full bg-background font-sans text-foreground`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
