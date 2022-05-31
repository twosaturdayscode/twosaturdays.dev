import Head from "next/head";

import { mdToHtml } from "@modules/markdown";
import { getContentsData, getBlogBySlug } from "@modules/content";
import PostLayout from "@components/Layouts/PostLayout";

export default function Project({ data, content }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      {/* <h1>{project.title}</h1> */}
      <PostLayout title={data.title} date={data.date}>
        <article
          className="prose prose-stone min-w-full prose-headings:font-medium prose-h1:text-4xl prose-h2:text-3xl prose-pre:max-w-xl prose-pre:mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </PostLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { source, data } = getBlogBySlug(params.slug);
  const content = await mdToHtml(source);
  return {
    props: {
      data: data,
      content: content,
    },
  };
}

export async function getStaticPaths() {
  const blog = getContentsData("blog");

  const paths = blog.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: "blocking" };
}
