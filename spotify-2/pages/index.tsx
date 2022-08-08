import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { getSession, GetSessionParams } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/*player*/}</div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}