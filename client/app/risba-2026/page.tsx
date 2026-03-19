"use client"

import { motion } from "motion/react"
import {
  Award,
  Camera,
  Clapperboard,
  Globe,
  Mic2,
  Sparkles,
  Star,
  Users,
} from "lucide-react"

type EventFeature = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const eventFeatures: EventFeature[] = [
  {
    title: "The Grand Awards Ceremony",
    description:
      "A powerful celebration of excellence across business, media, entertainment, and leadership, honoring individuals and brands shaping industries and inspiring millions.",
    icon: Award,
  },
  {
    title: "Live Performances",
    description:
      "An electrifying lineup of renowned artists and performers, transforming the evening into a high-energy live experience.",
    icon: Mic2,
  },
  {
    title: "Global Celebrity Presence",
    description:
      "From film stars to international icons, RISBA welcomes national and international celebrities for a truly global atmosphere.",
    icon: Globe,
  },
  {
    title: "Media and Spotlight Moments",
    description:
      "A hub for media, influencers, and public figures with red carpet highlights, strong media coverage, and exclusive press interactions.",
    icon: Camera,
  },
]

const experiencePillars = [
  "Recognition of excellence",
  "Live entertainment spectacle",
  "Networking with industry leaders",
  "A celebration of culture, creativity, and achievement",
]

const showFlow = [
  "Opening sequences",
  "Award segments",
  "Performance transitions",
  "Grand finale moments",
]

export default function Page() {
  return (
    <main className="bg-white dark:bg-secondary">
      <section
        className="h-[75vh] bg-secondary bg-cover bg-center bg-no-repeat py-20 text-white sm:py-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/lobby-risba.jpeg')",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-4xl space-y-5 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Explore RISBA 2026
            </p>
            <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl lg:text-6xl">
              A Night Where Excellence Meets Entertainment
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              Rang Int. Star and Business Awards 2026 (RISBA) is not just an
              award ceremony. It is a global stage of recognition, celebration,
              and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 dark:bg-secondary">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
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
              Prestige, Performance, and Presence
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {eventFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 26 }}
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
                <Clapperboard className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-semibold">
                Curated Show Experience
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Every segment is meticulously designed to keep the audience
              engaged from start to finish.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {showFlow.map((item) => (
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
                <h3 className="text-2xl font-semibold">Premium Red Carpet</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                Guests step into a world of elegance with a signature red carpet
                entry, capturing the glamour and prestige of the night while
                media and spotlight moments unfold around them.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/85 sm:text-base">
                <p className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                  High media coverage and red carpet highlights
                </p>
                <p className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                  Exclusive press interactions with public figures and icons
                </p>
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
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              The Experience
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              A Multi-Layered Event Journey
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experiencePillars.map((pillar, index) => (
              <motion.article
                key={pillar}
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
                    {index === 0 && <Award className="h-5 w-5" />}
                    {index === 1 && <Star className="h-5 w-5" />}
                    {index === 2 && <Users className="h-5 w-5" />}
                    {index === 3 && <Globe className="h-5 w-5" />}
                  </span>
                  <span className="text-sm font-semibold text-secondary/45 transition-colors duration-300 group-hover:text-secondary/70 dark:text-white/45 dark:group-hover:text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-lg leading-snug font-semibold text-secondary dark:text-white">
                  {pillar}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-4xl border border-white/15 bg-white/5 px-7 py-10 text-center backdrop-blur-sm sm:px-12"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              The Grand Finale
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              A Closing Moment to Remember
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              As the night reaches its peak, RISBA culminates in a memorable
              closing segment that brings together winners, performers, and
              special guests for a finale that defines the spirit of the event.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
