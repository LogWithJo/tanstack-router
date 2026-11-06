import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/projects/')({
  component: RouteComponent,
})

function PageHeading() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Workspace / Projects
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Projects
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Keep your team’s work moving forward.
        </p>
      </div>
    </div>
  )
}

function RouteComponent() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-slate-50/70">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <PageHeading />
      </div>
    </main>
  )
}
