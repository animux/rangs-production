"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react"

const bentoPattern = [
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
]

const pastEventSections = [
  {
    title: "RANG Production Signature Meet-Up 2026",
    subtitle:
      "Held at Sheraton Dhaka, Banani, this exclusive gathering brought together industry leaders, partners, and creative professionals for an evening of networking, collaboration, and vision-building — setting the foundation for future global events.",
    images: [
      "/event-picture/one/1.JPG",
      "/event-picture/one/2.JPG",
      "/event-picture/one/3.JPG",
      "/event-picture/one/4.JPG",
      "/event-picture/one/5.JPG",
      "/event-picture/one/6.JPG",
      "/event-picture/one/7.JPG",
      "/event-picture/one/8.JPG",
      "/event-picture/one/9.JPG",
      "/event-picture/one/10.JPG",
      "/event-picture/one/11.JPG",
    ],
  },
  {
    title: "Unforgettable 90's - Live in Montreal",
    subtitle:
      "A nostalgic musical night in Montreal featuring legendary artists Kumar Sanu and Sadhana Sargam, celebrating the timeless hits of the 90s. Hosted at Théâtre Saint-Denis, the event delivered a premium live experience filled with iconic melodies and unforgettable moments.",
    images: [
      "/event-picture/two/1.jpg",
      "/event-picture/two/2.jpg",
      "/event-picture/two/3.jpg",
      "/event-picture/two/4.jpg",
      "/event-picture/two/5.jpg",
      "/event-picture/two/6.jpg",
      "/event-picture/two/7.jpg",
      "/event-picture/two/8.jpg",
      "/event-picture/two/9.jpg",
      "/event-picture/two/10.jpg",
    ],
  },
  {
    title: "Rang Int. Star & Business Awards 2025 (RISBA)",
    subtitle:
      "Rang Int. Star & Business Awards 2025 (RISBA) was a grand international celebration of excellence, held at Sheraton Laval Hotel, Montreal, Canada. The event brought together industry leaders, entrepreneurs, and creatives for an evening of recognition, prestige, and world-class production, reflecting Rang Production’s global standard in hosting premium award shows.",
    images: [
      "/event-picture/three/1.JPG",
      "/event-picture/three/2.JPG",
      "/event-picture/three/3.JPG",
      "/event-picture/three/4.JPG",
      "/event-picture/three/5.JPG",
      "/event-picture/three/6.JPG",
      "/event-picture/three/7.JPG",
      "/event-picture/three/8.JPG",
      "/event-picture/three/9.JPG",
      "/event-picture/three/10.JPG",
      "/event-picture/three/11.JPG",
    ],
  },
  {
    title: "Our Previous Events & Highlights",
    subtitle:
      "A curated collection of Rang Production’s past events, showcasing a diverse portfolio of concerts, award shows, and large-scale productions across international stages. Each event reflects our commitment to premium execution, creative excellence, and delivering unforgettable experiences to audiences worldwide.",
    images: [
      "/event-picture/four/1.jpg",
      "/event-picture/four/2.jpg",
      "/event-picture/four/3.jpg",
      "/event-picture/four/4.jpg",
      "/event-picture/four/5.JPG",
      "/event-picture/four/6.JPG",
      "/event-picture/four/7.JPG",
      "/event-picture/four/8.JPG",
      "/event-picture/four/9.jpg",
      "/event-picture/four/10.JPG",
      "/event-picture/four/11.JPG",
      "/event-picture/four/12.jpg",
      "/event-picture/four/13.jpg",
      "/event-picture/four/14.jpg",
      "/event-picture/four/15.jpg",
      "/event-picture/four/16.jpg",
      "/event-picture/four/17.jpg",
      "/event-picture/four/18.jpg",
      "/event-picture/four/19.jpg",
      "/event-picture/four/20.jpg",
      "/event-picture/four/21.jpg",
      "/event-picture/four/22.jpg",
      "/event-picture/four/23.jpg",
      "/event-picture/four/24.jpg",
      "/event-picture/four/25.JPG",
    ],
  },
]

