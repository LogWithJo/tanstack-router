import { Link } from '@tanstack/react-router'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: 'about' },
  { label: 'Projects', href: '/projects' },
  { label: 'How it works', href: 'how-it-works' },
  { label: 'Pricing', href: 'pricing' },
]

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          aria-label="LogWithJo home"
          className="group flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-sm font-black tracking-tight text-white shadow-lg shadow-indigo-600/20 transition-transform group-hover:-rotate-3">
            JO
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-950">
            Log<span className="text-indigo-600">WithJo</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) =>
            link.label === 'Projects' ? (
              <Link
                key={link.label}
                to="/projects"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
              >
                Projects
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 sm:inline-flex"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-700/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Get started <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
