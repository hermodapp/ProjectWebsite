import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import "tailwindcss/tailwind.css";

export default function Deliverable() {
  return (
    <div className="container">
      <Head>
        <title>Deliverables</title>
        <a rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <Link href="/">Back to Main Page</Link>
        </h1>
      </main>

      <Footer />
    </div>
  );
}
