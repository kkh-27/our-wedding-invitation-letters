import type { Metadata } from "next";
import "@fontsource/noto-sans-myanmar/myanmar-400.css";
import "@fontsource/noto-sans-myanmar/myanmar-600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "မင်္ဂလာဖိတ်စာ",
  description: "မင်္ဂလာဧည့်ခံပွဲအတွက် ဒစ်ဂျစ်တယ်ဖိတ်စာ။",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="my">
      <body>{children}</body>
    </html>
  );
}
