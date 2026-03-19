"use client"

import { motion } from "motion/react"
import { CalendarDays, ExternalLink, Globe2, Newspaper } from "lucide-react"

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

export default function Page() {
  return (
    <main className="bg-white dark:bg-secondary">
      <section className="relative overflow-hidden bg-secondary py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-4xl space-y-5 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Latest Coverage
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Rang Production in the News
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Two Bengali media reports, paraphrased into short English updates
              for the main site.
            </p>
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
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 uppercase">
                    <span className="inline-flex items-center gap-2 tracking-[0.2em]">
                      <Newspaper className="h-3.5 w-3.5" />
                      {item.source}
                    </span>
                    <span className="inline-flex items-center gap-2 tracking-[0.2em]">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>

                  <h2 className="text-2xl leading-tight font-semibold text-white sm:text-3xl">
                    {item.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-white/80 sm:text-base">
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
    </main>
  )
}
