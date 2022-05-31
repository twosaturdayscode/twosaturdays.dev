import ProjectCard from "@components/Project/ProjectCard";
import { getContentsData } from "@modules/content";

export default function Projects({ projects }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold sm:text-2xl">Projects</h2>
        <p className="pl-2 text-zinc-500">
          Here are my projects, a small showcase of what I am doing every now
          and then beside my job.
        </p>
      </div>
      <section className="grid gap-4 px-3 sm:grid-cols-2">
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.slug} {...project.data} />
          ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projects = getContentsData("projects");
  return {
    props: { projects },
    revalidate: 10,
  };
}
