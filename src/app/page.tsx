import { HeroSearchBar } from "@/components/HeroSearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center">
        <Image
          src="/hero.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        <h1 className="text-5xl pt-28 font-bold text-white mb-4 z-10">
          Discover the Best Layover Spots
        </h1>
        <p className="text-xl text-white mb-8 z-10">
          Handpicked by airline crews, just for you
        </p>

        {/* Search Bar */}
        <div className="relative w-[80%] max-w-xl z-10">
          <HeroSearchBar />
        </div>
      </div>

      {/* Rest of the landing page content can go here */}
    </div>
  );
}
