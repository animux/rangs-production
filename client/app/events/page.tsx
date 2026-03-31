"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
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
      "/events/signature-meetup/1.JPG",
      "/events/signature-meetup/2.JPG",
      "/events/signature-meetup/3.JPG",
      "/events/signature-meetup/4.JPG",
      "/events/signature-meetup/5.JPG",
      "/events/signature-meetup/6.JPG",
      "/events/signature-meetup/7.JPG",
      "/events/signature-meetup/8.JPG",
      "/events/signature-meetup/9.JPG",
      "/events/signature-meetup/10.JPG",
      "/events/signature-meetup/11.JPG",
    ],
  },
  {
    title: "Unforgettable 90's - Live in Montreal",
    subtitle:
      "A nostalgic musical night in Montreal featuring legendary artists Kumar Sanu and Sadhana Sargam, celebrating the timeless hits of the 90s. Hosted at Théâtre Saint-Denis, the event delivered a premium live experience filled with iconic melodies and unforgettable moments.",
    images: [
      "/events/kumar-sanu/1.JPG",
      "/events/kumar-sanu/2.JPG",
      "/events/kumar-sanu/3.JPG",
      "/events/kumar-sanu/4.JPG",
      "/events/kumar-sanu/5.JPG",
      "/events/kumar-sanu/6.JPG",
      "/events/kumar-sanu/7.JPG",
      "/events/kumar-sanu/8.JPG",
      "/events/kumar-sanu/9.JPG",
      "/events/kumar-sanu/10.JPG",
    ],
  },
  {
    title: "Rang Int. Star & Business Awards 2025 (RISBA)",
    subtitle:
      "Rang Int. Star & Business Awards 2025 (RISBA) was a grand international celebration of excellence, held at Sheraton Laval Hotel, Montreal, Canada. The event brought together industry leaders, entrepreneurs, and creatives for an evening of recognition, prestige, and world-class production, reflecting Rang Production’s global standard in hosting premium award shows.",
    images: [
      "/events/risba-2025/1.JPG",
      "/events/risba-2025/2.JPG",
      "/events/risba-2025/3.JPG",
      "/events/risba-2025/4.JPG",
      "/events/risba-2025/5.JPG",
      "/events/risba-2025/6.JPG",
      "/events/risba-2025/7.JPG",
      "/events/risba-2025/8.JPG",
      "/events/risba-2025/9.JPG",
      "/events/risba-2025/10.JPG",
      "/events/risba-2025/11.JPG",
    ],
  },
  {
    title: "Our Previous Events & Highlights",
    subtitle:
      "A curated collection of Rang Production’s past events, showcasing a diverse portfolio of concerts, award shows, and large-scale productions across international stages. Each event reflects our commitment to premium execution, creative excellence, and delivering unforgettable experiences to audiences worldwide.",
    images: [
      "/events/previous-events/1.JPG",
      "/events/previous-events/2.JPG",
      "/events/previous-events/3.JPG",
      "/events/previous-events/4.JPG",
      "/events/previous-events/5.JPG",
      "/events/previous-events/6.JPG",
      "/events/previous-events/7.JPG",
      "/events/previous-events/8.JPG",
      "/events/previous-events/9.JPG",
      "/events/previous-events/10.JPG",
      "/events/previous-events/11.JPG",
      "/events/previous-events/12.JPG",
      "/events/previous-events/13.JPG",
      "/events/previous-events/14.JPG",
      "/events/previous-events/15.JPG",
      "/events/previous-events/16.JPG",
      "/events/previous-events/17.JPG",
      "/events/previous-events/18.JPG",
      "/events/previous-events/19.JPG",
      "/events/previous-events/20.JPG",
      "/events/previous-events/21.JPG",
      "/events/previous-events/22.JPG",
      "/events/previous-events/23.JPG",
      "/events/previous-events/24.JPG",
      "/events/previous-events/25.JPG",
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
      <section
        className="bg-cover bg-center bg-no-repeat py-20 dark:bg-secondary"
        style={{ backgroundImage: "url('/venue-risba.jpeg')" }}
      >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-linear-to-br from-white via-primary to-primary bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Events in Spotlight
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl px-5"
        >
          <div className="relative overflow-hidden rounded-4xl border border-primary/25 bg-white p-7 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-10 dark:bg-black">
            <div className="pointer-events-none absolute -top-28 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative space-y-6 dark:text-white">
              <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Upcoming
              </p>

              <div className="space-y-3">
                <h2 className="text-4xl font-bold text-secondary sm:text-5xl dark:text-white">
                  RISBA 2026 - Dhaka
                </h2>
                <p className="max-w-3xl text-lg font-medium text-secondary/85 dark:text-white/85">
                  Rang International Star &amp; Business Awards - Season 2
                </p>
              </div>

              <p className="max-w-4xl text-base leading-relaxed text-secondary/80 sm:text-lg dark:text-white/80">
                An international awards ceremony recognizing excellence across
                entertainment, business, leadership, and entrepreneurship.
              </p>

              <div className="grid gap-3 text-sm sm:grid-cols-3 sm:text-base">
                <div className="group rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:bg-secondary/10 dark:text-white dark:hover:bg-secondary/20">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-secondary/20 dark:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
                      <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                    </span>
                    <span>Dhaka, Bangladesh</span>
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
                    <span>November 2026</span>
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
                    <span>Bangladesh China Friendship Conference Centre</span>
                  </div>
                </div>
              </div>

              <p className="max-w-4xl text-sm leading-relaxed text-secondary/75 sm:text-base dark:text-white/75">
                The event will bring together celebrities, entrepreneurs,
                corporate leaders, and global personalities under one
                prestigious platform.
              </p>

              <div className="pt-2">
                <Link
                  href="/risba-2026"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90"
                >
                  View Event Details
                </Link>
              </div>
            </div>
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
                      <img
                        src={image}
                        alt={`${section.title} gallery image ${imageIndex + 1}`}
                        loading="lazy"
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

            <img
              src={activeImage.src}
              alt={`${activeImage.sectionTitle} gallery image ${activeImage.imageIndex + 1}`}
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
