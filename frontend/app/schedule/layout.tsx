import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAIJITAN - The Best Class Scheduler",
  description: "Optimize your schedule with SAIJITAN. Get the best timetable for your classes efficiently.",
  openGraph: {
    title: "SAIJITAN - The Best Class Scheduler",
    description: "Optimize your schedule with SAIJITAN. Get the best timetable for your classes efficiently.",
    url: "https://saijitan.netlify.app",
    siteName: "SAIJITAN",
    images: [
      {
        url: "https://saijitan.netlify.app/icons/logo.svg",
        width: 1200,
        height: 630,
        alt: "SAIJITAN Schedule Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tu_usuario",
    title: "SAIJITAN - The Best Class Scheduler",
    description: "Optimize your schedule with SAIJITAN. Get the best timetable for your classes efficiently.",
    images: ["https://saijitan.netlify.app/icons/logo.svg"],
  },
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
