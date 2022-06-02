import PostCard from "@components/Blog/PostCard";
import { getContentsData } from "@modules/content";

export default function Posts({ posts }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold sm:text-2xl">The blog</h2>
        <p className="pl-2 text-zinc-500">
          I love learning and one way to be sure that I am really learning is by
          helping and explaining it to other. So here I am with some Technical
          Writing.
        </p>
      </div>
      <section className="xl:px-10">
        {posts &&
          posts.map((post) => {
            return <PostCard key={post.slug} {...post.data} />;
          })}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = getContentsData("blog");
  return {
    props: { posts },
    revalidate: 10,
  };
}
