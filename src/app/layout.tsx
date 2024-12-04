import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", poppins.variable)}
      >
        <main className="relative flex flex-col min-h-screen">
            <Navbar/>
           <div className="flex-grow flex-1">{children}</div> </main>
      </body>
    </html>
  );
}
