import { Palette, Atom, LandPlot, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Tiziano from "../app/public/kristijan-arsov-r4vMbMWPrUk-unsplash.jpg";

export default function Introduction() {
  return (
    <div className="relative z-10 ">
      <div className="max-w-3xl mx-auto text-center mt-10">
        <Image
          src={Tiziano}
          alt="Tiziano"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <h1 className="text-4xl font-bold mb-4 text-purple-800">
          Explore the World of Knowledge
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Dive into a universe of art, science, politics, and philosophy. Expand
          your horizons and discover new perspectives.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex flex-col items-center">
            <Palette className="w-12 h-12 text-pink-500" />
            <span className="mt-2 text-sm font-medium">Art</span>
          </div>
          <div className="flex flex-col items-center">
            <Atom className="w-12 h-12 text-blue-500" />
            <span className="mt-2 text-sm font-medium">Science</span>
          </div>
          <div className="flex flex-col items-center">
            <LandPlot className="w-12 h-12 text-blue-500" />
            <span className="mt-2 text-sm font-medium">Politics</span>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-yellow-500" />
            <span className="mt-2 text-sm font-medium">Philosophy</span>
          </div>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full text-lg">
          Start Learning
        </Button>
      </div>
    </div>
  );
}
