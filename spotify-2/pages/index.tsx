import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black h-screen overflow-hidden">
        <Sidebar/>
        {/*main*/}
      </main>
     <div>{/*player*/}</div> 
    </div>
  );
};

export default Home;
