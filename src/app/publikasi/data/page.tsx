import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Database, Download, Eye, Calendar, FileText, Users, TrendingUp, Building } from "lucide-react"

export default function DataPage() {
  const dataReports = [
    {
      id: 1,
      title: "Statistik Keanggotaan per Februari 2024",
      description: "Data lengkap keanggotaan KOPKAR PELINDO per 29 Februari 2024 meliputi demografi, jenis keanggotaan, dan aktivitas anggota.",
      category: "Keanggotaan",
      date: "1 Maret 2024",
      size: "1.2 MB",
      downloads: 89,
      views: 145,
      format: "PDF",
      period: "Februari 2024"
    },
    {
      id: 2,
      title: "Data Aset dan Investasi Tahun 2023",
      description: "Rekapitulasi data aset dan portofolio investasi KOPKAR PELINDO tahun 2023 dengan analisis kinerja investasi.",
      category: "Aset",
      date: "10 Januari 2024",
      size: "2.1 MB",
      downloads: 95,
      views: 167,
      format: "PDF",
      period: "Tahun 2023"
    },
    {
      id: 3,
      title: "Statistik Simpanan dan Pinjaman Q4 2023",
      description: "Data statistik simpanan dan pinjaman periode Oktober-Desember 2023 dengan tren dan analisis pertumbuhan.",
      category: "Simpan Pinjam",
      date: "15 Januari 2024",
      size: "1.8 MB",
      downloads: 78,
      views: 123,
      format: "PDF",
      period: "Q4 2023"
    },
    {
      id: 4,
      title: "Profil Demografi Anggota 2023",
      description: "Analisis demografi lengkap anggota KOPKAR PELINDO tahun 2023 berdasarkan usia, jenis kelamin, dan unit kerja.",
      category: "Keanggotaan",
      date: "20 Desember 2023",
      size: "1.5 MB",
      downloads: 112,
      views: 189,
      format: "PDF",
      period: "Tahun 2023"
    },
    {
      id: 5,
      title: "Data Unit Usaha Koperasi 2023",
      description: "Data lengkap unit usaha KOPKAR PELINDO tahun 2023 termasuk kontribusi setiap unit terhadap pendapatan.",
      category: "Unit Usaha",
      date: "15 Desember 2023",
      size: "1.3 MB",
      downloads: 67,
      views: 98,
      format: "PDF",
      period: "Tahun 2023"
    },
    {
      id: 6,
      title: "Indikator Kinerja Koperasi 2023",
      description: "Indikator kinerja utama KOPKAR PELINDO tahun 2023 dengan benchmarking terhadap standar industri.",
      category: "Kinerja",
      date: "10 Desember 2023",
      size: "1.7 MB",
      downloads: 134,
      views: 201,
      format: "PDF",
      period: "Tahun 2023"
    }
  ]

  const keyStatistics = [
    {
      title: "Total Anggota",
      value: "1,523",
      change: "+12%",
      description: "Anggota aktif per Februari 2024",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Total Aset",
      value: "Rp 75 Miliar",
      change: "+25%",
      description: "Total aset per Desember 2023",
      icon: Building,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Total Simpanan",
      value: "Rp 58 Miliar",
      change: "+30%",
      description: "Simpanan anggota per Desember 2023",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Total Pinjaman",
      value: "Rp 42 Miliar",
      change: "+28%",
      description: "Pinjaman yang disalurkan per Desember 2023",
      icon: Database,
      color: "bg-orange-100 text-orange-600"
    }
  ]

  const dataCategories = [
    {
      name: "Keanggotaan",
      count: 8,
      description: "Data demografi dan statistik keanggotaan",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Aset",
      count: 6,
      description: "Data aset dan investasi koperasi",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Simpan Pinjam",
      count: 12,
      description: "Statistik simpanan dan pinjaman",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Unit Usaha",
      count: 4,
      description: "Data unit usaha dan kontribusi",
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Kinerja",
      count: 7,
      description: "Indikator kinerja dan benchmarking",
      color: "bg-red-100 text-red-600"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/publikasi">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Publikasi
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary/10 rounded-lg p-3">
                <Database className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Data Koperasi</h1>
                <p className="text-xl text-muted-foreground">
                  Statistik keanggotaan, data aset, dan informasi kinerja KOPKAR PELINDO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Statistik Utama
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyStatistics.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className={`rounded-lg w-10 h-10 flex items-center justify-center mb-3 ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="flex items-center gap-1 text-sm text-green-600 mb-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>{stat.change}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Kategori Data</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataCategories.map((category) => (
                <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg w-8 h-8 flex items-center justify-center ${category.color}`}>
                        <Database className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Data Terbaru</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter Periode
                </Button>
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  Filter Kategori
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {dataReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{report.category}</Badge>
                        <Badge variant="outline" className="text-xs">{report.format}</Badge>
                        <Badge variant="secondary" className="text-xs">{report.period}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{report.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{report.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {report.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{report.size}</span>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{report.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{report.views}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Unduh
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Visualisasi Data
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pertumbuhan Anggota</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-blue-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Grafik pertumbuhan anggota 5 tahun terakhir
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Distribusi Aset</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Database className="h-12 w-12 text-green-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Komposisi aset berdasarkan kategori
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Arsip Data
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: "2023", reports: 24, description: "24 laporan tersedia" },
                { year: "2022", reports: 18, description: "18 laporan tersedia" },
                { year: "2021", reports: 15, description: "15 laporan tersedia" },
                { year: "2020", reports: 12, description: "12 laporan tersedia" }
              ].map((archive) => (
                <Card key={archive.year} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Tahun {archive.year}</h3>
                        <p className="text-sm text-muted-foreground">{archive.description}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Lihat Semua
                      </Button>
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
            Butuh Data Spesifik?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Jika Anda membutuhkan data yang tidak tersedia atau ingin request data khusus, 
            silakan hubungi tim data kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Database className="mr-2 h-4 w-4" />
              Request Data
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Hubungi Tim Data
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}