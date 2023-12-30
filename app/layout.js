import { Inter } from "next/font/google";
import "./globals.css";
import StepContext from "./StepContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kraitor",
  description: "Generate Books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={inter.className}>
        <StepContext>{children}</StepContext>
        </body>
      
    </html>
  );
}
