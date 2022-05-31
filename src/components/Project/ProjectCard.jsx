import Link from "next/link";

export default function ProjectCard({ title, description, slug }) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl transition hover:-translate-y-2">
      <Link href={`/projects/${slug}`}>
        <a className="flex h-full w-full items-end rounded-xl bg-white p-8">
          <div className="h-full w-full pt-16">
            <h5 className="text-xl font-bold text-gray-900">{title}</h5>

            <p className="mt-2 text-sm text-gray-500">{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
