"use client"

import { motion } from "motion/react"
import {
  Globe2,
  Handshake,
  Lightbulb,
  Mic2,
  Quote,
  Sparkles,
} from "lucide-react"

const collaborations = [
  {
    title: "North America",
    description:
      "Co-produced multicultural showcases and premium stage events with community organizations and private partners.",
  },
  {
    title: "South Asia",
    description:
      "Delivered artist-led entertainment programs blending local celebration with international production standards.",
  },
  {
    title: "Europe & Middle East",
    description:
      "Worked with venue teams and cultural promoters to build tailored audience-first event experiences.",
  },
]

const previousArtists = [
  "Atif Aslam",
  "Shreya Ghoshal",
  "Mika Singh",
  "Neha Kakkar",
  "Sunidhi Chauhan",
  "Kumar Sanu",
  "Alka Yagnik",
  "Habib Wahid",
]

export default function Page() {
  return (
    <main className="bg-white dark:bg-secondary">
      <section
        className="relative flex min-h-[72vh] items-center overflow-hidden py-16 text-white sm:min-h-[78vh] sm:py-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.85)), url('/about.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
        <div className="relative container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-4xl space-y-5 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              About Rang Production
            </p>
            <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl lg:text-6xl">
              Crafting Experiences Across Borders
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              Rang Production is a global entertainment and event platform
              dedicated to connecting cultures, celebrating talent, and creating
              unforgettable moments through world-class productions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 dark:bg-secondary">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/70 to-transparent" />
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl space-y-3"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Company Story
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              Built From Passion, Grown Through Purpose
            </h2>
            <p className="max-w-4xl text-base leading-relaxed text-secondary/80 sm:text-lg dark:text-white/80">
              From intimate cultural programs to large international showcases,
              Rang Production has grown by combining creative storytelling,
              disciplined planning, and exceptional stage execution. Over the
              years, the company has evolved into a trusted producer for
              concerts, award ceremonies, and cross-market collaborations.
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-10 rounded-4xl border border-primary/20 bg-linear-to-b from-white to-primary/8 p-7 shadow-[0_20px_55px_rgba(0,0,0,0.08)] sm:p-10 dark:border-white/15 dark:from-secondary dark:to-secondary/85"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Quote className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Founder's Message
            </p>
            <div className="mt-4 flex flex-row items-center gap-3">
              <img
                src="/founder.jpeg"
                alt="Founder"
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h3 className="mt-3 text-3xl font-bold text-secondary dark:text-white">
                  Tanvir Ahmed
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-[0.2em] text-secondary/65 uppercase dark:text-white/65">
                  Founder & President
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-secondary/80 sm:text-lg dark:text-white/80">
              Established Rang Production in Montreal in 2010. Our vision has
              always been simple: create platforms where artistry, culture, and
              community meet with excellence. Every production is built to
              inspire audiences and elevate talent on an international stage.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-20 text-white">
        <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Mission & Vision
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Empowering Culture Through Premium Events
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                To produce meaningful entertainment experiences that spotlight
                world-class talent, foster cultural connection, and create value
                for communities, partners, and audiences.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                To become a globally recognized entertainment brand known for
                artistic excellence, innovative event concepts, and impactful
                collaborations across continents.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 dark:bg-secondary">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/70 to-transparent" />
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Global Collaborations
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              Trusted Partnerships Worldwide
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {collaborations.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-primary/20 bg-linear-to-b from-white to-primary/8 p-7 shadow-[0_20px_55px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 dark:border-white/15 dark:from-secondary dark:to-secondary/85"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {index % 3 === 0 && <Globe2 className="h-5 w-5" />}
                  {index % 3 === 1 && <Handshake className="h-5 w-5" />}
                  {index % 3 === 2 && <Mic2 className="h-5 w-5" />}
                </div>
                <h3 className="text-2xl font-semibold text-secondary dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-secondary/75 dark:text-white/75">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-20 text-white">
        <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-28 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Previous Artists
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Voices That Lit Up Our Stages
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {previousArtists.map((artist, index) => (
              <motion.article
                key={artist}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-center backdrop-blur-sm"
              >
                <p className="text-sm font-semibold tracking-[0.12em] text-white/90 uppercase sm:text-base">
                  {artist}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
