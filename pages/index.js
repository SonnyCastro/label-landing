import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
  });

  return (
    <div className="flex flex-col items-center justify-center bg-primary min-h-screen  ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col items-center justify-start w-full flex-1 px-5 md:px-20 text-center">
        {isMobile ? (
          <div className="mx-auto" style={{ width: "340px", height: "340px" }}>
            <iframe
              src="https://my.spline.design/acidsmiley340x340-8f0dbf83a63886734fd3f2f404c6531e/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        ) : (
          <div className="mx-auto " style={{ width: "400px", height: "400px" }}>
            <iframe
              src="https://my.spline.design/acidsmiley400x400-2af17c9e7a56fe7b899c177541d469c6/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        )}

        <div className="w-full ">
          <p className=" p-2.5 font-Inconsolata font-medium text-2xl md:text-6xl ">
            Fair Music Discovery
          </p>
          <p className=" w-xs md:w-full p-2.5 mx-auto font-Inconsolata font-normal text-lg md:text-4xl">
            A new type of music industry built on Ethereum.
          </p>

          <div className="flex flex-col items-center justify-center">
            <button className="cursor-pointer m-6 md:m-12 w-40 md:w-72 h-9 md:h-16 mx-auto rounded-3xl bg-black text-white font-Inconsolata font-normal text-base md:text-3xl">
              Sign Up
            </button>
            <button className="cursor-pointer w-28 md:w-60 h-6 md:h-16 text-sm md:text-2xl  mx-auto rounded-xl bg-green text-black font-Inconsolata font-normal">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
