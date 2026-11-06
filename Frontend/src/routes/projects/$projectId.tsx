import { Link, createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = useParams({ from: '/projects/$projectId' })

  return (
    <main className="min-h-[calc(100vh-72px)] bg-slate-50/70">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          to="/projects"
          className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
        >
          ← All projects
        </Link>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <p className="text-sm text-slate-500">Project ID</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
            {projectId}
          </h1>
        </section>
      </div>
    </main>
  )
}
