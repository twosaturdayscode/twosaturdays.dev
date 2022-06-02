import Head from "next/head";
import Link from "next/link";

import { DribbleIcon, LinkedinIcon, InstagramIcon } from "../Icons";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto flex h-full w-full flex-col justify-between bg-[#FFFFFA] px-6 pt-16 text-zinc-800 selection:bg-yellow-400 lg:px-40 xl:px-80">
        <div className="flex flex-col gap-9">
          <div className="flex w-full flex-col items-center justify-between gap-5 px-2 sm:flex-row sm:items-end">
            <header className="flex w-full flex-col-reverse gap-2">
              <Link href={"/"}>
                <a>
                  <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-logo text-3xl text-transparent sm:text-5xl">
                    twosaturdays.dev
                  </h1>
                </a>
              </Link>
              <p className="">Welcome to</p>
            </header>
            <nav className="flex flex-row gap-5">
              <Link href={"/"}>
                <a className="decoration-pink-500 decoration-4 underline-offset-1 hover:underline">
                  Home
                </a>
              </Link>
              <Link href={"/projects"}>
                <a className="decoration-red-500 decoration-4 underline-offset-1 hover:underline">
                  Projects
                </a>
              </Link>
              <Link href={"/blog"}>
                <a className="decoration-yellow-500 decoration-4 underline-offset-1 hover:underline">
                  Blog
                </a>
              </Link>
            </nav>
          </div>
          <main className="flex w-full flex-col gap-6 px-2">{children}</main>
        </div>
        <footer className="flex flex-col items-center justify-end gap-6 py-16">
          <div className="flex flex-row items-center justify-center gap-5">
            <DribbleIcon />
            <LinkedinIcon />
            <InstagramIcon />
          </div>
          <p className="text-sm font-semibold text-zinc-400">
            2022© twosaturdays.dev by Ali Sbtan
          </p>
        </footer>
      </div>
    </>
  );
}
