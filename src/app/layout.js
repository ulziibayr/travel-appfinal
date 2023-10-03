import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { UserStore } from "./context/userContext";
import Sidebar from "./partials/sidebar";
import Header from "./partials/header";
import Login from "./pages/Login/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ultimate",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        {"" == "1" ? (
          <Login />
        ) : (
          <div className="flex relative h-screen overflow-hidden bg-body">
            <UserStore>
              <Sidebar />
              <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header />
                <div className="p-4 h-screen w-full">
                  <Providers>{children}</Providers>
                </div>
              </div>
            </UserStore>
          </div>
        )}
      </body>
    </html>
  );
}