type GalleryImage = {
  src: string
  sectionTitle: string
  sectionIndex: number
  imageIndex: number
}

export default function Page() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const [spotlightIndex, setSpotlightIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const spotlightEvents = [
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

  const galleryImages = useMemo<GalleryImage[]>(
    () =>
      pastEventSections.flatMap((section, sectionIndex) =>
        section.images.map((src, imageIndex) => ({
          src,
          sectionTitle: section.title,
          sectionIndex,
          imageIndex,
        }))
      ),
    []
  )

  const imageIndexLookup = useMemo(() => {
    const lookup = new Map<string, number>()
    galleryImages.forEach((image, index) => {
      lookup.set(`${image.sectionIndex}-${image.imageIndex}`, index)
    })
    return lookup
  }, [galleryImages])

  const openLightbox = useCallback((imageIndex: number) => {
    setActiveImageIndex(imageIndex)
  }, [])

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null)
  }, [])

  const showPrevious = useCallback(() => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return null
      }

      return (currentIndex - 1 + galleryImages.length) % galleryImages.length
    })
  }, [galleryImages.length])

  const showNext = useCallback(() => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return null
      }

      return (currentIndex + 1) % galleryImages.length
    })
  }, [galleryImages.length])

  useEffect(() => {
    if (activeImageIndex === null) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        showPrevious()
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        showNext()
      }

      if (event.key === "Escape") {
        event.preventDefault()
        closeLightbox()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeImageIndex, closeLightbox, showNext, showPrevious])

  useEffect(() => {
    if (activeImageIndex === null) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeImageIndex])

  const activeImage =
    activeImageIndex === null ? null : galleryImages[activeImageIndex]
  const activeImageCounter =
    activeImageIndex === null ? 0 : activeImageIndex + 1

  return (
    <main className="bg-white dark:bg-secondary">
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

      <section className="relative overflow-hidden bg-white py-20 text-secondary dark:bg-secondary dark:text-white">
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
              Past Events
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">Event Archives</h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-secondary/75 sm:text-lg dark:text-white/75">
              Three dedicated categories with visual galleries from previous
              productions.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-6xl space-y-5 py-5">
            {pastEventSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: sectionIndex * 0.07,
                }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                    Past Events
                  </p>
                  <h3 className="text-3xl font-bold text-secondary sm:text-4xl dark:text-white">
                    {section.title}
                  </h3>
                  <p className="text-sm text-secondary/75 uppercase sm:text-base dark:text-white/75">
                    {section.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-4 md:grid-flow-dense md:auto-rows-[120px] md:grid-cols-8 lg:auto-rows-[140px]">
                  {section.images?.map((image, imageIndex) => (
                    <motion.button
                      key={`${section.title}-${imageIndex}`}
                      type="button"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                        delay: imageIndex * 0.02,
                      }}
                      viewport={{ once: true }}
                      onClick={() => {
                        const globalImageIndex = imageIndexLookup.get(
                          `${sectionIndex}-${imageIndex}`
                        )

                        if (globalImageIndex !== undefined) {
                          openLightbox(globalImageIndex)
                        }
                      }}
                      className={`group relative cursor-zoom-in overflow-hidden rounded-3xl border border-white/15 text-left ${bentoPattern[imageIndex % bentoPattern.length]}`}
                    >
                      <Image
                        src={image}
                        alt={`${section.title} gallery image ${imageIndex + 1}`}
                        width={900}
                        height={700}
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image viewer"
          onClick={closeLightbox}
        >
          <div
            className="relative flex h-full w-full max-w-7xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-black/80"
              aria-label="Close viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-black/80 md:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <Image
              src={activeImage.src}
              alt={`${activeImage.sectionTitle} gallery image ${activeImage.imageIndex + 1}`}
              width={1800}
              height={1200}
              loading="lazy"
              sizes="100vw"
              className="max-h-[88vh] w-auto max-w-full rounded-2xl object-contain"
            />

            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-black/80 md:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="absolute right-1/2 bottom-4 translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium tracking-wide text-white/90 sm:text-sm">
              {activeImage.sectionTitle} • {activeImageCounter} /{" "}
              {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
