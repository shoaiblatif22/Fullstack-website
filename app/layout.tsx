import React from "react";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export const metadata = {
  title: "Urban Pet - Premium Pet Supplies & Accessories",
  description: "Discover premium pet accessories, food, and supplies for your beloved furry friends."
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>;
}