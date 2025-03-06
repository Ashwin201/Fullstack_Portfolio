import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import DesktopSidebar from "@/components/DesktopSidebar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/provider/AuthProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700", "900"] });

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
        <body className={`${poppins.className} dark:bg-gradient-to-t dark:from-zinc-900 dark:to-gray-950  bg-gradient-to-t from-white to-zinc-50
         dark:text-gray-300 text-gray-900 h-fit overflow-hidden`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
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
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
