import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Megaphone, Calendar, ArrowRight, Eye, Clock } from "lucide-react"

export default function BeritaPage() {
  const newsItems = [
    {
      id: 1,
      title: "Rapat Anggota Tahunan 2024 Berhasil Digelar",
      excerpt: "KOPKAR PELINDO berhasil menyelenggarakan RAT 2024 dengan agenda penting dan keputusan strategis untuk kemajuan koperasi.",
      category: "Siaran Pers",
      date: "15 Maret 2024",
      readTime: "5 menit",
      views: 234,
      image: "/api/placeholder/400/250",
      href: "/berita/siaran-pers"
    },
    {
      id: 2,
      title: "Program Baru: Pinjaman Pendidikan dengan Bunga Rendah",
      excerpt: "KOPKAR PELINDO meluncurkan program pinjaman pendidikan dengan bunga khusus untuk mendukung pendidikan anak anggota.",
      category: "Siaran Pers",
      date: "10 Maret 2024",
      readTime: "3 menit",
      views: 189,
      image: "/api/placeholder/400/250",
      href: "/berita/siaran-pers"
    },
    {
      id: 3,
      title: "Laporan Keuangan Audited Tahun 2023",
      excerpt: "Laporan keuangan audited KOPKAR PELINDO tahun 2023 menunjukkan pertumbuhan positif dan kinerja yang solid.",
      category: "Warta Koprasi",
      date: "5 Maret 2024",
      readTime: "8 menit",
      views: 156,
      image: "/api/placeholder/400/250",
      href: "/berita/warta"
    },
    {
      id: 4,
      title: "Pelatihan Kewirausahaan Bagi Anggota Baru",
      excerpt: "Kegiatan pelatihan kewirausahaan untuk meningkatkan kapasitas anggota dalam mengelola usaha mandiri.",
      category: "Warta Koprasi",
      date: "28 Februari 2024",
      readTime: "4 menit",
      views: 98,
      image: "/api/placeholder/400/250",
      href: "/berita/warta"
    },
    {
      id: 5,
      title: "Kunjungan Kerja ke Koperasi Teladan Jawa Timur",
      excerpt: "Rombongan pengurus KOPKAR PELINDO melakukan studi banding ke koperasi teladan untuk belajar best practices.",
      category: "Warta Koprasi",
      date: "20 Februari 2024",
      readTime: "6 menit",
      views: 145,
      image: "/api/placeholder/400/250",
      href: "/berita/warta"
    },
    {
      id: 6,
      title: "Festival Koperasi 2024: KOPKAR PELINDO Ikut Serta",
      excerpt: "Partisipasi KOPKAR PELINDO dalam Festival Koperasi 2024 dengan memamerkan berbagai layanan unggulan.",
      category: "Galeri Foto",
      date: "15 Februari 2024",
      readTime: "3 menit",
      views: 267,
      image: "/api/placeholder/400/250",
      href: "/berita/galeri"
    }
  ]

  const categories = [
    {
      title: "Siaran Pers",
      description: "Pengumuman resmi dan pernyataan pers dari pengurus KOPKAR PELINDO",
      icon: Megaphone,
      href: "/berita/siaran-pers",
      count: 12,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Warta Koprasi",
      description: "Berita mengenai kegiatan internal dan perkembangan koperasi",
      icon: Newspaper,
      href: "/berita/warta",
      count: 28,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Galeri Foto",
      description: "Dokumentasi foto kegiatan dan acara KOPKAR PELINDO",
      icon: Calendar,
      href: "/berita/galeri",
      count: 45,
      color: "bg-purple-100 text-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Berita KOPKAR PELINDO
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dapatkan informasi terbaru seputar kegiatan, program, dan perkembangan 
              KOPKAR PELINDO untuk tetap terhubung dengan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Kategori Berita
            </h2>
            <p className="text-lg text-muted-foreground">
              Jelajahi berita berdasarkan kategori yang tersedia
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{category.count} Artikel</Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={category.href}>
                        Lihat Semua
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Berita Terkini
              </h2>
              <p className="text-lg text-muted-foreground">
                Informasi terbaru dari KOPKAR PELINDO
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="#">
                Lihat Semua Berita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                  <Newspaper className="h-12 w-12 text-primary/50" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={item.category === "Siaran Pers" ? "default" : item.category === "Warta Koprasi" ? "secondary" : "outline"}>
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={item.href}>
                        Baca
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Berlangganan Newsletter
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Dapatkan berita terbaru dan informasi penting langsung di inbox Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="px-4 py-2 rounded-lg text-foreground bg-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              Berlangganan
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}