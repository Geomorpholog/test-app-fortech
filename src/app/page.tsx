import { Fragment } from "react";
import kitten from "./assets/images/kitten.png"
import Image from 'next/image'


export default function Home() {
  return (

    <div className="w-full ml-[500px] min-h-screen bg-sky-100 inline-block flex flex-col justify-center items-center">
      <Image src={kitten} alt="some logo" sizes="100vw" priority={true}

        style={{
          width: '20%',
          height: 'auto',
          margin: '25px auto'
        }} />
      <p className="animate-bounce">This kitten waitin some food like this page waiting some content</p>

    </div>

  );
}
