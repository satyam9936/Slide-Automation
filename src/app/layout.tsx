import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'


const jakarta=Plus_Jakarta_Sans({subsets:['latin']})

export const metadata: Metadata = {
  title: "Slide",
  description: "Automations DM and Comments on Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
         <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
    </ClerkProvider>
 
  );
}
