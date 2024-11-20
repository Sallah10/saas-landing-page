// import localFont from "next/font/local";
import "./globals.css";
import Footer from "./footer"
import Header from "./header"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "SAAS Landing Page",
  description: "A SAAS Landing Page Created By Sallah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="container px-0 mx-auto bg-[#060B27]"
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
