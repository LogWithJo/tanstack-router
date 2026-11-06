import { useGSAP } from '@gsap/react'
import { Link, createFileRoute } from '@tanstack/react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const Route = createFileRoute('/')({ component: Home })

const chapters = [
  {
    number: '01',
    eyebrow: 'See the whole picture',
    title: 'Your work,\nin perspective.',
    body: 'A clear view of every project makes it easier to spot what matters and choose your next move with confidence.',
    color: 'indigo',
  },
  {
    number: '02',
    eyebrow: 'Keep the momentum',
    title: 'Small steps.\nReal progress.',
    body: 'Turn ambitious plans into a steady rhythm of milestones, updates, and wins your whole team can see.',
    color: 'cyan',
  },
  {
    number: '03',
    eyebrow: 'Make room for good work',
    title: 'Less chasing.\nMore making.',
    body: 'Bring the details together in one calm workspace, so your team can spend its energy where it counts.',
    color: 'violet',
  },
]

function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useGSAP(
    () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0, 0, 11)

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0x000000, 0)
      renderer.outputColorSpace = THREE.SRGBColorSpace

      const ambient = new THREE.AmbientLight(0xffffff, 2.1)
      scene.add(ambient)
      const keyLight = new THREE.DirectionalLight(0xc9c5ff, 4)
      keyLight.position.set(-4, 5, 8)
      scene.add(keyLight)
      const rimLight = new THREE.PointLight(0x38bdf8, 28, 18)
      rimLight.position.set(4, -2, 4)
      scene.add(rimLight)

      const group = new THREE.Group()
      scene.add(group)

      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x7774ff,
        metalness: 0.28,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        transparent: true,
        opacity: 0.94,
      })
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.6, 2),
        glassMaterial,
      )
      group.add(core)

      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0xe2e8ff,
        metalness: 0.75,
        roughness: 0.22,
      })
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.2, 0.028, 12, 160),
        ringMaterial,
      )
      ring.rotation.set(1.12, 0.2, -0.2)
      group.add(ring)

      const ringTwo = new THREE.Mesh(
        new THREE.TorusGeometry(2.65, 0.012, 8, 160),
        new THREE.MeshBasicMaterial({
          color: 0x9ba4ff,
          transparent: true,
          opacity: 0.55,
        }),
      )
      ringTwo.rotation.set(0.4, 1.05, 0.45)
      group.add(ringTwo)

      const beadGeometry = new THREE.SphereGeometry(0.115, 20, 20)
      const bead = new THREE.Mesh(
        beadGeometry,
        new THREE.MeshStandardMaterial({
          color: 0x93f5de,
          emissive: 0x16a782,
          emissiveIntensity: 0.35,
          metalness: 0.3,
          roughness: 0.2,
        }),
      )
      bead.position.set(2.17, 0.56, 0.1)
      group.add(bead)

      const beadTwo = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffd28b }),
      )
      beadTwo.position.set(-1.7, -1.1, 1.15)
      group.add(beadTwo)

      const resize = () => {
        const bounds = canvas.getBoundingClientRect()
        const width = Math.max(bounds.width, 1)
        const height = Math.max(bounds.height, 1)
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.position.z = width < 500 ? 12.5 : 11
        camera.updateProjectionMatrix()
      }

      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(canvas)
      resize()

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      const motion = { turn: 0, lift: 0, scale: 1 }
      if (!reducedMotion) {
        gsap.to(motion, {
          turn: Math.PI * 1.45,
          lift: 0.2,
          scale: 0.8,
          ease: 'none',
          scrollTrigger: {
            trigger: '#story',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        })
        gsap.to(group.rotation, {
          y: Math.PI * 2,
          x: 0.45,
          ease: 'none',
          scrollTrigger: {
            trigger: '#story',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        })
      }

      let frame = 0
      const render = () => {
        if (!reducedMotion) {
          group.rotation.y += 0.0022
          group.rotation.z = Math.sin(performance.now() * 0.0004) * 0.055
        }
        group.position.y =
          motion.lift + Math.sin(performance.now() * 0.0007) * 0.08
        group.scale.setScalar(motion.scale)
        renderer.render(scene, camera)
        frame = requestAnimationFrame(render)
      }
      render()

      return () => {
        cancelAnimationFrame(frame)
        resizeObserver.disconnect()
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose()
            const materials = Array.isArray(object.material)
              ? object.material
              : [object.material]
            materials.forEach((material) => material.dispose())
          }
        })
        renderer.dispose()
      }
    },
    { scope: canvasRef },
  )

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

function ProgressRail() {
  return (
    <div className="fixed bottom-7 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2.5 text-xs font-medium text-white/70 shadow-xl shadow-slate-950/10 backdrop-blur-xl md:flex">
      <span className="size-1.5 rounded-full bg-indigo-400" />
      <span>Scroll to explore</span>
      <span className="h-px w-9 bg-white/20" />
      <span>01 — 03</span>
    </div>
  )
}

