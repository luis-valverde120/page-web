import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

   const [location, setLocation] = useState(null);

  useEffect(() => {
    // Fetch los datos de la ubicación desde la API que creamos
    const fetchLocation = async () => {
      const response = await fetch('/api/location');
      const data = await response.json();
      setLocation(data);
    };

    fetchLocation();
  }, []);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
         <div>
      hola mundo
    </div>
      </div>
    </>
  );
}
