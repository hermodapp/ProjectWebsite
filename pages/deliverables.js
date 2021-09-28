import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import "tailwindcss/tailwind.css";

export default function Deliverables() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Deliverables</title>
        <a rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section class="text-nord3 body-font flex-grow">
        <div class="container px-5 py-24 mx-auto ">
          <div class="text-center mb-6">
            <h1 class="text-4xl font-medium text-center title-font text-nord2 mb-4">
              Deliverables
            </h1>
            <p class="text-nord3 text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              All the required deliverables are downloadable here.
            </p>
          </div>
          <div class="flex justify-between flex-wrap m-4 items-start mx-40">
            <div class="flex flex-col items-center p-3 lg:w-1/3 w-full justify-center">
              <h2 class="font-medium title-font tracking-widest text-nord2 mb-4 text-base text-center sm:text-left">
                PRESENTATIONS
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a
                  href="/presentations/ProjectPresentation.pptx"
                  class="focus:outline-none hover:underline"
                >
                  <span class="bg-nord10 text-nord6 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  First Presentation
                </a>
              </nav>
            </div>
            <div class="flex flex-col items-center justify-center p-3 lg:w-1/3 w-full">
              <h2 class="font-medium title-font tracking-widest text-nord2 mb-4 text-base text-center sm:text-left">
                SPRINTS AND BACKLOG
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a
                  href="/sprint/Daily%20Standups.docx"
                  class="focus:outline-none hover:underline"
                >
                  <span class="bg-nord10 text-nord6 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Daily Standups
                </a>
                <a
                  href="/sprint/Project%20Backlog.xlsx"
                  class="focus:outline-none hover:underline"
                >
                  <span class="bg-nord10 text-nord6 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Project Backlog
                </a>

                <a
                  href="/sprint/Sprint%201%20Backlog.docx"
                  class="focus:outline-none hover:underline"
                >
                  <span class="bg-nord10 text-nord6 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Sprint 1 Backlog
                </a>
              </nav>
            </div>

            <div class="flex flex-col items-center justify-center p-3 lg:w-1/3 w-full">
              <h2 class="font-medium title-font tracking-widest text-nord2 mb-4 text-base text-center sm:text-left">
                SOURCE CODE
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a
                  href="https://github.com/hermodapp"
                  class="focus:outline-none hover:underline"
                >
                  <span class="bg-nord10 text-nord6 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  GitHub
                </a>
                <a
                  href="https://hermodapp.github.io/rustdocs/hermodapi/"
                  class="focus:outline-none hover:underline"
                >
                  <span class="bg-nord10 text-nord6 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Rust API Documentation
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
