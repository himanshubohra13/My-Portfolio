import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainMono = JetBrains_Mono({ subsets: ["latin"],weight:['100','200','300','400','500','600','700','800'],variable:'--font-jetbrainsMono' });

export const metadata = {
  title: "Himanshu Bohra",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={jetbrainMono.variable}>
            <Header></Header>
            <StairTransition/>
            <PageTransition>
                {children}
            </PageTransition>
            
        </body>
    </html>
  );
}
