import Head from "next/head";

import { mdToHtml } from "@modules/markdown";
import { getContentsData, getProjectBySlug } from "@modules/content";

export default function Project({ data, content }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      {/* <h1>{project.title}</h1> */}
      <article
        className="w-full prose prose-stone prose-headings:font-medium prose-h1:text-4xl prose-h2:text-3xl"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { source, data } = getProjectBySlug(params.slug);
  const content = await mdToHtml(source);
  return {
    props: {
      data: data,
      content: content,
    },
  };
}

export async function getStaticPaths() {
  const projects = getContentsData("projects");

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: "blocking" };
}
