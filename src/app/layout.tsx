import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import DesktopSidebar from "@/components/DesktopSidebar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/provider/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Ashmin Sharma",
  description: "Showcasing Code, Design and Projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className=" dark:bg-gradient-to-t dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-t from-white to-slate-50
         dark:text-gray-300 text-gray-900 h-fit overflow-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              {children}
              <Toaster
                toastOptions={{
                  style: {
                    background: "black",
                    color: "white",
                  },
                }}
              />

            </AuthProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
