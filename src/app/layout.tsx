import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin", "vietnamese"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Thang Máy Tín An - Nâng Tầm Di Sản Ngôi Nhà Việt",
    description: "Giải pháp thang máy may đo riêng cho gia chủ xứ Nghệ. An toàn tuyệt đối - Đẳng cấp thượng lưu.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={`${montserrat.variable} ${montserrat.className}`}>{children}</body>
        </html>
    );
}
