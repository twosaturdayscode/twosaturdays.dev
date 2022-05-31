import Link from "next/link";

export default function PostLayout({ children, title, date }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-8">
      <header className="mb-5 flex w-full flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1 text-zinc-400">
            <span>Ali Sbtan,</span>
            <span>{date}</span>
            <span>•</span>
            <div>xtags</div>
          </div>
          <Link href={"/blog"}>
            <a className="underline text-zinc-500">← Back</a>
          </Link>
        </div>
        <h1 className="text-5xl font-bold">{title}</h1>
      </header>
      {children}
    </div>
  );
}
