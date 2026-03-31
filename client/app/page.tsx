"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Newspaper,
  ExternalLink,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type ImpactStat = {
  value: number
  suffix: string
  label: string
}

function CountUp({
  to,
  suffix,
  start,
}: {
  to: number
  suffix: string
  start: boolean
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let frameId = 0
    const duration = 2000
    const startedAt = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * to))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [start, to])

  return (
    <span>
      {Intl.NumberFormat("en-US").format(value)}
      {suffix}
    </span>
  )
}

export default function Page() {
  const globalArtists = [
    {
      name: "Atif Aslam",
      image: "/artist/atif-aslam.jpg",
      layout: "default",
    },
    {
      name: "Shreya Ghoshal",
      image: "/artist/shreya-ghoshal.webp",
      layout: "default",
    },
    {
      name: "Mika Singh",
      image: "/artist/mika-singh.jpg",
      layout: "default",
    },
    {
      name: "Neha Kakkar",
      image: "/artist/neha-kakkar.webp",
      layout: "default",
    },
    {
      name: "Sunidhi Chauhan",
      image: "/artist/sunidhi-chauhan.jpg",
      layout: "default",
    },
    {
      name: "Sunil Grover",
      image: "/artist/sunil-grover.jpg",
      layout: "default",
    },
    {
      name: "Kumar Sanu",
      image: "/artist/kumar-sanu.jpg",
      layout: "default",
    },
    {
      name: "Alka Yagnik",
      image: "/artist/alka-yagnik.png",
      layout: "wide",
    },
    {
      name: "Habib Wahid",
      image: "/artist/habib-wahid.jpg",
      layout: "default",
    },
    {
      name: "Runa Laila",
      image: "/artist/runa-laila.jpg",
      layout: "default",
    },
    {
      name: "Pritom Hasan",
      image: "/artist/pritom-hassan.jpg",
      layout: "default",
    },
    {
      name: "Balam",
      image: "/artist/balam.png",
      layout: "default",
    },
    {
      name: "Ferdous Wahid",
      image: "/artist/ferdous-wahid.webp",
      layout: "default",
    },
    {
      name: "Mehazabien Chowdhury",
      image: "/artist/mehazabien-chowdhury.jpg",
      layout: "default",
    },
    {
      name: "Mishu Sabbir",
      image: "/artist/mishu-sabbir.jpg",
      layout: "default",
    },
    {
      name: "Ziaul Haque Polash",
      image: "/artist/ziaul-haque.jpg",
      layout: "default",
    },
    {
      name: "Sadhana Sargam",
      image: "/artist/sadhana-sargam.jpg",
      layout: "default",
    },
    {
      name: "Keya Payel",
      image: "/artist/keya-payel.jpg",
      layout: "default",
    },
    {
      name: "Parsa Evana",
      image: "/artist/parsa-evana.jpg",
      layout: "default",
    },
    {
      name: "Neel Nurerzahan",
      image: "/artist/neel-nurerzahan.jpg",
      layout: "default",
    },
    {
      name: "Sadia Islam Mou",
      image: "/artist/sadia-islam.jpg",
      layout: "default",
    },
    {
      name: "Tosiba Begum",
      image: "/artist/tosiba-begum.jpg",
      layout: "default",
    },
    {
      name: "Shopnil Tazrian Iccha",
      image: "/artist/shopnil-tazrian.jpg",
      layout: "default",
    },
    {
      name: "Bidya Sinha Saha Mim",
      image: "/artist/bidya-sinha.jpg",
      layout: "default",
    },
    {
      name: "Ashes",
      image: "/artist/ashes.png",
      layout: "default",
    },
  ]

  const [showImpactCounters, setShowImpactCounters] = useState(false)
  const [spotlightIndex, setSpotlightIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const spotlightEvents = [
    {
      kicker: "Next Event",
      title: "RISBA 2026",
      subtitle: "Rang International Star & Business Awards - Season 2",
      description:
        "An international awards ceremony recognizing excellence across entertainment, business, leadership, and entrepreneurship.",
      location: "Dhaka, Bangladesh",
      date: "November 2026",
      venue: "Bangladesh China Friendship Conference Centre (BCFCC)",
      details:
        "The event will bring together celebrities, entrepreneurs, corporate leaders, and global personalities under one prestigious platform.",
      href: "/risba-2026",
      cta: "View Event Details",
      backgroundImage: "/venue-risba.jpeg",
    },
    {
      kicker: "Live Concert",
      title: "VISHAL-SHEKHAR LIVE IN MONTREAL",
      subtitle: "Bollywood's Hitmakers - A Night to Remember",
      description:
        "An electrifying live concert featuring one of Bollywood's most iconic music composer duos, delivering a night filled with chart-topping hits and high-energy performances",
      location: "Montreal, Canada",
      date: "16 August 2026",
      venue: "Theatre Saint-Denis, Montreal",
      details:
        "This spectacular musical night will bring together fans, music lovers, and the South Asian community for a premium entertainment experience filled with live performances, vibrant energy, and world-class production.",
      href: "/veshal-shekhar-live-in-montreal",
      cta: "View Event Details",
      backgroundImage: "/venue-montreal.jpeg",
    },
  ]

  const activeSpotlight = spotlightEvents[spotlightIndex]

  const goToPreviousSpotlight = () => {
    setSpotlightIndex((previous) =>
      previous === 0 ? spotlightEvents.length - 1 : previous - 1
    )
  }

  const goToNextSpotlight = () => {
    setSpotlightIndex((previous) => (previous + 1) % spotlightEvents.length)
  }

  const handleSpotlightTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    setTouchStartX(event.changedTouches[0].clientX)
  }

  const handleSpotlightTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX === null) return

    const touchEndX = event.changedTouches[0].clientX
    const swipeDistance = touchStartX - touchEndX

    if (Math.abs(swipeDistance) > 60) {
      if (swipeDistance > 0) {
        goToNextSpotlight()
      } else {
        goToPreviousSpotlight()
      }
    }

    setTouchStartX(null)
  }

  const impactHighlights = [
    "16+ Years of Excellence",
    "International Artist Network",
    "Multiple Countries & Global Collaborations",
    "Thousands of Attendees Worldwide",
  ]

  const impactStats: ImpactStat[] = [
    {
      value: 8,
      suffix: "+",
      label: "International Events Produced",
    },
    {
      value: 64,
      suffix: "+",
      label: "Renowned Global Artists",
    },
    {
      value: 46000,
      suffix: "+",
      label: "Audience Attendance & Reach",
    },
    {
      value: 12,
      suffix: "+",
      label: "Cities Across Multiple Markets",
    },
  ]

  const mediaHighlights = [
    {
      title: "RISBA - 2025 Canada Announcement",
      src: "https://www.youtube.com/embed/B5T5jnpqnoM?si=NJ4uYBEMNPO7BCuJ",
    },
    {
      title: "Celebrities Lineup for RISBA - 2025",
      src: "https://www.youtube.com/embed/ANTdLbnC2k8?si=eoj5F4RFl7HY_Vjp",
    },
  ]

  const featuredNews = [
    {
      title: "Montreal Sways to Kumar Sanu and Sadhana Sargam",
      source: "Bangladesh Pratidin",
      date: "November 15, 2025",
      thumbnail:
        "https://cdn.bd-pratidin.com/public/news_images/2025/11/15/1763177757-fee4e47f3e4c529b1f2c751035a4492c.gif",
      summary:
        "Montreal hosted a packed nostalgia concert at Saint Denis Theatre, where Kumar Sanu and Sadhana Sargam performed iconic 90s songs along with newer hits. Organized by Tanvir Ahmed of Rang Production, the event drew strong responses from Bangladeshi and South Asian audiences across Canada and the US.",
      href: "https://www.bd-pratidin.com/probash-potro/2025/11/15/1179879",
    },
    {
      title: "‘Unforgettable 90s’ Concert Energizes Montreal",
      source: "Samakal",
      date: "November 11, 2025",
      thumbnail:
        "https://samakal.com/media/imgAll/2025November/755-1762854827.jpg",
      summary:
        "Samakal reports that expatriate Bangladeshis and local attendees joined the ‘Unforgettable 90s’ show in Montreal, featuring Kumar Sanu and Sadhana Sargam. The article also highlights organizer Tanvir Ahmed’s ongoing effort since 2010 to promote Bengali culture internationally through large-scale concerts and awards programs.",
      href: "https://samakal.com/entertainment/article/324694/%E0%A6%97%E0%A6%BE%E0%A6%A8%E0%A7%87-%E0%A6%97%E0%A6%BE%E0%A6%A8%E0%A7%87-%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%B2-%E0%A6%AE%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%A8-%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0-%E0%A6%B6%E0%A6%BE%E0%A6%A8%E0%A7%81-%E0%A6%B8%E0%A6%BE%E0%A6%A7%E0%A6%A8%E0%A6%BE-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A6%97%E0%A6%BE%E0%A6%AE",
    },
  ]

  return (
    <div className="">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-12 sm:min-h-[78vh] sm:py-16 lg:min-h-[75vh] lg:py-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/80" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.5,
            delay: 0.8,
          }}
          className="relative z-10 w-full"
        >
          <div className="mx-auto max-w-6xl space-y-5 px-5 sm:space-y-6">
            <h2 className="max-w-4xl text-xl leading-tight font-bold text-primary sm:text-4xl lg:text-5xl">
              After Success in Canada, RISBA Arrives in{" "}
              <span className="underline">Bangladesh</span>
            </h2>
            <p className="max-w-3xl text-xs leading-relaxed text-white/90 sm:text-lg lg:text-xl">
              The Rang International Star & Business Awards returns with Season
              2 — bringing together global celebrities, industry leaders, and
              cultural icons on one prestigious stage in Dhaka.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-2">
              <Button
                variant="outline"
                className="w-full cursor-pointer rounded border-primary bg-black/20 px-8 py-6 text-xs font-extrabold text-primary transition-all duration-300 hover:bg-primary hover:text-secondary sm:w-auto"
                size="lg"
              >
                <Link href="/risba-2026">Explore RISBA 2026</Link>
              </Button>
              <Button
                variant="default"
                className="w-full cursor-pointer rounded px-8 py-6 text-xs font-extrabold text-secondary uppercase transition-all duration-300 sm:w-auto"
                size="lg"
              >
                <Link href="/become-a-sponsor">Become a Sponsor</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative bg-secondary py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <h2 className="mx-auto max-w-7xl px-5 text-3xl leading-tight font-semibold text-primary uppercase sm:text-4xl lg:text-5xl">
            A Global Entertainment Platform
          </h2>
        </motion.div>
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="w-full lg:max-w-3xl"
          >
            <div className="space-y-5 py-8 text-base leading-relaxed sm:py-10 sm:text-lg">
              <p className="text-white/90">
                Rang Production is an international entertainment and event
                production company headquartered in Montreal, Canada. Founded by
                visionary entrepreneur Tanvir Ahmed, the organization has grown
                into a cultural platform dedicated to connecting audiences
                through music, arts, and world-class live events.
              </p>
              <p className="text-white/90">
                Over the past decade, Rang Production has successfully hosted
                international concerts and cultural showcases featuring
                celebrated artists from South Asia and beyond. Each event is
                designed with premium production, strategic marketing, and
                unforgettable audience experiences.
              </p>
              <p className="text-white/90">
                Through global collaborations and creative storytelling, Rang
                Production continues to build bridges between cultures and
                communities worldwide.
              </p>
              <Button
                variant="default"
                className="w-full rounded px-8 py-6 text-sm text-white uppercase sm:w-auto"
                size="lg"
              >
                <Link href="/about-us">Discover Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 dark:bg-secondary">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpotlight.backgroundImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${activeSpotlight.backgroundImage}')`,
            }}
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/35" />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeIn",
          }}
          className="relative z-20 bg-linear-to-br from-white via-primary to-primary bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Event In Spotlight
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="relative z-20 mx-auto mt-12 max-w-5xl px-5"
          onTouchStart={handleSpotlightTouchStart}
          onTouchEnd={handleSpotlightTouchEnd}
        >
          <div className="relative overflow-hidden rounded-4xl border border-primary/25 bg-white p-7 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-10 dark:bg-black">
            <div className="pointer-events-none absolute -top-28 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpotlight.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative space-y-6 dark:text-white"
              >
                <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                  {activeSpotlight.kicker}
                </p>

                <div className="space-y-3">
                  <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
                    {activeSpotlight.title}
                  </h2>
                  <p className="max-w-3xl text-lg font-medium text-secondary/85 dark:text-white/85">
                    {activeSpotlight.subtitle}
                  </p>
                </div>

                <p className="max-w-4xl text-base leading-relaxed text-secondary/80 sm:text-lg dark:text-white/80">
                  {activeSpotlight.description}
                </p>

                <div className="grid gap-3 text-sm sm:grid-cols-3 sm:text-base">
                  <div className="group rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:bg-secondary/10 dark:text-white dark:hover:bg-secondary/20">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-secondary/20 dark:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
                        <MapPin
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                        />
                      </span>
                      <span>{activeSpotlight.location}</span>
                    </div>
                  </div>
                  <div className="group rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:bg-secondary/10 dark:text-white dark:hover:bg-secondary/20">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-secondary/20 dark:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
                        <CalendarDays
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                        />
                      </span>
                      <span>{activeSpotlight.date}</span>
                    </div>
                  </div>
                  <div className="group rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:bg-secondary/10 dark:text-white dark:hover:bg-secondary/20">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-secondary/20 dark:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
                        <Building2
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                        />
                      </span>
                      <span>{activeSpotlight.venue}</span>
                    </div>
                  </div>
                </div>

                <p className="max-w-4xl text-sm leading-relaxed text-secondary/75 sm:text-base dark:text-white/75">
                  {activeSpotlight.details}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <Link
                    href={activeSpotlight.href}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90"
                  >
                    {activeSpotlight.cta}
                  </Link>

                  <div className="ml-auto flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goToPreviousSpotlight}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-secondary transition-colors duration-300 hover:bg-primary hover:text-white dark:text-white"
                      aria-label="Show previous spotlight event"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNextSpotlight}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-secondary transition-colors duration-300 hover:bg-primary hover:text-white dark:text-white"
                      aria-label="Show next spotlight event"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>
      </section>

      <section className="bg-secondary py-20 text-white dark:bg-secondary/10">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Our Core Services
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Concerts & Live Events",
                description:
                  "Large-scale concerts featuring international artists.",
              },
              {
                title: "Artist Management",
                description:
                  "Collaborations with globally recognized performers.",
              },
              {
                title: "Awards & Recognition Platforms",
                description:
                  "Premium international award ceremonies celebrating excellence.",
              },
              {
                title: "Event Marketing & Brand Activation",
                description:
                  "Strategic branding opportunities for global partners.",
              },
            ].map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10"
              >
                <h3 className="mt-4 text-2xl leading-snug font-semibold text-white">
                  {index + 1}. {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-secondary">
        <div className="relative overflow-hidden bg-linear-to-b from-white via-white to-primary/8 py-20 dark:from-secondary dark:via-secondary dark:to-secondary/80">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-linear-to-b from-primary/20 to-transparent dark:from-primary/25 dark:to-transparent" />
          <div className="relative container mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl space-y-3 text-center"
            >
              <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
                Global Artists
              </p>
              <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
                Artists Who Have Shared Our Stage
              </h2>
            </motion.div>

            <div className="relative mt-12 overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 38,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="flex w-max gap-4"
              >
                {[0, 1].map((track) => (
                  <div
                    key={`artist-track-${track}`}
                    className="grid w-max shrink-0 auto-cols-[9.5rem] grid-flow-col grid-rows-2 gap-4 sm:auto-cols-[12rem]"
                  >
                    {globalArtists.map((artist, index) => (
                      <article
                        key={`${artist.name}-${track}-${index}`}
                        className="group relative aspect-3/4 overflow-hidden rounded-3xl border border-secondary/10 bg-secondary dark:border-white/15 dark:bg-secondary/70"
                      >
                        <img
                          src={artist.image}
                          alt={artist.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-black/5" />
                        <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/20 bg-black/35 px-4 py-3 backdrop-blur-sm">
                          <h3 className="text-base font-semibold text-white sm:text-lg">
                            {artist.name}
                          </h3>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Our Impact
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Built Through Vision, Scale, and Global Reach
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {impactHighlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/8"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[10px] font-semibold tracking-[0.28em] text-primary/90 uppercase">
                    Highlight
                  </p>
                  <span className="text-sm font-semibold text-white/45 transition-colors duration-300 group-hover:text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-lg leading-snug font-semibold text-white sm:text-xl">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            onViewportEnter={() => setShowImpactCounters(true)}
            viewport={{ once: true }}
            className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl border border-primary/30 bg-linear-to-b from-white/12 to-white/2 p-6 text-center shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm"
              >
                <div className="pointer-events-none absolute -top-10 -right-8 h-24 w-24 rounded-full bg-primary/25 blur-2xl" />
                <p className="relative text-5xl leading-none font-bold text-primary sm:text-6xl">
                  <CountUp
                    to={stat.value}
                    suffix={stat.suffix}
                    start={showImpactCounters}
                  />
                </p>
                <p className="relative mt-3 text-sm leading-snug font-semibold text-white/90 sm:text-base">
                  {stat.label}
                </p>
                <div className="relative mx-auto mt-5 h-1 w-16 rounded-full bg-white/15">
                  <div className="h-full w-10 rounded-full bg-primary" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 dark:bg-secondary">
        <div className="pointer-events-none absolute -top-28 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl rounded-4xl border border-primary/25 bg-white p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:p-12 dark:bg-black"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Sponsorship
            </p>
            <h2 className="mt-3 text-4xl font-bold text-secondary sm:text-5xl dark:text-white/90">
              Partner With Rang Production
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-secondary/80 sm:text-lg dark:text-white/80">
              Join us in creating one of the most prestigious international
              award platforms in the region.
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-2">
              {[
                "premium brand visibility",
                "direct engagement with influential audiences",
                "international media exposure",
                "association with excellence and leadership",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.95,
                    ease: "easeInOut",
                    delay: 0.25 + index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-secondary dark:text-white/80"
                >
                  <span className="text-xs leading-relaxed font-medium uppercase">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                variant="default"
                className="rounded px-8 py-6.25 text-sm text-white uppercase"
                size="lg"
              >
                <Link href="/become-a-sponsor">Become a Sponsor</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Media Highlights
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Moments That Moved The Audience
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mediaHighlights.map((media, index) => (
              <motion.article
                key={media.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.18,
                }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-white/15 bg-black/30"
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={media.src}
                    title={media.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="border-t border-white/10 px-5 py-4">
                  <h3 className="text-lg font-semibold text-white">
                    {media.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-secondary">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl space-y-3 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              News / Announcements
            </p>
            <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
              Latest Updates From Rang Production
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
            {featuredNews.map((item, index) => (
              <motion.article
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-4xl border border-white/15 bg-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm"
              >
                <div className="relative aspect-16/10 overflow-hidden border-b border-white/15">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
                </div>

                <div className="space-y-5 p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-secondary uppercase dark:text-white/70">
                    <span className="inline-flex items-center gap-2 tracking-[0.2em]">
                      <Newspaper className="h-3.5 w-3.5" />
                      {item.source}
                    </span>
                    <span className="inline-flex items-center gap-2 tracking-[0.2em]">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>

                  <h2 className="text-2xl leading-tight font-semibold text-secondary sm:text-3xl dark:text-white">
                    {item.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-secondary/80 sm:text-base dark:text-white/80">
                    {item.summary}
                  </p>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground uppercase transition-all duration-300 hover:-translate-y-px hover:bg-primary/85"
                  >
                    Read More
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
