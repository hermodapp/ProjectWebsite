import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header class="text-nord3 font-medium body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a class="flex title-font font-medium items-center text-nord3 mb-4 md:mb-0">
            <Image
              src="/images/hermod.svg"
              className="w-14 h-14 text-white p-0 rounded-full"
              width={56}
              height={56}
            />
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
