import Link from "next/link";

const PostCard = ({ slug, date, title, description }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="group flex cursor-pointer flex-col gap-1 rounded-lg p-3 transition hover:bg-zinc-50">
          <header className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 text-xs text-zinc-400">
              <time className="font-bold">{date}</time>
            </div>
            <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-xl font-semibold transition group-hover:text-transparent">
              {title}
            </h1>
          </header>
          <p className="text-zinc-500">{description} </p>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
