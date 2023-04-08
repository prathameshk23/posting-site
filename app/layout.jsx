import "./globals.css";
import Nav from "./auth/Nav";
import { Roboto } from "next/font/google"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const roboto = Roboto({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: "--font-roboto",
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-49 xl:mx-96 ${roboto.variable} bg-metal`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
