"use client"

import Link from "next/link"
import { motion } from "motion/react"
import {
  Building2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react"
import { SiTiktok } from "@icons-pack/react-simple-icons"

const officeLocations = [
  {
    title: "Head Office",
    location: "8425 wiseman ave \nMontreal, Quebec H3n 2p5",
    icon: Building2,
  },
  {
    title: "Dhaka Office",
    location: "Baridhara Diplomatic Zone",
    icon: MapPin,
  },
]

const contactChannels = [
  {
    label: "Email",
    value: "contact.rangproduction@gmail",
    href: "mailto:contact.rangproduction@gmail",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (514) 962-8662",
    href: "tel:+15149628662",
    icon: Phone,
  },
]

const socialLinks = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/rangproductionofficial",
    icon: Facebook,
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/rangproductionofficial",
    icon: Instagram,
  },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/channel/UCQJKJpJb2tt2E3TaudYVPYQ",
    icon: Youtube,
  },
  {
    platform: "TikTok",
    href: "https://www.tiktok.com/@rangproduction",
    icon: SiTiktok,
  },
]

export default function Page() {
  return (
    <main className="bg-white dark:bg-secondary">
      <section
        className="relative flex min-h-[72vh] items-center overflow-hidden py-16 text-white sm:min-h-[78vh] sm:py-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.85)), url('/contact.jpeg')",
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
              Contact Rang Production
            </p>
            <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl lg:text-6xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              Reach our team across Canada and Bangladesh for event
              collaborations, partnerships, and media communication.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 dark:bg-secondary">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Our Presence
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              Offices Across Two Continents
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {officeLocations.map((office, index) => {
              const Icon = office.icon

              return (
                <motion.article
                  key={office.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-b from-white to-primary/8 p-7 shadow-[0_20px_55px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 dark:border-white/15 dark:from-secondary dark:to-secondary/85"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                    {office.title}
                  </p>
                  <h3 className="mt-2 text-2xl leading-tight font-semibold text-secondary dark:text-white">
                    {office.location}
                  </h3>
                </motion.article>
              )
            })}
          </div>
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
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Direct Contact
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Reach Us Instantly
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            {contactChannels.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                    {item.label}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-2 block text-2xl leading-tight font-semibold text-white transition-colors hover:text-primary"
                  >
                    {item.value}
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 dark:bg-secondary">
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
              Social Media
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              Follow Rang Production
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {socialLinks.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.a
                  key={item.platform}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-primary/20 bg-linear-to-b from-white to-primary/8 p-7 shadow-[0_20px_55px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 dark:border-white/15 dark:from-secondary dark:to-secondary/85"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary dark:text-white">
                    {item.platform}
                  </h3>
                  <p className="mt-2 text-sm text-secondary/70 dark:text-white/70">
                    Visit official {item.platform} page
                  </p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
