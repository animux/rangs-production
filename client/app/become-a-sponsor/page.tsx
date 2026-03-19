"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Handshake, Megaphone, Sparkles, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

const sponsorshipOpportunities = [
  "Title Sponsor",
  "Powered By",
  "Co-Powered By",
  "Associate Sponsor",
  "Platinum Sponsor",
  "Gold Sponsor",
  "Silver Sponsor",
]

const sponsorBenefits = [
  "Stage branding",
  "Media exposure",
  "Brand activations",
  "VIP hospitality",
]

export default function Page() {
  return (
    <main className="bg-white dark:bg-secondary">
      <section
        className="relative flex min-h-[72vh] items-center overflow-hidden py-16 text-white sm:min-h-[78vh] sm:py-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.85)), url('/partner.jpeg')",
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
              Sponsorship Opportunities
            </p>
            <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl lg:text-6xl">
              Partner With Excellence
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              Align your brand with one of the most prestigious entertainment
              and business award platforms and reach a high-value audience
              through unforgettable event moments.
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
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Sponsorship Opportunities
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              Choose Your Sponsorship Tier
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {sponsorshipOpportunities.map((tier, index) => (
              <motion.article
                key={tier}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-b from-white to-primary/8 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 dark:border-white/15 dark:from-secondary dark:to-secondary/85"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {index % 4 === 0 && <Star className="h-5 w-5" />}
                    {index % 4 === 1 && <Sparkles className="h-5 w-5" />}
                    {index % 4 === 2 && <Handshake className="h-5 w-5" />}
                    {index % 4 === 3 && <Megaphone className="h-5 w-5" />}
                  </span>
                  <span className="text-sm font-semibold text-secondary/45 dark:text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl leading-tight font-semibold text-secondary dark:text-white">
                  {tier}
                </h3>
              </motion.article>
            ))}
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
            className="mx-auto max-w-4xl rounded-4xl border border-white/15 bg-white/5 px-7 py-10 backdrop-blur-sm sm:px-12"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Sponsors Receive
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">
              Visibility, Influence, and Premium Access
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {sponsorBenefits.map((benefit, index) => (
                <motion.p
                  key={benefit}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 sm:text-base"
                >
                  • {benefit}
                </motion.p>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="default"
                className="h-11 cursor-pointer rounded px-8 text-sm font-extrabold text-secondary text-white uppercase transition-all duration-300 hover:brightness-95"
                size="lg"
                render={<Link href="/contact-us" />}
              >
                Get In Touch With Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
