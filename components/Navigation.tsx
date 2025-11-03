'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/credits', label: 'Credits' },
    { href: '/license', label: 'License' },
  ];

  return (
    <nav className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/skunk-logo.png"
              alt="Skunk.io"
              width={40}
              height={40}
              className="filter brightness-0 invert"
            />
            <span className="text-xl font-bold panicko-font">SKUNK.IO</span>
          </Link>

          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.href
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
