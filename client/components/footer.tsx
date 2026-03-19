import Link from "next/link"
import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiTiktok,
} from "@icons-pack/react-simple-icons"

const navItems = [
  { name: "Home", href: "/" },
  { name: "RISBA 2026", href: "/risba-2026" },
  { name: "Events", href: "/events" },
  { name: "About Rang", href: "/about-us" },
  { name: "Partner", href: "/become-a-sponsor" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact-us" },
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/rangproductionofficial",
    icon: SiFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rangproductionofficial",
    icon: SiInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCQJKJpJb2tt2E3TaudYVPYQ",
    icon: SiYoutube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@rangproduction",
    icon: SiTiktok,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const officeAddress = "8425 Wiseman Ave, Montreal, Quebec H3N 2P5"
  const contactEmail = "contact.rangproduction@gmail.com"
  const contactPhone = "+1 (514) 962-8662"

  return (
    <footer className="border-t border-primary/30 bg-secondary text-white">
      <div className="h-1 w-full bg-linear-to-r from-transparent via-primary/80 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm tracking-wide text-white/80 uppercase transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/8 p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Contact Info
              </p>
              <p className="mt-3 text-sm text-white/85">{officeAddress}</p>
              <Link
                href={`mailto:${contactEmail}`}
                className="mt-2 block text-sm text-white/85 transition-colors hover:text-primary"
              >
                {contactEmail}
              </Link>
              <Link
                href="tel:+15149628662"
                className="mt-1 block text-sm text-white/85 transition-colors hover:text-primary"
              >
                {contactPhone}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-end">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Follow Us
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-full border border-primary/30 bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-secondary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-primary/20 pt-6 text-center text-sm text-white/70 md:flex-row">
          <p>Copyright {currentYear} Rangs Production. All rights reserved.</p>
          <p>Developed by Atomic Digital</p>
        </div>
      </div>
    </footer>
  )
}
