import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SP-code",
  description: "Информационный портал для молодых программистов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className + ' w-full bg text-white text-base'}>
        <div className="__next">
          <div className="w-full  flex">
            <div className="w-full ">
              <Header />
              <main className="w-full" id="main">
                <div className="w-full" id="main-content">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}