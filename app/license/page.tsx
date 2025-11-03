'use client';

import { useEffect, useState } from 'react';

export default function License() {
  const [licenseText, setLicenseText] = useState('Loading...');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ddds179/Skunk.io/main/LICENSE')
      .then((response) => response.text())
      .then((text) => setLicenseText(text))
      .catch((error) => {
        console.error('Error fetching license:', error);
        setLicenseText('Error loading license. Please try again later.');
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center panicko-font">
          LICENSE
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
          <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">
            {licenseText}
          </pre>
        </div>
      </div>
    </div>
  );
}
