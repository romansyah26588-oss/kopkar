import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, BarChart3, Calendar, Download, Eye, ArrowRight, TrendingUp, Database } from "lucide-react"

export default function PublikasiPage() {
  const publicationCategories = [
    {
      title: "Laporan Keuangan",
      description: "Laporan keuangan audited dan laporan keuangan triwulan KOPKAR PELINDO",
      icon: BarChart3,
      href: "/publikasi/laporan-keuangan",
      count: 24,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Data Koprasi",
      description: "Statistik keanggotaan, data aset, dan informasi kinerja koperasi",
      icon: Database,
      href: "/publikasi/data",
      count: 18,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Kegiatan",
      description: "Dokumentasi dan laporan kegiatan yang telah diselenggarakan",
      icon: Calendar,
      href: "/publikasi/kegiatan",
      count: 36,
      color: "bg-purple-100 text-purple-600"
    }
  ]

  const latestPublications = [
    {
      id: 1,
      title: "Laporan Keuangan Audited Tahun 2023",
      description: "Laporan keuangan audited KOPKAR PELINDO tahun buku 2023 yang telah diperiksa oleh Kantor AkPublik 'Rekan & Partner'.",
      category: "Laporan Keuangan",
      date: "5 Maret 2024",
      size: "2.4 MB",
      downloads: 156,
      views: 234,
      format: "PDF",
      href: "/publikasi/laporan-keuangan"
    },
    {
      id: 2,
      title: "Statistik Keanggotaan per Februari 2024",
      description: "Data lengkap keanggotaan KOPKAR PELINDO per 29 Februari 2024 meliputi demografi dan aktivitas anggota.",
      category: "Data Koprasi",
      date: "1 Maret 2024",
      size: "1.2 MB",
      downloads: 89,
      views: 145,
      format: "PDF",
      href: "/publikasi/data"
    },
    {
      id: 3,
      title: "Laporan Pelatihan Kewirausahaan Batch 3",
      description: "Laporan lengkap pelaksanaan pelatihan kewirausahaan untuk 50 anggota baru pada bulan Februari 2024.",
      category: "Kegiatan",
      date: "28 Februari 2024",
      size: "3.8 MB",
      downloads: 67,
      views: 98,
      format: "PDF",
      href: "/publikasi/kegiatan"
    },
    {
      id: 4,
      title: "Laporan Keuangan Triwulan IV 2023",
      description: "Laporan keuangan periode Oktober-Desember 2023 dengan analisis kinerja dan proyeksi.",
      category: "Laporan Keuangan",
      date: "15 Januari 2024",
      size: "1.8 MB",
      downloads: 123,
      views: 189,
      format: "PDF",
      href: "/publikasi/laporan-keuangan"
    },
    {
      id: 5,
      title: "Data Aset dan Investasi Tahun 2023",
      description: "Rekapitulasi data aset dan portofolio investasi KOPKAR PELINDO tahun 2023.",
      category: "Data Koprasi",
      date: "10 Januari 2024",
      size: "2.1 MB",
      downloads: 95,
      views: 167,
      format: "PDF",
      href: "/publikasi/data"
    },
    {
      id: 6,
      title: "Dokumentasi RAT 2024",
      description: "Dokumentasi lengkap Rapat Anggota Tahunan 2024 termasuk materi presentasi dan notulensi.",
      category: "Kegiatan",
      date: "20 Maret 2024",
      size: "5.2 MB",
      downloads: 201,
      views: 312,
      format: "PDF",
      href: "/publikasi/kegiatan"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Publikasi KOPKAR PELINDO
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Akses informasi resmi dan dokumen penting mengenai laporan keuangan, 
              data koperasi, dan dokumentasi kegiatan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Kategori Publikasi
            </h2>
            <p className="text-lg text-muted-foreground">
              Jelajahi publikasi berdasarkan kategori yang tersedia
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {publicationCategories.map((category) => (
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
                    <Badge variant="secondary">{category.count} Dokumen</Badge>
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

      {/* Latest Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Publikasi Terbaru
              </h2>
              <p className="text-lg text-muted-foreground">
                Dokumen dan laporan terbaru dari KOPKAR PELINDO
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="#">
                Lihat Semua Publikasi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPublications.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={item.category === "Laporan Keuangan" ? "default" : item.category === "Data Koprasi" ? "secondary" : "outline"}>
                      {item.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">{item.format}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{item.date}</span>
                      <span>{item.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{item.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{item.views}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={item.href}>
                          <Download className="h-4 w-4 mr-1" />
                          Unduh
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Statistik Publikasi
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">78</div>
                <div className="text-sm text-muted-foreground">Total Dokumen</div>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Download className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">2.5K</div>
                <div className="text-sm text-muted-foreground">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent mb-1">8.7K</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">156</div>
                <div className="text-sm text-muted-foreground">Downloads/Bulan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Arsip Publikasi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: "2024", count: 24, description: "Publikasi tahun 2024" },
                { year: "2023", count: 32, description: "Publikasi tahun 2023" },
                { year: "2022", count: 28, description: "Publikasi tahun 2022" },
                { year: "2021", count: 18, description: "Publikasi tahun 2021" }
              ].map((archive) => (
                <Card key={archive.year} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Tahun {archive.year}</h3>
                        <p className="text-sm text-muted-foreground">{archive.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{archive.count}</div>
                        <p className="text-sm text-muted-foreground">Dokumen</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Informasi Lebih Lanjut?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Jika Anda membutuhkan informasi atau dokumen spesifik yang tidak tersedia, 
            silakan hubungi kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              Hubungi Kami
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Request Dokumen
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}