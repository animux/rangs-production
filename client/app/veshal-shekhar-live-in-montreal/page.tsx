"use client"

import { motion } from "motion/react"
import {
  Music2,
  Globe,
  Mic2,
  Radio,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react"

type EventFeature = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

type ExperienceStep = {
  title: string
  description: string
}

const eventFeatures: EventFeature[] = [
  {
    title: "Live Bollywood Performances",
    description:
      "A power-packed performance by Vishal-Shekhar featuring their biggest chart-topping hits that have defined an era of Bollywood music.",
    icon: Mic2,
  },
  {
    title: "High-Energy Concert Experience",
    description:
      "An immersive concert environment with world-class sound, lighting, and stage production designed to elevate every moment.",
    icon: Zap,
  },
  {
    title: "Global Audience Presence",
    description:
      "Bringing together fans, music lovers, and the South Asian community from across Canada for a truly international vibe.",
    icon: Globe,
  },
  {
    title: "Media and Spotlight Moments",
    description:
      "A vibrant atmosphere with live coverage, social buzz, influencer presence, and unforgettable fan interactions.",
    icon: Radio,
  },
]

const musicJourney = [
  "Opening power set",
  "Iconic hit sequences",
  "Live transitions and crowd engagement",
  "Grand musical finale",
]

const premiumAtmosphere = [
  "Concert-grade sound and lighting",
  "Immersive stage visuals",
  "Crowd interaction moments",
  "Electrifying finale energy",
]

const experienceSteps: ExperienceStep[] = [
  {
    title: "Iconic Hit Performances",
    description:
      "Experience the biggest Bollywood tracks performed live on stage.",
  },
  {
    title: "Live Concert Energy",
    description: "Feel the adrenaline of a full-scale live music production.",
  },
  {
    title: "Crowd and Fan Engagement",
    description: "A shared experience with thousands of fans singing along.",
  },
  {
    title: "A Night to Remember",
    description: "A musical evening that stays with you long after it ends.",
  },
]

export default function Page() {
  return (
    <main className="bg-white dark:bg-secondary">
      <section
        className="min-h-[78vh] bg-secondary bg-cover bg-center bg-no-repeat py-20 text-white sm:py-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.82)), url('/montreal-event.jpeg')",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-5xl space-y-6 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Vishal-Shekhar Live in Montreal
            </p>
            <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl lg:text-6xl">
              Bollywood&apos;s Hitmakers - A Night to Remember
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
              An electrifying live concert featuring one of Bollywood&apos;s
              most iconic music composer duos, delivering a night filled with
              chart-topping hits, high-energy performances, and an unforgettable
              audience experience.
            </p>

            <div className="mx-auto grid max-w-4xl gap-3 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-sm sm:text-base">
                Montreal, Canada
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-sm sm:text-base">
                16 August 2026
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-sm sm:text-base">
                Theatre Saint-Denis, Montreal
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 dark:bg-secondary">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl space-y-4 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Explore the Event
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              A Night Where Music Meets Energy
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-secondary/80 sm:text-lg dark:text-white/80">
              Vishal-Shekhar Live in Montreal is not just a concert. It is a
              high-voltage musical experience bringing together iconic Bollywood
              hits, live performance energy, and an unforgettable audience
              atmosphere.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-8 pb-20 dark:bg-secondary">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              What Awaits You
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              Music, Energy, and Pure Entertainment
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {eventFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-b from-white to-primary/5 p-7 shadow-[0_20px_55px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 dark:border-white/15 dark:from-secondary dark:to-secondary/85"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/80 sm:text-base dark:text-white/80">
                    {feature.description}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto grid gap-6 px-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Music2 className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-semibold">
                Curated Musical Journey
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Every segment is crafted to take the audience through an emotional
              and energetic ride.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {musicJourney.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm font-semibold text-white/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-semibold">
                  Premium Concert Atmosphere
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                Step into a high-end entertainment experience designed for
                impact and excitement.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {premiumAtmosphere.map((item) => (
                  <p
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 sm:text-base"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 dark:bg-secondary">
        <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              The Experience
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              A High-Impact Live Music Journey
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experienceSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-primary/20 bg-linear-to-b from-white to-primary/8 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 dark:border-white/15 dark:from-secondary dark:to-secondary/85"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                    {index === 0 && <Star className="h-5 w-5" />}
                    {index === 1 && <Zap className="h-5 w-5" />}
                    {index === 2 && <Users className="h-5 w-5" />}
                    {index === 3 && <Globe className="h-5 w-5" />}
                  </span>
                  <span className="text-sm font-semibold text-secondary/45 transition-colors duration-300 group-hover:text-secondary/70 dark:text-white/45 dark:group-hover:text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg leading-snug font-semibold text-secondary dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/80 dark:text-white/75">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
