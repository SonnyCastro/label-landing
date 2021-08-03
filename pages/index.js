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
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="flex flex-col items-center justify-center bg-primary min-h-screen py-2 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col items-center justify-center w-full  flex-1 px-5 md:px-20 text-center">
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

        <div className="max-w-testing ">
          <p className="mt-6 font-Inconsolata font-medium text-6xl ">
            Music as usual.
          </p>
          <span className="mt-6 font-Inconsolata font-medium text-6xl ">
            Publishing like never before.
          </span>
          <div className="w-3/4 mx-auto m-20 ">
            <p className="font-Inconsolata font-normal text-4xl">
              Label is the next big change in the music industry. Through a
              decentralized, user-owned, crypto-based network, Label’s
              publishing platform revolutionizes the way we express, share and
              monetize our thoughts.
            </p>
          </div>
          <div className="flex flex-col space-y-8 mb-20">
            <button className="cursor-pointer w-80 h-24 mx-auto rounded-3xl bg-black text-white font-Inconsolata font-normal text-5xl">
              Sign Up
            </button>
            <button className="cursor-pointer w-80 h-16 text-4xl mx-auto rounded-xl bg-green text-black font-Inconsolata font-normal">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
