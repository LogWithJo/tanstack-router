import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: AboutComp })

const values = [
  {
    number: '01',
    title: 'Make progress visible',
    description:
      'A clear view of what is moving, what needs attention, and what comes next helps everyone do their best work.',
    icon: '↗',
  },
  {
    number: '02',
    title: 'Keep work human',
    description:
      'Good tools should make collaboration feel easier, with less busywork and more room for thoughtful work.',
    icon: '✳',
  },
  {
    number: '03',
    title: 'Start simple, grow together',
    description:
      'The best workspace is one your whole team can pick up quickly and shape around the way you work.',
    icon: '◎',
  },
]

function AboutComp() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative isolate border-b border-slate-100 bg-slate-50/70">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 -z-10 size-[32rem] rounded-full bg-indigo-100/70 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-indigo-700 shadow-sm">
              <span className="size-1.5 rounded-full bg-indigo-500" />A little
              about us
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Better work starts with{' '}
              <span className="text-indigo-600">a little more clarity.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              LogWithJo gives teams a calmer place to plan projects, share
              progress, and keep the important things moving forward.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Explore the workspace <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#our-story"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Get to know us
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="grid size-8 place-items-center rounded-full border-2 border-slate-50 bg-amber-100 text-xs font-bold text-amber-800">
                  J
                </span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-slate-50 bg-sky-100 text-xs font-bold text-sky-800">
                  O
                </span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-slate-50 bg-violet-100 text-xs font-bold text-violet-800">
                  +
                </span>
              </div>
              <span>Made for people who make things happen.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 top-12 size-24 rounded-3xl bg-indigo-200/70 blur-2xl" />
            <div className="absolute -bottom-6 -right-5 size-32 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200/80 bg-white p-3 shadow-2xl shadow-indigo-950/10 sm:p-5">
              <div className="rounded-[1.4rem] bg-slate-50 p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                      The big picture
                    </p>
                    <p className="mt-1 text-lg font-bold tracking-tight">
                      A team in sync
                    </p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    ✳
                  </span>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-white p-3">
                    <p className="text-xs text-slate-500">Projects</p>
                    <p className="mt-2 text-2xl font-bold">08</p>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-white p-3">
                    <p className="text-xs text-slate-500">On track</p>
                    <p className="mt-2 text-2xl font-bold text-emerald-600">
                      06
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-white p-3">
                    <p className="text-xs text-slate-500">This week</p>
                    <p className="mt-2 text-2xl font-bold">12</p>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Website refresh</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Design team · Due Friday
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      On track
                    </span>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                    <span>Project progress</span>
                    <span className="font-semibold text-slate-800">72%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[72%] rounded-full bg-indigo-500" />
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div
                      className="flex -space-x-2"
                      aria-label="Three project collaborators"
                    >
                      <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-rose-100 text-[10px] font-bold text-rose-700">
                        AM
                      </span>
                      <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-sky-100 text-[10px] font-bold text-sky-700">
                        SK
                      </span>
                      <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-amber-100 text-[10px] font-bold text-amber-700">
                        JL
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      Everyone’s in the loop
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 text-white shadow-lg shadow-indigo-600/15">
                  <span className="grid size-8 place-items-center rounded-lg bg-white/15">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Small steps add up</p>
                    <p className="text-xs text-indigo-100">
                      Celebrate the progress along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-story"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Our story
          </p>
          <h2 className="mt-4 max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
            Work is better when the path is clear.
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          <p>
            Every team has good ideas and meaningful work to do. But as projects
            grow, it can get harder to see what matters, who is doing what, and
            where a little help would make a difference.
          </p>
          <p>
            LogWithJo is built to bring that picture into focus. We’re creating
            a straightforward workspace where teams can organize projects, stay
            connected, and build momentum together—without adding noise to the
            day.
          </p>
          <p>
            Because great work doesn’t happen all at once. It happens one clear
            next step at a time.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
              What guides us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A thoughtful way to work, together.
            </h2>
            <p className="mt-4 text-slate-600">
              The details matter. These are the ideas we come back to as we
              build.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-950/[0.02] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/[0.05] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-indigo-50 text-xl font-semibold text-indigo-600">
                    {value.icon}
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-slate-300">
                    {value.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-center sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-40 size-96 rounded-full bg-indigo-600/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-48 -left-20 size-96 rounded-full bg-sky-500/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-300">
              Ready when you are
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let’s make good work feel a little easier.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
              Bring your plans, your people, and your next big idea. We’ll help
              you keep everything moving.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Take a look around <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
