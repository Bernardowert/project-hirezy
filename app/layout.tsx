
import { Lato, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";



const lato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    style: ["normal", "italic"],
    display: "swap",
    weight:["400","700"]
})

const Jakarta = Plus_Jakarta_Sans({
    variable: "--font-Jakarta",
    subsets: ["latin"],
    style: ["normal", "italic"],
    display: "swap",
    weight:["400", "500", "600", "700"]
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${Jakarta.variable} font-jakarta antialiased`}
      >
        <Toaster richColors  />
        {children}
      </body>
    </html>
  );
}