function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[number]
  index: number
}) {
  const color = {
    indigo: 'text-indigo-300',
    cyan: 'text-cyan-300',
    violet: 'text-violet-300',
  }[chapter.color]

  return (
    <article
      data-chapter={index}
      className="chapter-panel flex min-h-[78vh] items-center px-6 py-24 sm:px-12 lg:px-20"
    >
      <div className="max-w-xl">
        <p
          className={`chapter-eyebrow text-sm font-semibold tracking-wide ${color}`}
        >
          {chapter.eyebrow}
        </p>
        <h2 className="chapter-title mt-5 whitespace-pre-line text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {chapter.title}
        </h2>
        <p className="chapter-body mt-6 max-w-md text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {chapter.body}
        </p>
        <div className="chapter-meta mt-9 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-white/40">
          <span>{chapter.number}</span>
          <span className="h-px w-12 bg-white/25" />
          <span>LogWithJo</span>
        </div>
      </div>
    </article>
  )
}

function Home() {
  const pageRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduceMotion) return

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from('[data-hero-label]', { y: 14, opacity: 0, duration: 0.7 })
        .from('[data-hero-title]', { y: 40, opacity: 0, duration: 1 }, '-=0.4')
        .from(
          '[data-hero-copy]',
          { y: 18, opacity: 0, duration: 0.75 },
          '-=0.5',
        )
        .from(
          '[data-hero-actions]',
          { y: 14, opacity: 0, duration: 0.65 },
          '-=0.45',
        )
        .from('[data-hero-note]', { opacity: 0, duration: 0.7 }, '-=0.25')

      const panels = gsap.utils.toArray<HTMLElement>('.chapter-panel')
      const story = document.querySelector<HTMLElement>('#story')
      if (!story || panels.length < 2) return

      panels.forEach((panel, index) => {
        gsap.from(
          panel.querySelectorAll(
            '.chapter-eyebrow, .chapter-title, .chapter-body, .chapter-meta',
          ),
          {
            y: 36,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 72%',
              toggleActions: 'play none none reverse',
            },
          },
        )

        if (index > 0) {
          gsap.from(panel, {
            backgroundColor: 'rgba(255,255,255,0)',
            duration: 0.8,
            scrollTrigger: {
              trigger: panel,
              start: 'top 80%',
              end: 'top 42%',
              scrub: true,
            },
          })
        }
      })

      gsap.to('[data-hero-content]', {
        yPercent: -22,
        opacity: 0.18,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: pageRef },
  )

  return (
    <main ref={pageRef} className="bg-white">
      <section
        id="hero"
        className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-slate-950 text-white"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_74%_46%,rgba(79,70,229,0.24),transparent_44%),radial-gradient(ellipse_at_88%_75%,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_right,transparent,black_48%,black)]" />
        <ThreeScene />
        <div
          data-hero-content
          className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="max-w-2xl">
            <p
              data-hero-label
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold tracking-wide text-indigo-100 backdrop-blur"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              A little more clarity for your team
            </p>
            <h1
              data-hero-title
              className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.6rem]"
            >
              Big ideas need
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-200 bg-clip-text text-transparent">
                room to move.
              </span>
            </h1>
            <p
              data-hero-copy
              className="mt-7 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              One calm workspace to bring your projects into focus, keep your
              people in sync, and turn the next step into real progress.
            </p>
            <div
              data-hero-actions
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-950/20 transition hover:-translate-y-0.5 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Explore the workspace
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <a
                href="#story"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div
              data-hero-note
              className="mt-10 flex items-center gap-3 text-xs font-medium text-slate-400"
            >
              <span className="flex -space-x-2" aria-hidden="true">
                <span className="grid size-7 place-items-center rounded-full border-2 border-slate-950 bg-indigo-300 text-[9px] font-bold text-indigo-950">
                  AM
                </span>
                <span className="grid size-7 place-items-center rounded-full border-2 border-slate-950 bg-cyan-200 text-[9px] font-bold text-cyan-950">
                  SK
                </span>
                <span className="grid size-7 place-items-center rounded-full border-2 border-slate-950 bg-amber-200 text-[9px] font-bold text-amber-950">
                  JL
                </span>
              </span>
              A clearer way to work, together
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"
        />
        <div className="absolute bottom-7 right-7 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 lg:flex">
          <span className="h-px w-8 bg-white/30" />
          Scroll to discover
        </div>
      </section>

      <section
        id="story"
        className="relative isolate overflow-hidden bg-slate-950"
      >
        <div className="sticky top-[72px] -z-10 h-0 overflow-visible">
          <div className="relative mx-auto h-[78vh] max-w-7xl">
            <div className="absolute inset-y-0 right-0 w-[58%] opacity-70">
              <ThreeScene />
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="border-t border-white/10 px-6 py-10 sm:px-12 lg:px-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              The LogWithJo approach
            </p>
            <p className="mt-3 text-sm text-slate-400">
              A good plan should help you move, not slow you down.
            </p>
          </div>
          {chapters.map((chapter, index) => (
            <Chapter key={chapter.number} chapter={chapter} index={index} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-indigo-600 px-7 py-12 text-center shadow-2xl shadow-indigo-600/20 sm:px-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-200">
            Your next step starts here
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Give good ideas the space to become great work.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
            Get your projects out of your head and into a workspace that keeps
            everyone moving together.
          </p>
          <Link
            to="/projects"
            className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
          >
            Get started{' '}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>
      <ProgressRail />
    </main>
  )
}
