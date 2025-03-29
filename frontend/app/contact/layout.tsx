import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAIJITAN | Contact",
  description: "Contact us for any questions or feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
