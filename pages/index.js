import Header from "@/components/Header";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import { getSession } from "next-auth/react";
import Head from "next/head";


export default function Home({ session }) {
  if(!session) return <Login />;
  return (
   <div>
    <Head>
      <title>Facebook clone</title>
    </Head>
    <Header />
    <main className="flex bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar />
      {/* Feed (Create Post and Posts) */}
      {/* Right SideBar */}
    </main>
   </div> 
  );
}

export async function getServerSideProps(context)
{
  const session = await getSession(context);
  return {
    props: { session },
  };
}