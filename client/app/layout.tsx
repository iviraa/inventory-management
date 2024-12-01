import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "./DashboardWrapper";

export const metadata: Metadata = {
  title: "SneakerX",
  description: "Inventory management for SneakerX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
