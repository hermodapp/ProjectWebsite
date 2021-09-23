import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/aboutlayout";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <Header />
      <div classname="home">
        <Head>
          <title> About </title>
        </Head>
        <Layout />
      </div>
      <Footer />
    </>
  );
}
