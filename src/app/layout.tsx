import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

// Khai báo font Be Vietnam Pro
const beViet = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // Biến toàn cục
  variable: "--font-sans",
  // Tối ưu hiển thị
  display: "swap",
  preload: true,
  // Fallback chuẩn hệ thống
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "Liberation Sans",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Design System Starter",
  description: "Next.js + Storybook UI playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beViet.variable} suppressHydrationWarning>
      <body className="font-root" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
