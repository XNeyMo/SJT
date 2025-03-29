import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAIJITAN",
  description: "Get the best schedule for your classes",
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
