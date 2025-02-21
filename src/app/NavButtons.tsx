'use client'; // Add this directive at the top

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavButtons() {
    const pathname = usePathname();

    const tabs = [
        { id: 'about', path: '/', label: 'About' },
        { id: 'schedule', path: '/schedule', label: 'Schedule' },
        { id: 'speakers', path: '/speakers', label: 'Speakers' },
        { id: 'register', path: '/register', label: 'Register' },
        { id: 'team', path: '/team', label: 'Team' },
        { id: 'faq', path: '/faq', label: 'FAQ' },
        { id: 'contact', path: '/contact', label: 'Contact' },
        { id: 'conduct', path: '/conduct', label: 'Conduct' },
    ];

    return (
        <div className="button-container">
            {tabs.map((tab) => (
                <Link
                    key={tab.id}
                    href={tab.path}
                    className={`arcade-btn ${pathname === tab.path ? 'active' : ''}`}
                >
                    {tab.label}
                </Link>
            ))}
        </div>
    );
}