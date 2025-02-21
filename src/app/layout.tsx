'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const NavButtons = dynamic(() => import('./NavButtons'), {ssr: false});
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children,
    }: {children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} arcade-root`}>
        <div className={"arcade-machine"}>
            <div className={"shelf-container"}>
                <div className={"shelf-overlay"}>
                    <Image
                        src={"/shelf_right.svg"}
                        alt={"Arcade controls shelf"}
                        width={110}
                        height={258}
                        className="shelf-bg"
                        priority
                        unoptimized
                    />
                    <NavButtons/>
                </div>
            </div>

            <div className={"crt-container"}>
                <div className={"crt-overlay"}>
                    <Image
                    src="/tv.svg"
                    alt="CRT Screen"
                    width={210}
                    height={170}
                    className="crt-bg"
                    priority
                    unoptimized
                    />
                    <main className="crt-content">
                        {children}
                        <div className="scanlines" />
                        <div className="glow-effect" />
                    </main>
                </div>
            </div>

        </div>
        </body>
        </html>
    );
}