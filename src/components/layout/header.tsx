"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "Beranda",
      href: "/"
    },
    {
      title: "Profile",
      href: "/profile",
      submenu: [
        { title: "Struktur Organisasi", href: "/profile/struktur" },
        { title: "Visi dan Misi", href: "/profile/visi-misi" },
        { title: "Tugas dan Fungsi", href: "/profile/tugas-fungsi" },
        { title: "Regulasi dan Hukum", href: "/profile/regulasi" }
      ]
    },
    {
      title: "Berita",
      href: "/berita",
      submenu: [
        { title: "Siaran Pers", href: "/berita/siaran-pers" },
        { title: "Warta Koprasi", href: "/berita/warta" },
        { title: "Galeri Foto", href: "/berita/galeri" }
      ]
    },
    {
      title: "Publikasi",
      href: "/publikasi",
      submenu: [
        { title: "Laporan Keuangan", href: "/publikasi/laporan-keuangan" },
        { title: "Data Koprasi", href: "/publikasi/data" },
        { title: "Kegiatan", href: "/publikasi/kegiatan" }
      ]
    },
    {
      title: "Pengumuman",
      href: "/pengumuman"
    },
    {
      title: "Layanan",
      href: "/layanan",
      submenu: [
        { title: "Simpan Dan Pinjam", href: "/layanan/simpan-pinjam" },
        { title: "Login Member", href: "/layanan/login" },
        { title: "Registrasi", href: "/layanan/registrasi" }
      ]
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">KP</span>
            </div>
            <span className="font-bold text-xl text-primary">KOPKAR PELINDO</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary hover:bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.submenu.map((subItem) => (
                            <NavigationMenuLink key={subItem.title} asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="block text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header