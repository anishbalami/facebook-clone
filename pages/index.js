import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";


export default function Home() {
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
