"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 cursor-hover group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
                AS
              </div>
              <span className="text-xl font-bold hidden sm:block group-hover:text-gradient transition-all">
                Ahamed Sahib
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-hover ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "hover:bg-purple-500/10 hover:text-purple-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
            })}
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-3 space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  initial={false}
                  animate={{
                    x: isOpen ? 0 : -20,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: isOpen ? index * 0.05 : 0 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                        : "hover:bg-purple-500/10 hover:text-purple-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
