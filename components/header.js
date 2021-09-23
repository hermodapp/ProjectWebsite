import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Header() {
  return (
    <header class="text-nord3 font-medium body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a class="flex title-font font-medium items-center text-nord3 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-2xl">Hermod</span>
          </a>
        </Link>

        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about">
            <a class="mr-5 text-nord3 hover:bg-nord6">About</a>
          </Link>
          <Link href="/deliverables">
            <a class="mr-5 text-nord3 hover:bg-nord6">Deliverables</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
