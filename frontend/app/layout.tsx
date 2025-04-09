'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { NotificationsProvider } from "@toolpad/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standardInfo: {
          backgroundImage: 'linear-gradient(135deg, #FEECE3 0%, #FCD5BF 25%, #FEAFAE 50%, #FFA4BD 75%, #FFA9CC 100%)',
          color: "#040509",
          '& .MuiAlert-icon': {
            color: "#040509",
          },
        },
      },
    },
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <NotificationsProvider
            slotProps={{
              snackbar: {
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "right",
                },
              }
            }}
          >
            {children}
          </NotificationsProvider>
        </ThemeProvider>
      </body >
    </html >
  );
}
