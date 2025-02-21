// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavButtons from './NavButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Arcade Event',
    description: 'Retro-themed event platform',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="arcade-container">
            <div className="shelf">
                {/* Shelf SVG */}
                <img
                    src="/shelf_right.svg"
                    alt="Arcade shelf"
                    className="shelf-svg"
                />
                <NavButtons />
            </div>

            <div className="tv-screen">
                {/* TV SVG */}
                <img
                    src="/tv.svg"
                    alt="CRT TV"
                    className="tv-svg"
                />
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}