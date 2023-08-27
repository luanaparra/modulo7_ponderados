import "./globals.css";
import { Inter, Lato } from "next/font/google";
import { AuthProvider } from "../context/AuthContext";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={lato.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
