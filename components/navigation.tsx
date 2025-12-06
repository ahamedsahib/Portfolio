"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Home, User, Briefcase, Code, Award, Mail, Github, Linkedin } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/awards", label: "Awards", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
]

const socialLinks = [
  { href: "https://github.com/ahamedsahib", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/ahamed-sahib-ml", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:adsahib39@gmail.com", label: "Email", icon: Mail },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)

  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      setIsNavigating(true)
      router.prefetch(href)
      router.push(href)
      setTimeout(() => setIsNavigating(false), 500)
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-6">
        {/* Page Navigation */}
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <div
              key={item.href}
              className="group relative"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => handleNavigation(item.href)}
                className="cursor-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125 shadow-lg shadow-purple-500/50"
                        : "bg-muted-foreground/30 group-hover:bg-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                    }`}
                  />
                </motion.div>
              </button>

              {/* Enhanced Tooltip */}
              <AnimatePresence>
                {hoveredItem === item.href && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-4 py-2 whitespace-nowrap pointer-events-none shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                    {/* Arrow */}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-purple-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* Divider */}
        <div className="w-3 h-px bg-border my-2" />

        {/* Social Links */}
        {socialLinks.map((social) => (
          <div
            key={social.href}
            className="group relative"
            onMouseEnter={() => setHoveredItem(social.href)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="cursor-hover block"
            >
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30 group-hover:bg-pink-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/30" />
            </motion.a>

            {/* Social Tooltip */}
            <AnimatePresence>
              {hoveredItem === social.href && (
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-8 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg px-4 py-2 whitespace-nowrap pointer-events-none shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{social.label}</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-pink-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Loading Indicator */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
