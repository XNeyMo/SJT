import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "@styles/globals.css";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saijitan",
  description: "Find the best schedule for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={patrickHand.className}>{children}</body>
    </html>
  );
}
