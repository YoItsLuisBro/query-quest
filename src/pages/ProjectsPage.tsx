import ProjectCard from "../components/cards/ProjectCard";
import PageShell from "../components/ui/PageShell";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const beginnerProjects = projects.filter(
    (project) => project.difficulty === "Beginner",
  );

  const intermediateProjects = projects.filter(
    (project) => project.difficulty === "Intermediate",
  );

  const advancedProjects = projects.filter(
    (projects) => projects.difficulty === "Advanced",
  );

  return (
    <PageShell
      eyebrow="Database Missions"
      title="Projects"
      description="Build practical SQL query packs, reports, dashboard, and analysis missions by difficulty."
    >
      <div className="space-y-10">
        <section>
          <h2 className="mb-5 text-2xl font-black uppercase text-cyan-300">
            Beginner Projects
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {beginnerProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-black uppercase text-emerald-300">
            Intermediate Projects
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {intermediateProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-black uppercase text-violet-300">
            Advanced Projects
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {advancedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
