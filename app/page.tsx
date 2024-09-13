import Image from "next/image";
import LeoImage from "../app/public/Annunciation-by-Leonardo-da-Vinci.jpg";
import Introduction from "./introduction";

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={LeoImage}
        alt="Annunciation by Leonardo Da Vinci"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-white text-center shadow-lg">
        Ars Sapientia
      </h1>
      {/*<Introduction />*/}
    </div>
  );
}
