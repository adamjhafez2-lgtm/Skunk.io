import FlipCard from '@/components/FlipCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/skunk-logo.png"
              alt="Skunk.io Logo"
              width={150}
              height={150}
              className="filter brightness-0 invert"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 panicko-font">
            SKUNK.IO
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Welcome to Skunk.io
          </p>
          <p className="text-lg text-gray-400 mb-12">
            A Discord bot made for luxury and excellence.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <FlipCard />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300">
            Contact <span className="font-semibold">PParano1a_</span> On Discord For Bot Code Or Products..
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Credits</h2>
          <div className="space-y-3 text-gray-300">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="font-semibold">Current Ownership:</span>
              <span>Adam.j</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="font-semibold">Design & Ideas:</span>
              <span>Amy</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="font-semibold">Main Coder:</span>
              <span>Adam.j</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="font-semibold">Second Coder:</span>
              <span>Jake</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="font-semibold">Third Coder:</span>
              <span>Omar</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="font-semibold">Frontend:</span>
              <span>Jake</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="font-semibold">Backend:</span>
              <span>Adam.j</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Bug Fixer:</span>
              <span>Adam.j & Omar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
