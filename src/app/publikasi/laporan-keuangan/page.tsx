import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BarChart3, Download, Eye, Calendar, FileText, TrendingUp, TrendingDown } from "lucide-react"

export default function LaporanKeuanganPage() {
  const financialReports = [
    {
      id: 1,
      title: "Laporan Keuangan Audited Tahun 2023",
      description: "Laporan keuangan audited KOPKAR PELINDO tahun buku 2023 yang telah diperiksa oleh Kantor AkPublik 'Rekan & Partner' dengan opini Wajar Tanpa Pengecualian (WTP).",
      period: "Tahunan 2023",
      date: "5 Maret 2024",
      size: "2.4 MB",
      downloads: 156,
      views: 234,
      format: "PDF",
      auditor: "Rekan & Partner",
      opinion: "WTP",
      status: "published"
    },
    {
      id: 2,
      title: "Laporan Keuangan Triwulan IV 2023",
      description: "Laporan keuangan periode Oktober-Desember 2023 dengan analisis kinerja triwulanan dan proyeksi tahun berikutnya.",
      period: "Triwulan IV 2023",
      date: "15 Januari 2024",
      size: "1.8 MB",
      downloads: 123,
      views: 189,
      format: "PDF",
      status: "published"
    },
    {
      id: 3,
      title: "Laporan Keuangan Triwulan III 2023",
      description: "Laporan keuangan periode Juli-September 2023 dengan pencapaian target dan evaluasi kinerja.",
      period: "Triwulan III 2023",
      date: "15 Oktober 2023",
      size: "1.6 MB",
      downloads: 98,
      views: 145,
      format: "PDF",
      status: "published"
    },
    {
      id: 4,
      title: "Laporan Keuangan Audited Tahun 2022",
      description: "Laporan keuangan audited tahun buku 2022 dengan opini Wajar Tanpa Pengecualian dari Kantor AkPublik 'Rekan & Partner'.",
      period: "Tahunan 2022",
      date: "10 Maret 2023",
      size: "2.2 MB",
      downloads: 201,
      views: 312,
      format: "PDF",
      auditor: "Rekan & Partner",
      opinion: "WTP",
      status: "published"
    },
    {
      id: 5,
      title: "Laporan Keuangan Triwulan II 2023",
      description: "Laporan keuangan periode April-Juni 2023 dengan analisis pertumbuhan dan strategi pengembangan.",
      period: "Triwulan II 2023",
      date: "15 Juli 2023",
      size: "1.5 MB",
      downloads: 87,
      views: 134,
      format: "PDF",
      status: "published"
    },
    {
      id: 6,
      title: "Laporan Keuangan Triwulan I 2023",
      description: "Laporan keuangan periode Januari-Maret 2023 dengan pencapaian kinerja awal tahun.",
      period: "Triwulan I 2023",
      date: "15 April 2023",
      size: "1.4 MB",
      downloads: 76,
      views: 118,
      format: "PDF",
      status: "published"
    }
  ]

  const financialHighlights = [
    {
      title: "Total Aset",
      value: "Rp 75 Miliar",
      change: "+25%",
      trend: "up",
      description: "Tumbuh 25% dari tahun sebelumnya"
    },
    {
      title: "Total Simpanan",
      value: "Rp 58 Miliar",
      change: "+30%",
      trend: "up",
      description: "Tumbuh 30% dari tahun sebelumnya"
    },
    {
      title: "Total Pinjaman",
      value: "Rp 42 Miliar",
      change: "+28%",
      trend: "up",
      description: "Tumbuh 28% dari tahun sebelumnya"
    },
    {
      title: "Rasio KPP",
      value: "98%",
      change: "+2%",
      trend: "up",
      description: "Di atas standar OJK (90%)"
    },
    {
      title: "SHU",
      value: "Rp 4.2 Miliar",
      change: "+35%",
      trend: "up",
      description: "Tumbuh 35% dari tahun sebelumnya"
    },
    {
      title: "ROA",
      value: "5.6%",
      change: "+0.8%",
      trend: "up",
      description: "Meningkat dari 4.8% tahun lalu"
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
              <div className="bg-primary/10 rounded-lg p-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Laporan Keuangan</h1>
                <p className="text-xl text-muted-foreground">
                  Laporan keuangan audited dan laporan keuangan triwulan KOPKAR PELINDO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Pencapaian Keuangan Tahun 2023
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {financialHighlights.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">{item.title}</h3>
                      <div className={`flex items-center gap-1 text-sm ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.trend === 'up' ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        <span>{item.change}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Daftar Laporan</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter Tahun
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Filter Jenis
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {financialReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{report.period}</Badge>
                        <Badge variant="outline" className="text-xs">{report.format}</Badge>
                        {report.opinion && (
                          <Badge variant="default" className="bg-green-500 text-green-50">
                            {report.opinion}
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{report.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{report.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {report.description}
                    </CardDescription>
                    {report.auditor && (
                      <div className="mt-2 text-sm text-muted-foreground">
                        <span className="font-medium">Auditor:</span> {report.auditor}
                      </div>
                    )}
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

      {/* Archive */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Arsip Laporan Keuangan
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: "2023", reports: 6, description: "6 laporan tersedia" },
                { year: "2022", reports: 6, description: "6 laporan tersedia" },
                { year: "2021", reports: 6, description: "6 laporan tersedia" },
                { year: "2020", reports: 6, description: "6 laporan tersedia" }
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

      {/* Download Info */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Informasi Download
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Semua laporan keuangan tersedia dalam format PDF dan dapat diunduh secara gratis. 
            Untuk informasi lebih lanjut, silakan hubungi divisi keuangan kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <FileText className="mr-2 h-4 w-4" />
              Panduan Membaca Laporan
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Hubungi Divisi Keuangan
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}