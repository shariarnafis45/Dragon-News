import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4'])

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dragon-News | Home",
  description: "News Portal Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
