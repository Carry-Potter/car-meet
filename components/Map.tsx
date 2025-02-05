import Image from 'next/image';
import mapa from '../app/gallery/mapa1.png'
export default function Map() {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src={mapa}
        alt="Mapa"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}