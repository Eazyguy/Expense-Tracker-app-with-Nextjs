import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight:'400',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses and manage your budget with ease using our Expense Tracker app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={roboto.className}>
        <body>
          <Header />
          <main className="container">
            {children}
            </main>
            <ToastContainer/>
          </body>
      </html>
    </ClerkProvider>
  );
}
